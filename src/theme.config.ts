import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://nordlys.fjelloverflow.dev',
  title: 'Coords',
  description: 'The web for the Coords Discord bot',
  author: 'Average & Pipo',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Terms of Service', href: '/tos/' },
    { label: 'Privacy Policy', href: '/privacy_policy/' },
    { label: 'About', href: '/about/' },
    {
      label: 'Other pages',
      children: [
        { label: 'Photos', href: '/photos/' },
        { label: 'Tools', href: '/tools/' }
      ]
    },
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/FjellOverflow/nordlys',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 5,
  postsView: 'grid',
  projectsPerPage: 3,
  projectsView: 'list',
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  expressiveCodeThemes: ['vitesse-light', 'vitesse-black']
})
