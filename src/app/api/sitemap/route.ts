import { NextResponse } from 'next/server';

// Define your base URL
const baseUrl = 'https://ignatios.dev';

// Define routes and locales
const routes = ['', 'contact', 'education', 'experience'];  // Routes for English and Spanish
const locales = ['es'];  // Only Spanish needs the '/es' prefix, English is the root

export async function GET() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${locales
        .flatMap((locale) =>
          routes.map((route) => {
            // For root, we use locale without any sub-path for English (`/`) and `/es` for Spanish
            const path = route ? `/${locale}/${route}` : `/${locale}`;
            return `
              <url>
                <loc>${baseUrl}${path}</loc>
                ${locale === 'es' ? `
                  <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es${route ? `/${route}` : ''}" />
                ` : ''}
                <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route ? `/${route}` : ''}" />
              </url>
            `;
          })
        )
        .join('')}
    </urlset>
  `.trim();

  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
