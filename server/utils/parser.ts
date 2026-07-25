import * as cheerio from "cheerio";

export interface WebsiteReport {
  title: string;
  metaDescription: string;
  canonical: string;
  language: string;
  charset: string;

  h1Count: number;
  h2Count: number;

  totalImages: number;
  missingAltImages: number;

  internalLinks: number;
  externalLinks: number;

  wordCount: number;

  seoScore: number;
}

export function parseWebsite(html: string, pageUrl = ""): WebsiteReport {
  const $ = cheerio.load(html);

  // ==========================
  // Basic SEO
  // ==========================

  const title =
    $("title").text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    $('meta[name="twitter:title"]').attr("content") ||
    "";

  const metaDescription =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="twitter:description"]').attr("content") ||
    "";

  const canonical =
    $('link[rel="canonical"]').attr("href") || "";

  const language =
    $("html").attr("lang") || "";

  const charset =
    $('meta[charset]').attr("charset") ||
    $('meta[http-equiv="Content-Type"]')
      .attr("content")
      ?.match(/charset=([^;]+)/)?.[1] ||
    "";

  // ==========================
  // Headings
  // ==========================

  const h1Count = $("h1").length;
  const h2Count = $("h2").length;

  // ==========================
  // Images
  // ==========================

  const totalImages = $("img").length;

  const missingAltImages = $("img")
    .filter((_, img) => {
      const alt = $(img).attr("alt");
      return !alt || alt.trim() === "";
    })
    .length;

  // ==========================
  // Links
  // ==========================

  const domain = pageUrl
    ? new URL(pageUrl).hostname
    : "";

  let internalLinks = 0;
  let externalLinks = 0;

  $("a").each((_, link) => {
    const href = $(link).attr("href");

    if (!href)
      return;

    if (
      href.startsWith("/") ||
      href.startsWith("#")
    ) {
      internalLinks++;
      return;
    }

    try {
      const url = new URL(href);

      if (url.hostname === domain)
        internalLinks++;
      else
        externalLinks++;
    } catch {
      // Ignore invalid URLs
    }
  });

  // ==========================
  // Word Count
  // ==========================

  const bodyText = $("body")
    .text()
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = bodyText
    ? bodyText.split(" ").length
    : 0;

  // ==========================
  // SEO Score
  // ==========================

  let seoScore = 0;

  if (title)
    seoScore += 20;

  if (metaDescription)
    seoScore += 20;

  if (canonical)
    seoScore += 10;

  if (language)
    seoScore += 10;

  if (charset)
    seoScore += 5;

  if (h1Count > 0)
    seoScore += 15;

  if (missingAltImages === 0)
    seoScore += 20;
  else if (missingAltImages <= 5)
    seoScore += 10;

  return {
    title,
    metaDescription,
    canonical,
    language,
    charset,

    h1Count,
    h2Count,

    totalImages,
    missingAltImages,

    internalLinks,
    externalLinks,

    wordCount,

    seoScore,
  };
}