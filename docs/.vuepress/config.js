module.exports = {
  base: '/vuepress-doc/', // 部署站点的基础路径
  title: '前端装逼大全',
  description: 'Just playing around',
  displayAllHeaders: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/contents/Browser/对称加密与非对称加密.md' },
      { text: 'Guide', link: '/contents/Browser/对称加密与非对称加密.md' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/english' }
      //   ]
      // },
      { text: 'External', link: 'https://github.com/changjinyu0/vuepress-doc' },
    ],
    sidebar: [
      {
        title: 'Browser',
        children: [
          ['/contents/Browser/对称加密与非对称加密.md', '对称加密与非对称加密'],
        ]
      },
    ]
  }
}