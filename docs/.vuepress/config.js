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
          ['/contents/Browser/分布式SESSION一致性.md', '分布式SESSION一致性'],
          ['/contents/Browser/跨域问题.md', '跨域问题'],
          ['/contents/Browser/浏览器本地存储方案.md', '浏览器本地存储方案'],
          ['/contents/Browser/浏览器窗口间通信.md', '浏览器窗口间通信'],
          ['/contents/Browser/浏览器事件.md', '浏览器事件'],
          ['/contents/Browser/浏览器渲染与内核.md', '浏览器渲染与内核'],
          ['/contents/Browser/浏览器页面呈现过程.md', '浏览器页面呈现过程'],
          ['/contents/Browser/浏览器重绘与回流.md', '浏览器重绘与回流'],
          ['/contents/Browser/强缓存与协商缓存.md', '强缓存与协商缓存'],
          ['/contents/Browser/微信小程序实现原理.md', '微信小程序实现原理'],
          ['/contents/Browser/CDN缓存的理解.md', 'CDN缓存的理解'],
          ['/contents/Browser/CSRF跨站请求伪造.md', 'CSRF跨站请求伪造'],
          ['/contents/Browser/CSS劫持攻击.md', 'CSS劫持攻击'],
          ['/contents/Browser/DNS解析过程.md', 'DNS解析过程'],
          ['/contents/Browser/Document对象.md', 'Document对象'],
          ['/contents/Browser/domReady的理解.md', 'domReady的理解'],
          ['/contents/Browser/Element对象.md', 'Element对象'],
          ['/contents/Browser/Event对象.md', 'Event对象'],
          ['/contents/Browser/GET和POST的区别.md', 'GET和POST的区别'],
          ['/contents/Browser/History对象.md', 'History对象'],
          ['/contents/Browser/HTMLElement对象.md', 'HTMLElement对象'],
          ['/contents/Browser/HTTP协议发展历程.md', 'HTTP协议发展历程'],
          ['/contents/Browser/HTTP协议概述.md', 'HTTP协议概述'],
          ['/contents/Browser/HTTPS加密传输过程.md', 'HTTPS加密传输过程'],
          ['/contents/Browser/Location对象.md', 'Location对象'],
          ['/contents/Browser/Navigator对象.md', 'Navigator对象'],
          ['/contents/Browser/OAUTH开放授权.md', 'OAUTH开放授权'],
          ['/contents/Browser/OSI七层模型.md', 'OSI七层模型'],
          ['/contents/Browser/RESTful架构与RPC架构.md', 'RESTful架构与RPC架构'],
          ['/contents/Browser/SQL注入.md', 'SQL注入'],
          ['/contents/Browser/SSO单点登录.md', 'SSO单点登录'],
          ['/contents/Browser/SSRF服务器端请求伪造.md', 'SSRF服务器端请求伪造'],
          ['/contents/Browser/TCP三次握手.md', 'TCP三次握手'],
          ['/contents/Browser/TCP与UDP异同.md', 'TCP与UDP异同'],
          ['/contents/Browser/Window对象.md', 'Window对象'],
          ['/contents/Browser/XSS跨站脚本攻击.md', 'XSS跨站脚本攻击'],
        ]
      },
    ]
  }
}