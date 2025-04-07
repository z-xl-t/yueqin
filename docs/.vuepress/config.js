import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sidebar } from './sidebar'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    displayAllHeaders: true,
    sidebar,
  }),
})
