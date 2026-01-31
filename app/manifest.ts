import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Menu Gastrorandomique',
    short_name: 'Menu Gastrorandomique',
    description: 'Générateur de menus gastronomiques aléatoires',
    start_url: '/',
    display: 'standalone',
    background_color: '#053225',
    theme_color: '#053225',
    icons: [
      {
        'src': '/favicon-32x32.png',
        'sizes': '32x32',
        'type': 'image/png',
      },
      {
        "src": "\/android-icon-36x36.png",
        "sizes": "36x36",
        "type": "image\/png",
      },
      {
        "src": "\/android-icon-48x48.png",
        "sizes": "48x48",
        "type": "image\/png",
      },
      {
        "src": "\/android-icon-72x72.png",
        "sizes": "72x72",
        "type": "image\/png",
      },
      {
        "src": "\/android-icon-96x96.png",
        "sizes": "96x96",
        "type": "image\/png",
      },
      {
        "src": "\/android-icon-144x144.png",
        "sizes": "144x144",
        "type": "image\/png",
      },
      {
        "src": "\/android-icon-192x192.png",
        "sizes": "192x192",
        "type": "image\/png",
      }
    ]
    ,
  };
}
