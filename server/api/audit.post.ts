import { createError, defineEventHandler, readBody } from "h3";
import { parseWebsite } from "../utils/parser";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const url = body?.url?.trim();

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: "Website URL is required.",
    });
  }

  // Validate URL
  try {
    new URL(url);
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a valid URL.",
    });
  }

  // Timeout after 10 seconds
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  const start = performance.now();

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Digital Heroes Website Scanner",
      },
    });

    clearTimeout(timeout);

    const end = performance.now();

    // Check response status
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Website returned ${response.status}`,
      });
    }

    // Check content type
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) {
      throw createError({
        statusCode: 400,
        statusMessage: "The provided URL does not contain an HTML page.",
      });
    }

    const html = await response.text();

    const report = parseWebsite(html);

    return {
      success: true,
      status: response.status,
      responseTime: Math.round(end - start),
      ...report,
    };
  } catch (error: any) {
    clearTimeout(timeout);

    if (error.name === "AbortError") {
      throw createError({
        statusCode: 408,
        statusMessage: "Request timed out after 10 seconds.",
      });
    }

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage:
        error.statusMessage || "Unable to analyze the provided website.",
    });
  }
});