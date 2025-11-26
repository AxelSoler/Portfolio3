import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/ruta-privada/' }],
    sitemap: 'https://axelsoler.dev/sitemap.xml',
  }
}
