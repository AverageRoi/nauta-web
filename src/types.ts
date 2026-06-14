import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'
import type { SetOptional } from 'type-fest'

export type Icon = `tabler--${string}`

export interface NavItem {
  label: string
  href: string
  icon?: Icon
}

export interface NavItemParent {
  label: string
  icon?: Icon
  children: NavItem[]
}

export type HeaderItem = NavItem | NavItemParent

const Modes = ['dark', 'light'] as const

export const ColorSchemes = [
  'scheme-mono',
  'scheme-nord',
  'scheme-aurora'
] as const

export type Mode = (typeof Modes)[number]
export type ColorScheme = (typeof ColorSchemes)[number]

export interface ThemeConfig {
  site: string
  title: string
  description: string
  author: string
  navbarItems: HeaderItem[]
  footerItems: NavItem[]

  locale: string
  mode: Mode
  modeToggle: boolean
  colorScheme: ColorScheme
  openGraphImage: ImageMetadata | string | undefined
  scrollProgress: boolean
  scrollToTop: boolean
  expressiveCodeThemes: AstroExpressiveCodeOptions['themes']
}

const defaults = {
  locale: 'en',
  mode: Modes[0],
  modeToggle: true,
  colorScheme: ColorSchemes[0],
  openGraphImage: undefined,
  scrollProgress: false,
  scrollToTop: true,
  expressiveCodeThemes: [
    'vitesse-light',
    'vitesse-black'
  ] as AstroExpressiveCodeOptions['themes']
}

type PartialThemeConfig = SetOptional<ThemeConfig, keyof typeof defaults>

export const defineThemeConfig = (config: PartialThemeConfig): ThemeConfig => {
  return {
    ...defaults,
    ...config
  }
}
