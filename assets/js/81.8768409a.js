(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{448:function(v,_,e){"use strict";e.r(_);var a=e(45),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"iframe框架及优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iframe框架及优缺点"}},[v._v("#")]),v._v(" iframe框架及优缺点")]),v._v(" "),e("p",[e("code",[v._v("HTML5")]),v._v("不再支持使用"),e("code",[v._v("frame")]),v._v("，关于"),e("code",[v._v("frame")]),v._v("与"),e("code",[v._v("iframe")]),v._v("的区别，可以参阅  "),e("a",{attrs:{href:"https://www.cnblogs.com/songzhixue/p/11261118.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("iframe与frame的区别"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[v._v("#")]),v._v(" 基本使用")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("src")]),v._v("：规定在"),e("code",[v._v("iframe")]),v._v("中显示的文档的"),e("code",[v._v("URL")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("frameborder")]),v._v("：规定是否显示框架周围的边框。")]),v._v(" "),e("li",[e("code",[v._v("scrolling")]),v._v("：规定是否在"),e("code",[v._v("iframe")]),v._v("中显示滚动条。")]),v._v(" "),e("li",[e("code",[v._v("width")]),v._v("：规定"),e("code",[v._v("iframe")]),v._v("的宽度，建议使用"),e("code",[v._v("CSS")]),v._v("替代。")]),v._v(" "),e("li",[e("code",[v._v("height")]),v._v("：规定"),e("code",[v._v("iframe")]),v._v("的高度，建议使用"),e("code",[v._v("CSS")]),v._v("替代。")]),v._v(" "),e("li",[e("code",[v._v("sandbox")]),v._v("：启用一系列对"),e("code",[v._v("iframe")]),v._v("中内容的额外限制。")]),v._v(" "),e("li",[e("code",[v._v("marginwidth")]),v._v("：定义"),e("code",[v._v("iframe")]),v._v("的左侧和右侧的边距。")]),v._v(" "),e("li",[e("code",[v._v("marginheight")]),v._v("：定义"),e("code",[v._v("iframe")]),v._v("的顶部和底部的边距。")]),v._v(" "),e("li",[e("code",[v._v("srcdoc")]),v._v("：规定在"),e("code",[v._v("iframe")]),v._v("中显示的页面的"),e("code",[v._v("HTML")]),v._v("内容。")]),v._v(" "),e("li",[e("code",[v._v("align")]),v._v("：规定如何根据周围的元素来对齐此框架，建议使用样式替代。")])]),v._v(" "),e("h2",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" 使用场景")]),v._v(" "),e("h3",{attrs:{id:"加载其他域的网页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载其他域的网页"}},[v._v("#")]),v._v(" 加载其他域的网页")]),v._v(" "),e("p",[e("code",[v._v("<iframe>")]),v._v("是允许跨域请求资源的，但是不能够修改，由此可以在网页中嵌套其他网页，如需要跨域通信的话，需要考虑"),e("code",[v._v("document.domain")]),v._v("、"),e("code",[v._v("window.name")]),v._v("、"),e("code",[v._v("window.postMessage")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"典型系统结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型系统结构"}},[v._v("#")]),v._v(" 典型系统结构")]),v._v(" "),e("p",[v._v("典型的系统结构，左侧是功能树，上部为个人信息，右侧就是实际功能，使用"),e("code",[v._v("iframe")]),v._v("将功能单独分离出来，当然也可以使用"),e("code",[v._v("vue")]),v._v("和"),e("code",[v._v("react")]),v._v("进行实现。")]),v._v(" "),e("h3",{attrs:{id:"实现ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现ajax"}},[v._v("#")]),v._v(" 实现Ajax")]),v._v(" "),e("p",[v._v("可以使用"),e("code",[v._v("iframe")]),v._v("进行实现异步请求发送，来模拟"),e("code",[v._v("Ajax")]),v._v("的请求操作，"),e("code",[v._v("Ajax")]),v._v("的异步请求完成操作为"),e("code",[v._v("XHR.readyState === 4")]),v._v("执行"),e("code",[v._v("callback")]),v._v("，"),e("code",[v._v("iframe")]),v._v("使用"),e("code",[v._v("iframe.onload")]),v._v("执行"),e("code",[v._v("callback")]),v._v("，还可以实现一个轮询长连接。")]),v._v(" "),e("h3",{attrs:{id:"加载广告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载广告"}},[v._v("#")]),v._v(" 加载广告")]),v._v(" "),e("p",[v._v("广告是与原文无关的，假如硬编码进去，会造成网页布局的紊乱,而且这样势必需要引入额外的"),e("code",[v._v("css")]),v._v("和"),e("code",[v._v("js")]),v._v("文件，极大的降低了网页的安全性，使用"),e("code",[v._v("iframe")]),v._v("便可以解决这些问题。")]),v._v(" "),e("h3",{attrs:{id:"提交表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交表单"}},[v._v("#")]),v._v(" 提交表单")]),v._v(" "),e("p",[v._v("可以使用"),e("code",[v._v("iframe")]),v._v("提交表单来避免整个页面的刷新，还可以实现无刷新文件上传的操作。")]),v._v(" "),e("h2",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[v._v("#")]),v._v(" 优缺点")]),v._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),e("ol",[e("li",[v._v("可以跨域请求其他网站，并将网站完整展示出来。")]),v._v(" "),e("li",[v._v("典型系统结构可以提高代码的复用性。")]),v._v(" "),e("li",[v._v("创建一个全新的独立的宿主环境，可以隔离或者访问原生接口及对象。")]),v._v(" "),e("li",[v._v("模块分离，若多个页面引用同一个"),e("code",[v._v("iframe")]),v._v("，则便于修改操作。")]),v._v(" "),e("li",[v._v("实现广告展示的一个解决方案。")]),v._v(" "),e("li",[v._v("若需要刷新"),e("code",[v._v("iframe")]),v._v("则只需要刷新框架内，不需要刷新整个页面。")])]),v._v(" "),e("h3",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("iframes")]),v._v("阻塞页面加载，影响网页加载速度，"),e("code",[v._v("iframe")]),v._v("加载完毕后才会触发"),e("code",[v._v("window.onload")]),v._v("事件，动态设置"),e("code",[v._v("src")]),v._v("可解决这个问题。")]),v._v(" "),e("li",[v._v("加载了新页面，增加了"),e("code",[v._v("css")]),v._v("与"),e("code",[v._v("js")]),v._v("文件的请求，即额外增加了"),e("code",[v._v("HTTP")]),v._v("请求，增加了服务器负担。")]),v._v(" "),e("li",[v._v("有时"),e("code",[v._v("iframe")]),v._v("由于页面挤占空间的原因出现滚动条，造成布局混乱。")]),v._v(" "),e("li",[v._v("不利于"),e("code",[v._v("SEO")]),v._v("，搜索引擎的爬虫无法解读"),e("code",[v._v("iframe")]),v._v("的页面。")]),v._v(" "),e("li",[v._v("有些小型的移动设备如手机等无法完全显示框架，兼容性较差。")]),v._v(" "),e("li",[e("code",[v._v("iframe")]),v._v("与主页面是共享链接池的，若"),e("code",[v._v("iframe")]),v._v("加载时用光了链接池，则会造成主页面加载阻塞。")])]),v._v(" "),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://www.zhihu.com/question/20653055\nhttps://www.cnblogs.com/hq233/p/9849939.html\nhttps://blog.csdn.net/baxiadsy_csdn/article/details/86245809\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])])])}),[],!1,null,null,null);_.default=r.exports}}]);