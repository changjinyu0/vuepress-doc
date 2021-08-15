module.exports = {
  base: '/', // 部署站点的基础路径
  title: '前端组件在线文档',
  description: 'Just playing around',
  head: ['link', { rel: 'icon', href: '/logo.png' }], // 存放在head头中的标签
  displayAllHeaders: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
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
      ['../contents/AdaptToolTip', '自适应ToolTip'],
      {
        title: '你大爷的',
        path: '/contents/my/my',
        children: [
          ['/contents/my/my.md', '快乐']
        ]
      },
    ]
  }
}