import { NextResponse } from "next/server";

const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://nzsalarycalculator.iamjeevan.com/sitemap.xml`;

export function GET() {
  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
