// Lets visitors add the site to their phone's home screen like an app
export default function manifest() {
  return {
    name: 'Ramzan Talent Scholarship',
    short_name: 'Ramzan RTS',
    description:
      'Apply for the Ramzan Talent Scholarship and find answers to common questions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#073B2E',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
