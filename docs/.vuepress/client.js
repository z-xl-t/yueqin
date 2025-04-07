import { registerComponents } from './components'
import { defineClientConfig } from '@vuepress/client'
import abcjs from 'abcjs'
export default defineClientConfig({
  enhance({ app }) {
    registerComponents(app)
    window.abcjs = abcjs
  },
})
