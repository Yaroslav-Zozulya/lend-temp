import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem', // паддинг для маленьких устройств
          md: '2rem', // паддинг для средних устройств
          lg: '2rem', // паддинг для больших устройств
          xl: '5rem', // паддинг для очень больших устройств
        },
      },
    },
    screens: {
      sm: '360px',
      md: '744px',
      lg: '1024px',
      xl: '1440px',
    },
    backgroundImage: {
      'hero-home': 'url(/images/home/hero/hero_image.png)',
      'hero-services': 'url(/images/services/services_hero.png)',
      'fund-structures-left': 'url(/images/services/fund_structures_bg.png)',
      'general-services-bg': 'url(/images/services/general_services_bg.png)',
      'general-services-mobile-bg':
        'url(/images/services/general_services_bg_mobile.png)',
      'manager-bg': 'url(/images/services/manager_bg.png)',
      'manager-mobile-bg': 'url(/images/services/manager_bg_mobil.png)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      headerBg: '#032F5C',
      mainText: '#02203F',
      navLinkHover: 'rgba(248, 248, 248, 0.20)',
      hover: '#F0EEE0',
      lightColor: '#F0EEE0',
      pageBg: '#F8F8F8',
      sidebarBg: '#395B55',
      accordionLine: 'rgba(57, 91, 85, 0.6)',
      panel: 'rgba(248, 248, 248, 0.7)',
    },
  },
}

export default config
