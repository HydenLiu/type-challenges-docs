import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '类型体操备忘查询',
  description: '',
  lastUpdated: true,
  srcDir: 'src',
  cleanUrls: 'without-subfolders',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    theme: { light: 'github-light', dark: 'github-dark' },
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',
    nav: [
      { text: '类型体操', link: '/typescript-challenges/', activeMatch: '^/typescript-challenges/' },
      { text: 'TS内置类型', link: '/utility-types/', activeMatch: '^/utility-types/' },
    ],
    editLink: {
      pattern: 'https://github.com/sunupdong/type-challenges-docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunupdong/type-challenges-docs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present sunupdong'
    },

    algolia: {
      appId: 'A6R91DIA1L',
      apiKey: '409c7e62ab57644cf0bb64256b0fe522',
      indexName: 'type-challenges-docs'
    },
  }
})
