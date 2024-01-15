import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
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
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
  }
}
