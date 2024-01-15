import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    screens: {
        sm_sm: '360px',
        sm_md: '375px',
        sm: '480px',
        pl: '760px',
        md: '960px',
        slg: '1280px',
        lg: '1440px',
        xl: '1910px',
        xxl: '2300px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
  }
}
