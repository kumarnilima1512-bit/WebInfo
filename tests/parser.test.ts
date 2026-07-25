import { describe, it, expect } from "vitest";
import { parseWebsite } from "../server/utils/parser";

describe("parseWebsite", () => {
  it("parses title and meta description correctly", () => {
    const html = `
      <html>
        <head>
          <title>My Website</title>
          <meta name="description" content="Demo website description">
        </head>
        <body></body>
      </html>
    `;

    const result = parseWebsite(html);

    expect(result.title).toBe("My Website");
    expect(result.metaDescription).toBe("Demo website description");
  });

  it("counts H1 headings correctly", () => {
    const html = `
      <html>
        <body>
          <h1>Heading One</h1>
          <h1>Heading Two</h1>
        </body>
      </html>
    `;

    const result = parseWebsite(html);

    expect(result.h1Count).toBe(2);
  });

  it("counts missing image alt attributes", () => {
    const html = `
      <html>
        <body>
          <img src="a.jpg" alt="Image">
          <img src="b.jpg">
          <img src="c.jpg" alt="">
        </body>
      </html>
    `;

    const result = parseWebsite(html);

    expect(result.totalImages).toBe(3);
    expect(result.missingAltImages).toBe(2);
  });

  it("returns zero values for an empty page", () => {
    const result = parseWebsite("<html></html>");

    expect(result.title).toBe("");
    expect(result.metaDescription).toBe("");
    expect(result.h1Count).toBe(0);
    expect(result.totalImages).toBe(0);
    expect(result.wordCount).toBe(0);
  });
});