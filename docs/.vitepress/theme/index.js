import DefaultTheme from 'vitepress/theme'
// import { handleRedirects } from './redirects'

import './styles/vars.css'
import './styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    if (typeof window !== 'undefined'){}
      // handleRedirects(ctx.router)
  }
}
