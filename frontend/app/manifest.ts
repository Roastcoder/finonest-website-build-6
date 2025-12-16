import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Finonest - Best Loan Provider in India',
    short_name: 'Finonest',
    description: 'Finonest offers a wide range of financial products including personal loans, home loans, and business loans.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0064D6',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}