module.exports = {
  base: '/vuepress-doc/', // 部署站点的基础路径
  title: '前端笔记',
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
      {
        title: 'CSS',
        children: [
          ['/contents/CSS/布局垂直居中.md', '布局垂直居中'],
          ['/contents/CSS/块级格式化上下文.md', '块级格式化上下文'],
          ['/contents/CSS/如何避免FOUC.md', '如何避免FOUC'],
          ['/contents/CSS/实现毛玻璃效果.md', '实现毛玻璃效果'],
          ['/contents/CSS/实现文字滚动播放.md', '实现文字滚动播放'],
          ['/contents/CSS/伪类与伪元素.md', '伪类与伪元素'],
          ['/contents/CSS/文本溢出截断省略.md', '文本溢出截断省略'],
          ['/contents/CSS/响应式布局的实现.md', '响应式布局的实现'],
          ['/contents/CSS/CSS3新特性.md', 'CSS3新特性'],
          ['/contents/CSS/CSS常用单位.md', 'CSS常用单位'],
          ['/contents/CSS/CSS盒子模型.md', 'CSS盒子模型'],
          ['/contents/CSS/CSS实现渐隐渐现效果.md', 'CSS实现渐隐渐现效果'],
          ['/contents/CSS/CSS实现图形效果.md', 'CSS实现图形效果'],
          ['/contents/CSS/CSS实现展开动画.md', 'CSS实现展开动画'],
          ['/contents/CSS/CSS选择器.md', 'CSS选择器'],
          ['/contents/CSS/CSS样式优先级.md', 'CSS样式优先级'],
          ['/contents/CSS/CSS引入方式.md', 'CSS引入方式'],
          ['/contents/CSS/CSS隐藏元素的方法.md', 'CSS隐藏元素的方法'],
          ['/contents/CSS/display的值及作用.md', 'display的值及作用'],
          ['/contents/CSS/Flex布局.md', 'Flex布局'],
          ['/contents/CSS/Float浮动.md', 'Float浮动'],
          ['/contents/CSS/Grid布局.md', 'Grid布局'],
          ['/contents/CSS/Position定位.md', 'Position定位'],
          ['/contents/CSS/SVG基础.md', 'SVG基础'],
          ['/contents/CSS/Table布局.md', 'Table布局'],
        ]
      },
    ]
  }
}