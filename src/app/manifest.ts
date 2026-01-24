import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Etomidate API',
    short_name: 'Etomidate',
    description:
      'Premium Etomidate Active Pharmaceutical Ingredient - GMP Certified, USP Grade',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9FAFB',
    theme_color: '#7FB069',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['medical', 'pharmaceutical', 'business'],
    lang: 'en-US',
  };
}
