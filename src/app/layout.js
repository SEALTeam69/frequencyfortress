// src/app/layout.js
import './globals.css'
import { ibmPlexMono, inter, pirata } from '@/fonts'

export const metadata = {
  title: 'FREQUENCY FORTRESS',
  description: 'Next Gen Christed Infrastructure – New Eden Begins Here',
  keywords: [
  // Core mission
  'Christed Economy',
  'Sacred Capital',
  'Divine Technology',
  'Ascension Infrastructure',
  'Grid Restoration',
  'Spiritual Finance',
  'Frequency Fortress',
  'ST69',
  'SEAL Team 69',
  'New Eden',
  'Cosmic Sovereignty',
  'Energetic Leadership',
  'Christ Consciousness Web',

  // Spiritual Search Traffic
  'Ascension',
  'Spiritual Awakening',
  'New Earth',
  'Twin Flame',
  'Sacred Union',
  'Starseeds',
  'Lightworkers',
  'Energy Shift',
  '5D Consciousness',
  'Higher Self Activation',
  'Timeline Jumping',
  'Divine Masculine',
  'Divine Feminine',
  'Starseed Mission',
  'Light Body',
  'Galactic Federation',

  // Tech-Spirit Crossroads
  'Frequency Technology',
  'Quantum Architecture',
  'Energetic Coding',
  'New Earth Technology',
  'Source Intelligence',
  'Metaphysical Infrastructure',
  'Spiritual Tech Stack',
  'Encrypted Ascension Protocols',

  // Conspiracy/Truth Flow
  'Matrix Exit Strategy',
  'Decode the Matrix',
  'Spiritual Warfare',
  'Hidden Agendas',
  'Great Awakening',
  '144,000 Lightworkers',
  'DNA Activation',
  'Cosmic Override',
  ],
  metadataBase: new URL('https://frequencyfortress.com'), 
  openGraph: {
    title: 'FREQUENCY FORTRESS',
    description: 'Next Gen Christed Infrastructure – New Eden Begins Here.',
    url: 'https://frequencyfortress.com',
    siteName: 'Frequency Fortress',
    images: [
      {
        url: '/assets/og_image.png',
        width: 1200,
        height: 630,
        alt: 'ST69 Patch',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@st69lol',
    title: 'FREQUENCY FORTRESS',
    description: 'Council-approved override terminal for New Earth command.',
    images: ['/assets/st69_patch.png'],
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable} ${pirata.variable}`}>
        <head>
          <link rel="stylesheet" href="https://use.typekit.net/hio6xnf.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
        </head>
      <body className="bg-[#0D031E] text-white">{children}</body>
    </html>
  )
}