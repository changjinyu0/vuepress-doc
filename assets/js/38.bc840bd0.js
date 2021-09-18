(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{404:function(e,s,a){"use strict";a.r(s);var n=a(45),v=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"微信小程序实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序实现原理"}},[e._v("#")]),e._v(" 微信小程序实现原理")]),e._v(" "),a("p",[e._v("微信小程序采用"),a("code",[e._v("wxml")]),e._v("、"),a("code",[e._v("wxss")]),e._v("、"),a("code",[e._v("javascript")]),e._v("进行开发，本质是一个单页应用，所有的页面渲染和事件处理，都在一个页面内进行，但又可以通过微信客户端调用原生的各种接口。微信的架构，是数据驱动视图的"),a("code",[e._v("MVVM")]),e._v("模式，其视图"),a("code",[e._v("UI")]),e._v("和数据是分离的，所有的页面更新，都需要通过对数据的变更来实现。小程序分为两个部分"),a("code",[e._v("Webview")]),e._v("和"),a("code",[e._v("AppService")]),e._v("，"),a("code",[e._v("Webview")]),e._v("主要用来展现渲染界面，"),a("code",[e._v("AppService")]),e._v("用来处理业务逻辑、数据及接口调用，通过系统层"),a("code",[e._v("JSBridge")]),e._v("实现通信，实现"),a("code",[e._v("UI")]),e._v("的渲染与事件的处理。")]),e._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),a("h3",{attrs:{id:"打包前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包前"}},[e._v("#")]),e._v(" 打包前")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Project\n   ├── pages\n   │   ├── index\n   │   │     ├── index.js              // index 逻辑\n   │   │     ├── index.json            // index 配置\n   │   │     ├── index.wxml            // index 结构\n   │   │     └── index.wxss            // index 样式表\n   │   └── logs\n   │         ├── logs.js               // logs 逻辑\n   │         ├── logs.json             // logs 配置\n   │         ├── logs.wxml             // logs 结构\n   │         └── logs.wxss             // logs 样式表\n   ├── app.js                          // 逻辑\n   ├── app.json                        // 公共配置\n   ├── app.wxss                        // 公共样式表\n   ├── project.config.json             // 项目配置\n   └── sitemap.json                    // 页面收录配置\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("h3",{attrs:{id:"打包后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包后"}},[e._v("#")]),e._v(" 打包后")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Project\n   ├── app-config.json                  // 小程序工程全部json配置信息\n   ├── app-service.js                   // JS业务逻辑打包到此处\n   ├── page-frame.html                  // 视图的模板文件\n   └── pages\n         ├── index.html                 // index 页面\n         └── logs.html                  // logs 页面\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h2",{attrs:{id:"架构方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构方案"}},[e._v("#")]),e._v(" 架构方案")]),e._v(" "),a("p",[e._v("微信小程序的框架包含两部分"),a("code",[e._v("View")]),e._v("视图层与"),a("code",[e._v("AppService")]),e._v("逻辑层，"),a("code",[e._v("View")]),e._v("层用来渲染页面结构，"),a("code",[e._v("AppService")]),e._v("层用来逻辑处理、数据请求、接口调用，它们在两个进程里运行，具体实现是在两个"),a("code",[e._v("Webview")]),e._v("中运行。"),a("br"),e._v("\n视图层和逻辑层通过系统层的"),a("code",[e._v("JSBridge")]),e._v("进行通信，逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----------------------                           -----------------------\n|         View        |                           |      AppService     |\n|                     |                           |                     |\n|  Page1 Page2 Page3  |                           |      Manager Api    |\n-----------------------                           -----------------------\n     |           ↑                                     |           ↑\n     | Event     | Data                                | Data      | Event\n     ↓           |                                     ↓           |\n-------------------------------------------------------------------------\n|                               JSBridge                                |\n|                                                                       |\n|                      Native Storage Network ...                       |\n-------------------------------------------------------------------------\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("微信将所有的视图都将加载到一个"),a("code",[e._v("Webview")]),e._v("中，称之为"),a("code",[e._v("View")]),e._v("层。将所有进行逻辑处理的"),a("code",[e._v("JS")]),e._v("代码全部加载到另一个"),a("code",[e._v("WebView")]),e._v("中，称之为"),a("code",[e._v("AppService")]),e._v("层，每个小程序只有一个并且整个生命周期常驻内存。在"),a("code",[e._v("JSBridge")]),e._v("中封装了消息通信以及通过"),a("code",[e._v("App")]),e._v("访问"),a("code",[e._v("OS")]),e._v("能力的实现，对于消息通信通过在不同平台调用相应的方法进行通信，开发环境为"),a("code",[e._v("window.postMessage")]),e._v(", "),a("code",[e._v("IOS")]),e._v("下为"),a("code",[e._v("WKWebview")]),e._v("的"),a("code",[e._v("window.webkit.messageHandlers.invokeHandler.postMessage")]),e._v("，"),a("code",[e._v("Android")]),e._v("下为"),a("code",[e._v("WeixinJSCore.invokeHandler")]),e._v("。在"),a("code",[e._v("Js")]),e._v("引擎方面，"),a("code",[e._v("Android")]),e._v("中使用"),a("code",[e._v("X5")]),e._v("内核，"),a("code",[e._v("IOS")]),e._v("中使用"),a("code",[e._v("JavaScriptCore")]),e._v("引擎，开发工具中使用"),a("code",[e._v("nwjs Chrome")]),e._v("内核。"),a("br"),e._v("\n通过使用"),a("code",[e._v("View")]),e._v("视图层与"),a("code",[e._v("AppService")]),e._v("逻辑层就实现了双线程的小程序运行方案，通过两个线程，可以做到将代码放入沙箱执行，从而做到对于代码执行的安全与管控，当然对于双线程只是一个小程序的解决方案，倘若要在一个"),a("code",[e._v("App")]),e._v("上运行多个小程序，就应该采用多线程方案去执行，不仅是对于性能方面的考虑，也是为了防止小程序之间相互影响。")]),e._v(" "),a("h2",{attrs:{id:"底层支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底层支持"}},[e._v("#")]),e._v(" 底层支持")]),e._v(" "),a("p",[e._v("微信小程序开发工具中拥有一些编译支持模板以及小程序底层支持文件。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("transWxmlToJs")]),e._v(": "),a("code",[e._v("wxml")]),e._v("转"),a("code",[e._v("js")])]),e._v(" "),a("li",[a("code",[e._v("transWxssToCss")]),e._v(": "),a("code",[e._v("wxss")]),e._v("转"),a("code",[e._v("css")])]),e._v(" "),a("li",[a("code",[e._v("transConfigToPf")]),e._v(": 模板页配置")]),e._v(" "),a("li",[a("code",[e._v("transWxmlToHtml")]),e._v(": "),a("code",[e._v("wxml")]),e._v("转"),a("code",[e._v("html")])]),e._v(" "),a("li",[a("code",[e._v("transManager")]),e._v(": 管理器")]),e._v(" "),a("li",[a("code",[e._v("WAConsole.js")]),e._v(": 框架"),a("code",[e._v("JS")]),e._v("库，控制台能力")]),e._v(" "),a("li",[a("code",[e._v("WAWebview.js")]),e._v(": 框架"),a("code",[e._v("JS")]),e._v("库，提供视图层基础的"),a("code",[e._v("API")]),e._v("能力，主要功能有将消息通信封装为"),a("code",[e._v("JSBridge")]),e._v("消息，日志组件"),a("code",[e._v("Reporter")]),e._v("封装，"),a("code",[e._v("wx")]),e._v("对象下部分渲染视图方面的"),a("code",[e._v("Api")]),e._v(",小程序组件实现和注册，"),a("code",[e._v("VirtualDOM")]),e._v("与"),a("code",[e._v("diff")]),e._v("和"),a("code",[e._v("Render UI")]),e._v("的实现，页面事件触发处理")]),e._v(" "),a("li",[a("code",[e._v("WAService.js")]),e._v(": 框架"),a("code",[e._v("JS")]),e._v("库，提供逻辑层基础的"),a("code",[e._v("API")]),e._v("能力，主要功能有消息通信封装为"),a("code",[e._v("JSBridge")]),e._v("消息，日志组件"),a("code",[e._v("Reporter")]),e._v("封装，"),a("code",[e._v("wx")]),e._v("对象下面的大部分"),a("code",[e._v("Api")]),e._v("方法，"),a("code",[e._v("App()")]),e._v("小程序入口，"),a("code",[e._v("Page()")]),e._v("页面的入口，"),a("code",[e._v("getApp")]),e._v("等全局方法，数据绑定，事件分发，生命周期管理，路由管理，模块化能力等")])]),e._v(" "),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[e._v("#")]),e._v(" 每日一题")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://github.com/WindrunnerMax/EveryDay\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://www.zhihu.com/question/50920642\nhttps://kangzubin.com/wxapp-decompile-1/\nhttps://github.com/berwin/Blog/issues/49\nhttps://segmentfault.com/a/1190000018631528\nhttp://eux.baidu.com/blog/fe/微信小程序架构原理\nhttps://juejin.im/post/5da444ab6fb9a04e054d93d8\nhttps://cloud.tencent.com/developer/article/1029663\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);