import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://nautabot.netlify.app/',
  title: 'Nauta',
  description: 'The web for the Nauta Discord bot',
  author: 'Average & Pipo',
  navbarItems: [
    { label: 'Features', href: '/features/' },
    { label: 'About', href: '/about/' },
    { label: 'Terms of Service', href: '/tos/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/AverageRoi',
      label: 'Github'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  scrollProgress: false,
  scrollToTop: true,
  expressiveCodeThemes: ['vitesse-light', 'vitesse-black']
})
