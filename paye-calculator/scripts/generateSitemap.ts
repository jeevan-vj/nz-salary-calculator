import { writeFileSync } from 'fs';
import { format } from 'date-fns';

const domain = 'https://nzsalarycalculator.co.nz'; // Replace with your actual domain

const routes = [
  '/',
  '/calculator',
  '/about',
  '/privacy-policy',
  '/terms'
];

function generateSitemap() {
  const pages = routes.map((route) => ({
    url: `${domain}${route}`,
    lastmod: format(new Date(), 'yyyy-MM-dd'),
    changefreq: 'weekly',
    priority: route === '/' ? '1.0' : '0.8'
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();