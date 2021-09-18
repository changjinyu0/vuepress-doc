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
      {
        title: 'HTML',
        children: [
          ['/contents/HTML/300ms点击延迟.md', '300ms点击延迟'],
          ['/contents/HTML/常见的兼容性问题.md', '常见的兼容性问题'],
          ['/contents/HTML/可替换元素和非替换元素.md', '可替换元素和非替换元素'],
          ['/contents/HTML/默认行为及阻止.md', '默认行为及阻止'],
          ['/contents/HTML/前端性能优化方案.md', '前端性能优化方案'],
          ['/contents/HTML/实现加载提示组件.md', '实现加载提示组件'],
          ['/contents/HTML/实现拼图滑动验证码.md', '实现拼图滑动验证码'],
          ['/contents/HTML/实现瀑布流布局.md', '实现瀑布流布局'],
          ['/contents/HTML/实现三栏布局.md', '实现三栏布局'],
          ['/contents/HTML/实现图片懒加载.md', '实现图片懒加载'],
          ['/contents/HTML/实现消息提示组件.md', '实现消息提示组件'],
          ['/contents/HTML/手动实现轮播图功能.md', '手动实现轮播图功能'],
          ['/contents/HTML/图片等比例缩放方案.md', '图片等比例缩放方案'],
          ['/contents/HTML/行内元素和块级元素.md', '行内元素和块级元素'],
          ['/contents/HTML/Attribute和Property的区别.md', 'Attribute和Property的区别'],
          ['/contents/HTML/Canvas基础.md', 'Canvas基础'],
          ['/contents/HTML/Cookie与Session.md', 'Cookie与Session'],
          ['/contents/HTML/DOCTYPE.md', 'DOCTYPE'],
          ['/contents/HTML/DOM和BOM的区别.md', 'DOM和BOM的区别'],
          ['/contents/HTML/HTML5新特性.md', 'HTML5新特性'],
          ['/contents/HTML/HTML节点操作.md', 'HTML节点操作'],
          ['/contents/HTML/HTML与XHTML区别.md', 'HTML与XHTML区别'],
          ['/contents/HTML/HTML语义化.md', 'HTML语义化'],
          ['/contents/HTML/Iframe框架及优缺点.md', 'Iframe框架及优缺点'],
          ['/contents/HTML/LocalStorage与SessionStorage.md', 'LocalStorage与SessionStorage'],
          ['/contents/HTML/Shadow DOM的理解.md', 'Shadow DOM的理解'],
          ['/contents/HTML/Web Worker.md', 'Web Worker'],
        ]
      },
      {
        title: 'JavaScript',
        children: [
          ['/contents/JavaScript/常见的内存泄漏场景.md', '常见的内存泄漏场景'],
          ['/contents/JavaScript/防抖与节流.md', '防抖与节流'],
          ['/contents/JavaScript/函数声明与函数表达式.md', '函数声明与函数表达式'],
          ['/contents/JavaScript/函数式编程的理解.md', '函数式编程的理解'],
          ['/contents/JavaScript/模板语法的简单实现.md', '模板语法的简单实现'],
          ['/contents/JavaScript/匿名函数与自执行函数.md', '匿名函数与自执行函数'],
          ['/contents/JavaScript/深入理解Js数组.md', '深入理解Js数组'],
          ['/contents/JavaScript/深入理解Js中的this.md', '深入理解Js中的this'],
          ['/contents/JavaScript/实现浅拷贝与深拷贝.md', '实现浅拷贝与深拷贝'],
          ['/contents/JavaScript/事件冒泡及阻止.md', '事件冒泡及阻止'],
          ['/contents/JavaScript/手动实现AJAX.md', '手动实现AJAX'],
          ['/contents/JavaScript/手动实现apply call bind.md', '手动实现apply call bind'],
          ['/contents/JavaScript/手动实现Promise.md', '手动实现Promise'],
          ['/contents/JavaScript/原型与原型链.md', '原型与原型链'],
          ['/contents/JavaScript/作用域与作用域链.md', '作用域与作用域链'],
          ['/contents/JavaScript/apply、call、bind.md', 'apply、call、bind'],
          ['/contents/JavaScript/async、await.md', 'async、await'],
          ['/contents/JavaScript/async、await剖析.md', 'async、await剖析'],
          ['/contents/JavaScript/ES6新特性.md', 'ES6新特性'],
          ['/contents/JavaScript/Function与Object.md', 'Function与Object'],
          ['/contents/JavaScript/Generator函数.md', 'Generator函数'],
          ['/contents/JavaScript/getter与setter.md', 'getter与setter'],
          ['/contents/JavaScript/JavaScript闭包.md', 'JavaScript闭包'],
          ['/contents/JavaScript/JavaScript选择器.md', 'JavaScript选择器'],
          ['/contents/JavaScript/JavaScript异步机制.md', 'JavaScript异步机制'],
          ['/contents/JavaScript/JS变量提升.md', 'JS变量提升'],
          ['/contents/JavaScript/Js遍历对象总结.md', 'Js遍历对象总结'],
          ['/contents/JavaScript/Js遍历数组总结.md', 'Js遍历数组总结'],
          ['/contents/JavaScript/Js捕获异常的方法.md', 'Js捕获异常的方法'],
          ['/contents/JavaScript/Js创建对象的方式.md', 'Js创建对象的方式'],
          ['/contents/JavaScript/Js的GC机制.md', 'Js的GC机制'],
          ['/contents/JavaScript/Js获取数据类型.md', 'Js获取数据类型'],
          ['/contents/JavaScript/Js继承的实现方式.md', 'Js继承的实现方式'],
          ['/contents/JavaScript/Js箭头函数.md', 'Js箭头函数'],
          ['/contents/JavaScript/Js将字符串转数字的方式.md', 'Js将字符串转数字的方式'],
          ['/contents/JavaScript/Js模块化导入导出.md', 'Js模块化导入导出'],
          ['/contents/JavaScript/Js模块化开发的理解.md', 'Js模块化开发的理解'],
          ['/contents/JavaScript/Js实现链表操作.md', 'Js实现链表操作'],
          ['/contents/JavaScript/Js实现数组排序.md', 'Js实现数组排序'],
          ['/contents/JavaScript/Js实用小技巧.md', 'Js实用小技巧'],
          ['/contents/JavaScript/JS事件流模型.md', 'JS事件流模型'],
          ['/contents/JavaScript/Js数组操作.md', 'Js数组操作'],
          ['/contents/JavaScript/Js文件异步加载.md', 'Js文件异步加载'],
          ['/contents/JavaScript/Js严格模式.md', 'Js严格模式'],
          ['/contents/JavaScript/Js中==与===.md', 'Js中==与==='],
          ['/contents/JavaScript/Js中的堆栈.md', 'Js中的堆栈'],
          ['/contents/JavaScript/Js中的逻辑运算符.md', 'Js中的逻辑运算符'],
          ['/contents/JavaScript/Js中的位操作符.md', 'Js中的位操作符'],
          ['/contents/JavaScript/Js中数组空位问题.md', 'Js中数组空位问题'],
          ['/contents/JavaScript/Js中Array对象.md', 'Js中Array对象'],
          ['/contents/JavaScript/Js中Currying的应用.md', 'Js中Currying的应用'],
          ['/contents/JavaScript/Js中Date对象.md', 'Js中Date对象'],
          ['/contents/JavaScript/Js中fetch方法.md', 'Js中fetch方法'],
          ['/contents/JavaScript/Js中Math对象.md', 'Js中Math对象'],
          ['/contents/JavaScript/Js中Number对象.md', 'Js中Number对象'],
          ['/contents/JavaScript/Js中Proxy对象.md', 'Js中Proxy对象'],
          ['/contents/JavaScript/Js中Reflect对象.md', 'Js中Reflect对象'],
          ['/contents/JavaScript/Js中RegExp对象.md', 'Js中RegExp对象'],
          ['/contents/JavaScript/Js中String对象.md', 'Js中String对象'],
          ['/contents/JavaScript/Js中Symbol对象.md', 'Js中Symbol对象'],
          ['/contents/JavaScript/JS中this的指向.md', 'JS中this的指向'],
          ['/contents/JavaScript/Json Web Token.md', 'Json Web Token'],
          ['/contents/JavaScript/let与const.md', 'let与const'],
          ['/contents/JavaScript/Map与WeakMap.md', 'Map与WeakMap'],
          ['/contents/JavaScript/new运算符.md', 'new运算符'],
          ['/contents/JavaScript/null和undefined的区别.md', 'null和undefined的区别'],
          ['/contents/JavaScript/Object对象.md', 'Object对象'],
          ['/contents/JavaScript/Promise对象.md', 'Promise对象'],
          ['/contents/JavaScript/Set与WeakSet.md', 'Set与WeakSet'],
          ['/contents/JavaScript/Thunk函数的使用.md', 'Thunk函数的使用'],
          ['/contents/JavaScript/valueOf与toString.md', 'valueOf与toString'],
          ['/contents/JavaScript/XML和JSON的比较.md', 'XML和JSON的比较'],
        ]
      },
      {
        title: 'LeetCode',
        children: [
          ['/contents/LeetCode/按奇偶排序数组II.md', '按奇偶排序数组II'],
          ['/contents/LeetCode/宝石与石头.md', '宝石与石头'],
          ['/contents/LeetCode/保持城市天际线.md', '保持城市天际线'],
          ['/contents/LeetCode/被围绕的区域.md', '被围绕的区域'],
          ['/contents/LeetCode/不同路径.md', '不同路径'],
          ['/contents/LeetCode/插入、删除和获取元素.md', '插入、删除和获取元素'],
          ['/contents/LeetCode/除数博弈.md', '除数博弈'],
          ['/contents/LeetCode/单调递增的数字.md', '单调递增的数字'],
          ['/contents/LeetCode/电话号码的字母组合.md', '电话号码的字母组合'],
          ['/contents/LeetCode/顶端迭代器.md', '顶端迭代器'],
          ['/contents/LeetCode/独一无二的出现次数.md', '独一无二的出现次数'],
          ['/contents/LeetCode/二叉树的层次遍历 II.md', '二叉树的层次遍历 II'],
          ['/contents/LeetCode/二叉树的所有路径.md', '二叉树的所有路径'],
          ['/contents/LeetCode/二叉树的最小深度.md', '二叉树的最小深度'],
          ['/contents/LeetCode/二叉搜索树中的众数.md', '二叉搜索树中的众数'],
          ['/contents/LeetCode/二进制求和.md', '二进制求和'],
          ['/contents/LeetCode/翻转二叉树.md', '翻转二叉树'],
          ['/contents/LeetCode/反转字符串.md', '反转字符串'],
          ['/contents/LeetCode/根据身高重建队列.md', '根据身高重建队列'],
          ['/contents/LeetCode/供暖器.md', '供暖器'],
          ['/contents/LeetCode/滑动窗口最大值.md', '滑动窗口最大值'],
          ['/contents/LeetCode/环形数组循环.md', '环形数组循环'],
          ['/contents/LeetCode/汇总区间.md', '汇总区间'],
          ['/contents/LeetCode/矩阵置零.md', '矩阵置零'],
          ['/contents/LeetCode/括号生成.md', '括号生成'],
          ['/contents/LeetCode/两个数组的交集.md', '两个数组的交集'],
          ['/contents/LeetCode/两个数组的交集II.md', '两个数组的交集II'],
          ['/contents/LeetCode/两两交换链表中的节点.md', '两两交换链表中的节点'],
          ['/contents/LeetCode/路径总和.md', '路径总和'],
          ['/contents/LeetCode/买卖股票的最佳时机含手续费.md', '买卖股票的最佳时机含手续费'],
          ['/contents/LeetCode/平衡二叉树.md', '平衡二叉树'],
          ['/contents/LeetCode/全排列.md', '全排列'],
          ['/contents/LeetCode/全排列II.md', '全排列II'],
          ['/contents/LeetCode/上升下降字符串.md', '上升下降字符串'],
          ['/contents/LeetCode/使括号有效的最少添加.md', '使括号有效的最少添加'],
          ['/contents/LeetCode/数组中的第K个最大元素.md', '数组中的第K个最大元素'],
          ['/contents/LeetCode/提莫攻击.md', '提莫攻击'],
          ['/contents/LeetCode/替换后的最长重复字符.md', '替换后的最长重复字符'],
          ['/contents/LeetCode/跳水板.md', '跳水板'],
          ['/contents/LeetCode/叶子相似的树.md', '叶子相似的树'],
          ['/contents/LeetCode/一次编辑.md', '一次编辑'],
          ['/contents/LeetCode/有效的括号字符串.md', '有效的括号字符串'],
          ['/contents/LeetCode/栈排序.md', '栈排序'],
          ['/contents/LeetCode/长按键入.md', '长按键入'],
          ['/contents/LeetCode/长度最小的子数组.md', '长度最小的子数组'],
          ['/contents/LeetCode/种花问题.md', '种花问题'],
          ['/contents/LeetCode/字符串相加.md', '字符串相加'],
          ['/contents/LeetCode/字符串中的第一个唯一字符.md', '字符串中的第一个唯一字符'],
          ['/contents/LeetCode/字母移位.md', '字母移位'],
          ['/contents/LeetCode/子集.md', '子集'],
          ['/contents/LeetCode/子集II.md', '子集II'],
          ['/contents/LeetCode/组合.md', '组合'],
          ['/contents/LeetCode/最后一块石头的重量.md', '最后一块石头的重量'],
          ['/contents/LeetCode/最接近原点的K个点.md', '最接近原点的K个点'],
          ['/contents/LeetCode/最长公共前缀.md', '最长公共前缀'],
          ['/contents/LeetCode/Dota2参议院.md', 'Dota2参议院'],
        ]
      },
      {
        title: 'Linux',
        children: [
          ['/contents/Linux/aspell命令.md', 'aspell命令'],
          ['/contents/Linux/awk命令.md', 'awk命令'],
          ['/contents/Linux/cat命令.md', 'cat命令'],
          ['/contents/Linux/chattr命令.md', 'chattr命令'],
          ['/contents/Linux/chmod命令.md', 'chmod命令'],
          ['/contents/Linux/chown命令.md', 'chown命令'],
          ['/contents/Linux/cmp命令.md', 'cmp命令'],
          ['/contents/Linux/col命令.md', 'col命令'],
          ['/contents/Linux/colrm命令.md', 'colrm命令'],
          ['/contents/Linux/comm命令.md', 'comm命令'],
          ['/contents/Linux/cp命令.md', 'cp命令'],
          ['/contents/Linux/csplit命令.md', 'csplit命令'],
          ['/contents/Linux/curl命令.md', 'curl命令'],
          ['/contents/Linux/cut命令.md', 'cut命令'],
          ['/contents/Linux/diff命令.md', 'diff命令'],
          ['/contents/Linux/diffstat命令.md', 'diffstat命令'],
          ['/contents/Linux/ed命令.md', 'ed命令'],
          ['/contents/Linux/egrep命令.md', 'egrep命令'],
          ['/contents/Linux/ex命令.md', 'ex命令'],
          ['/contents/Linux/expr命令.md', 'expr命令'],
          ['/contents/Linux/fgrep命令.md', 'fgrep命令'],
          ['/contents/Linux/file命令.md', 'file命令'],
          ['/contents/Linux/find命令.md', 'find命令'],
          ['/contents/Linux/fmt命令.md', 'fmt命令'],
          ['/contents/Linux/fold命令.md', 'fold命令'],
          ['/contents/Linux/grep命令.md', 'grep命令'],
          ['/contents/Linux/ifconfig命令.md', 'ifconfig命令'],
          ['/contents/Linux/ip命令.md', 'ip命令'],
          ['/contents/Linux/join命令.md', 'join命令'],
          ['/contents/Linux/journalctl命令.md', 'journalctl命令'],
          ['/contents/Linux/kill命令.md', 'kill命令'],
          ['/contents/Linux/less命令.md', 'less命令'],
          ['/contents/Linux/ln命令.md', 'ln命令'],
          ['/contents/Linux/locate命令.md', 'locate命令'],
          ['/contents/Linux/look命令.md', 'look命令'],
          ['/contents/Linux/lsattr命令.md', 'lsattr命令'],
          ['/contents/Linux/mc命令.md', 'mc命令'],
          ['/contents/Linux/mktemp命令.md', 'mktemp命令'],
          ['/contents/Linux/more命令.md', 'more命令'],
          ['/contents/Linux/mv命令.md', 'mv命令'],
          ['/contents/Linux/netstat命令.md', 'netstat命令'],
          ['/contents/Linux/od命令.md', 'od命令'],
          ['/contents/Linux/paste命令.md', 'paste命令'],
          ['/contents/Linux/patch命令.md', 'patch命令'],
          ['/contents/Linux/pico命令.md', 'pico命令'],
          ['/contents/Linux/ps命令.md', 'ps命令'],
          ['/contents/Linux/rcp命令.md', 'rcp命令'],
          ['/contents/Linux/read命令.md', 'read命令'],
          ['/contents/Linux/rm命令.md', 'rm命令'],
          ['/contents/Linux/route命令.md', 'route命令'],
          ['/contents/Linux/scp命令.md', 'scp命令'],
          ['/contents/Linux/sed命令.md', 'sed命令'],
          ['/contents/Linux/sort命令.md', 'sort命令'],
          ['/contents/Linux/split命令.md', 'split命令'],
          ['/contents/Linux/systemctl命令.md', 'systemctl命令'],
          ['/contents/Linux/tee命令.md', 'tee命令'],
          ['/contents/Linux/tmpwatch命令.md', 'tmpwatch命令'],
          ['/contents/Linux/top命令.md', 'top命令'],
          ['/contents/Linux/touch命令.md', 'touch命令'],
          ['/contents/Linux/tr命令.md', 'tr命令'],
          ['/contents/Linux/traceroute命令.md', 'traceroute命令'],
          ['/contents/Linux/umask命令.md', 'umask命令'],
          ['/contents/Linux/updatedb命令.md', 'updatedb命令'],
          ['/contents/Linux/whereis命令.md', 'whereis命令'],
          ['/contents/Linux/which命令.md', 'which命令'],
        ]
      },
      {
        title: 'Patterns',
        children: [
          ['/contents/Patterns/备忘录模式.md', '备忘录模式'],
          ['/contents/Patterns/参与者模式.md', '参与者模式'],
          ['/contents/Patterns/策略模式.md', '策略模式'],
          ['/contents/Patterns/抽象工厂模式.md', '抽象工厂模式'],
          ['/contents/Patterns/代理模式.md', '代理模式'],
          ['/contents/Patterns/单例模式.md', '单例模式'],
          ['/contents/Patterns/等待者模式.md', '等待者模式'],
          ['/contents/Patterns/迭代器模式.md', '迭代器模式'],
          ['/contents/Patterns/惰性模式.md', '惰性模式'],
          ['/contents/Patterns/防抖节流模式.md', '防抖节流模式'],
          ['/contents/Patterns/访问者模式.md', '访问者模式'],
          ['/contents/Patterns/工厂方法模式.md', '工厂方法模式'],
          ['/contents/Patterns/观察者模式.md', '观察者模式'],
          ['/contents/Patterns/简单工厂模式.md', '简单工厂模式'],
          ['/contents/Patterns/简单模板模式.md', '简单模板模式'],
          ['/contents/Patterns/建造者模式.md', '建造者模式'],
          ['/contents/Patterns/解释器模式.md', '解释器模式'],
          ['/contents/Patterns/链模式.md', '链模式'],
          ['/contents/Patterns/命令模式.md', '命令模式'],
          ['/contents/Patterns/模板方法模式.md', '模板方法模式'],
          ['/contents/Patterns/桥接模式.md', '桥接模式'],
          ['/contents/Patterns/适配器模式.md', '适配器模式'],
          ['/contents/Patterns/数据访问对象模式.md', '数据访问对象模式'],
          ['/contents/Patterns/同步模块模式.md', '同步模块模式'],
          ['/contents/Patterns/外观模式.md', '外观模式'],
          ['/contents/Patterns/委托模式.md', '委托模式'],
          ['/contents/Patterns/享元模式.md', '享元模式'],
          ['/contents/Patterns/异步模块模式.md', '异步模块模式'],
          ['/contents/Patterns/原型模式.md', '原型模式'],
          ['/contents/Patterns/责任链模式.md', '责任链模式'],
          ['/contents/Patterns/中介者模式.md', '中介者模式'],
          ['/contents/Patterns/装饰器模式.md', '装饰器模式'],
          ['/contents/Patterns/状态模式.md', '状态模式'],
          ['/contents/Patterns/组合模式.md', '组合模式'],
          ['/contents/Patterns/MVC模式.md', 'MVC模式'],
          ['/contents/Patterns/MVP模式.md', 'MVP模式'],
          ['/contents/Patterns/MVVM模式.md', 'MVVM模式'],
          ['/contents/Patterns/Widget模式.md', 'Widget模式'],
        ]
      },
      {
        title: 'Plugin',
        children: [
          ['/contents/Plugin/Git常用命令.md', 'Git常用命令'],
          ['/contents/Plugin/Git与SVN对比.md', 'Git与SVN对比'],
          ['/contents/Plugin/Nginx常用配置.md', 'Nginx常用配置'],
          ['/contents/Plugin/Rollup的基本使用.md', 'Rollup的基本使用'],
        ]
      },
      {
        title: 'React',
        children: [
          ['/contents/React/受控组件和非受控组件.md', '受控组件和非受控组件'],
          ['/contents/React/有状态和无状态组件.md', '有状态和无状态组件'],
          ['/contents/React/React生命周期.md', 'React生命周期'],
          ['/contents/React/React虚拟DOM的理解.md', 'React虚拟DOM的理解'],
          ['/contents/React/React中的纯组件.md', 'React中的纯组件'],
          ['/contents/React/React中的高阶组件.md', 'React中的高阶组件'],
          ['/contents/React/React中的合成事件.md', 'React中的合成事件'],
          ['/contents/React/React中组件间通信的方式.md', 'React中组件间通信的方式'],
          ['/contents/React/React中diff算法的理解.md', 'React中diff算法的理解'],
          ['/contents/React/React中JSX的理解.md', 'React中JSX的理解'],
          ['/contents/React/React中refs的理解.md', 'React中refs的理解'],
          ['/contents/React/React组件的state和props.md', 'React组件的state和props'],
          ['/contents/React/React组件复用的方式.md', 'React组件复用的方式'],
          ['/contents/React/ReactRouter的实现.md', 'ReactRouter的实现'],
        ]
      },
      {
        title: 'Vue',
        children: [
          ['/contents/Vue/$router和$route的区别.md', '$router和$route的区别'],
          ['/contents/Vue/对keep-alive组件的理解.md', '对keep-alive组件的理解'],
          ['/contents/Vue/服务端渲染SSR的理解.md', '服务端渲染SSR的理解'],
          ['/contents/Vue/data为何以函数形式返回.md', 'data为何以函数形式返回'],
          ['/contents/Vue/MVVM模式的理解.md', 'MVVM模式的理解'],
          ['/contents/Vue/SPA单页应用的优缺点.md', 'SPA单页应用的优缺点'],
          ['/contents/Vue/v-html可能导致的问题.md', 'v-html可能导致的问题'],
          ['/contents/Vue/v-if与v-show的区别.md', 'v-if与v-show的区别'],
          ['/contents/Vue/v-model数据绑定分析.md', 'v-model数据绑定分析'],
          ['/contents/Vue/Vue3.0新特性.md', 'Vue3.0新特性'],
          ['/contents/Vue/Vue常用性能优化.md', 'Vue常用性能优化'],
          ['/contents/Vue/Vue父子组件生命周期.md', 'Vue父子组件生命周期'],
          ['/contents/Vue/Vue路由懒加载.md', 'Vue路由懒加载'],
          ['/contents/Vue/Vue路由Hash模式分析.md', 'Vue路由Hash模式分析'],
          ['/contents/Vue/Vue路由History模式分析.md', 'Vue路由History模式分析'],
          ['/contents/Vue/Vue生命周期.md', 'Vue生命周期'],
          ['/contents/Vue/Vue事件绑定原理.md', 'Vue事件绑定原理'],
          ['/contents/Vue/Vue数据双向绑定.md', 'Vue数据双向绑定'],
          ['/contents/Vue/Vue为何采用异步渲染.md', 'Vue为何采用异步渲染'],
          ['/contents/Vue/Vue中$nextTick的理解.md', 'Vue中$nextTick的理解'],
          ['/contents/Vue/Vue中$refs的理解.md', 'Vue中$refs的理解'],
          ['/contents/Vue/Vue中的三种Watcher.md', 'Vue中的三种Watcher'],
          ['/contents/Vue/Vue中数组变动监听.md', 'Vue中数组变动监听'],
          ['/contents/Vue/Vue中虚拟DOM的理解.md', 'Vue中虚拟DOM的理解'],
          ['/contents/Vue/Vue中组件间通信的方式.md', 'Vue中组件间通信的方式'],
          ['/contents/Vue/Vue中computed分析.md', 'Vue中computed分析'],
          ['/contents/Vue/Vue中diff算法的理解.md', 'Vue中diff算法的理解'],
          ['/contents/Vue/Vue中key的作用.md', 'Vue中key的作用'],
          ['/contents/Vue/VueRouter导航守卫.md', 'VueRouter导航守卫'],
          ['/contents/Vue/Vuex和普通全局对象.md', 'Vuex和普通全局对象'],
          ['/contents/Vue/Vuex中的核心方法.md', 'Vuex中的核心方法'],
        ]
      },
    ]
  }
}