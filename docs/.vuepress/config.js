module.exports = {
  base: '/vuepress-doc/', // 部署站点的基础路径
  title: '前端面试必备',
  description: 'Just playing around',
  displayAllHeaders: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/contents/JS/基础类型.md' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      { text: 'External', link: 'https://www.baidu.com' },
    ],
    sidebar: [
      {
        title: 'JS',
        children: [
          ['/contents/JS/基础类型.md', '基础类型'],
          ['/contents/JS/闭包.md', '闭包'],
        ]
      },
    ]
  }
}