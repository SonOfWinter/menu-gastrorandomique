import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Menu Gastrorandomique',
    short_name: 'Menu Gastrorandomique',
    description: 'Générateur de menus gastronomiques aléatoires',
    start_url: '/',
    display: 'standalone',
    background_color: '#edeae0',
    theme_color: '#edeae0',
    icons: [
      {
        'src': '/favicon-32x32.png',
        'sizes': '32x32',
        'type': 'image/png',
      },
      {
        'src': '/android-chrome-192x192.png',
        'sizes': '192x192',
        'type': 'image/png',
      },
      {
        'src': '/android-chrome-512x512.png',
        'sizes': '512x512',
        'type': 'image/png'
      },
    ]
    ,
  };
}
