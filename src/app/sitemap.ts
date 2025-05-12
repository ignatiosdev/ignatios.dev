// app/sitemap.ts
import { MetadataRoute } from 'next'
import projectsData from '@/data/projects' // Ajusta la ruta según tu estructura

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ignatios.dev'
  const locales = ['en', 'es'] // Tus idiomas soportados
  const lastModified = new Date()
  
  // Rutas estáticas
  const staticRoutes = [
    '',
    'contact',
    'education',
    'projects'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generar entradas para cada combinación de locale y ruta
  for (const locale of locales) {
    // Rutas estáticas
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      })
    }

    // Rutas dinámicas de proyectos
    projectsData.forEach((project) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  }

  // Página raíz sin locale (redirección o default)
  sitemapEntries.unshift({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  return sitemapEntries
}