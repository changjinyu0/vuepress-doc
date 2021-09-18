(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{392:function(v,_,e){"use strict";e.r(_);var c=e(45),t=Object(c.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"sso单点登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sso单点登录"}},[v._v("#")]),v._v(" SSO单点登录")]),v._v(" "),e("p",[e("code",[v._v("SSO")]),v._v("单点登录是指在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。")]),v._v(" "),e("h2",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),e("p",[v._v("最初的时候，服务的提供者只做了一个单系统，所有的功能都在单系统上，此时不需要"),e("code",[v._v("SSO")]),v._v("，一次登录就可以访问所有功能，后来用户量越来越大且功能服务越来越多，为了合理利用资源和降低耦合性，服务商将功能划分为多个子系统，而子系统的用户登录凭证是相互隔离的，如果在这个子系统登录完成，再访问另一个子系统还需要登录，这显然不太合适，而"),e("code",[v._v("SSO")]),v._v("就是对于这种问题的解决方案，在多个系统中，用户只需要某一个系统中登录，在其他系统中都无需再次验证用户身份即可静默登录，例如在百度一次登录，再访问贴吧、网盘等都可以静默登录。")]),v._v(" "),e("h3",{attrs:{id:"oauth与sso区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth与sso区别"}},[v._v("#")]),v._v(" OAUTH与SSO区别")]),v._v(" "),e("ul",[e("li",[v._v("从信任角度来看，"),e("code",[v._v("OAUTH")]),v._v("开放授权的服务端和第三方客户端不属于一个互相信任的应用群，而单点登录的子系统都在一个互相信任的应用群，通常是同一个公司提供的服务。")]),v._v(" "),e("li",[v._v("从资源角度来看，"),e("code",[v._v("OAUTH")]),v._v("开放授权主要是让用户自行决定在服务端的个人资源是否允许第三方应用访问，而单点登录的资源本身都在子系统这边，主要服务是用于登录，以及管理用户在各个子系统的权限信息。")])]),v._v(" "),e("h2",{attrs:{id:"实现方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现方案"}},[v._v("#")]),v._v(" 实现方案")]),v._v(" "),e("h3",{attrs:{id:"共享session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享session"}},[v._v("#")]),v._v(" 共享SESSION")]),v._v(" "),e("p",[v._v("如果系统是使用"),e("code",[v._v("SESSION")]),v._v("来记录用户信息的话，那么就可以采用共享"),e("code",[v._v("SESSION")]),v._v("的方式进行实现单点登录，使用"),e("code",[v._v("SESSION")]),v._v("信息作为单点登录的方式就需要解决两个问题，一是子系统的"),e("code",[v._v("SESSION")]),v._v("是相互隔离的问题，二是用户的"),e("code",[v._v("SESSIONID")]),v._v("如何在客户端共享的问题。"),e("br"),v._v(" "),e("code",[v._v("SESSION")]),v._v("的一致性的解决方案主要有"),e("code",[v._v("SESSION")]),v._v("同步、"),e("code",[v._v("SESSION")]),v._v("集中存储的方式，"),e("code",[v._v("SESSION")]),v._v("同步比较消耗资源，所以一般还是使用"),e("code",[v._v("SESSION")]),v._v("集中存储的方式。"),e("br"),v._v("\n对于"),e("code",[v._v("SESSIONID")]),v._v("在客户端共享的问题，"),e("code",[v._v("SESSIONID")]),v._v("主要还是存储在"),e("code",[v._v("COOKIE")]),v._v("中，所以需要解决的问题是"),e("code",[v._v("COOKIE")]),v._v("的跨域问题，对于同一个顶级域名下的二级域名，可以通过在"),e("code",[v._v("SET-COOKIE")]),v._v("时设置"),e("code",[v._v("domain")]),v._v("属性为顶级域名，即可实现在顶级域名与二级域名三级域名下的"),e("code",[v._v("COOKIE")]),v._v("共享，若是需要非子域名下的"),e("code",[v._v("COOKIE")]),v._v("共享，可以考虑使用"),e("code",[v._v("P3P")]),v._v("隐私参考项目平台"),e("code",[v._v("Platform for Privacy Preferences")]),v._v("的"),e("code",[v._v("header")]),v._v("的方式跨域"),e("code",[v._v("SET-COOKIE")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"ticket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ticket"}},[v._v("#")]),v._v(" Ticket")]),v._v(" "),e("p",[e("code",[v._v("Ticket")]),v._v("方式也称为"),e("code",[v._v("SSO-Token")]),v._v("，其是一个用户身份的标识，这个标识在所有子系统群中是唯一的，并且所有的子系统"),e("code",[v._v("SERVER")]),v._v("都可以验证这个"),e("code",[v._v("Token")]),v._v("并同时能够拿到这个"),e("code",[v._v("Token")]),v._v("所代表的用户信息，同样这种方式也需要解决"),e("code",[v._v("COOKIE")]),v._v("的跨域问题，同样一般也是需要使用顶级域名的"),e("code",[v._v("domain")]),v._v("属性或者"),e("code",[v._v("P3P")]),v._v("的"),e("code",[v._v("header")]),v._v("的跨域"),e("code",[v._v("SET-COOKIE")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"cas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[v._v("#")]),v._v(" CAS")]),v._v(" "),e("p",[e("code",[v._v("CAS")]),v._v("中央认证服务"),e("code",[v._v("Central Authentication Service")]),v._v("，将认证服务单独抽出作为一个子系统，所有的登录认证服务都在"),e("code",[v._v("CAS")]),v._v("认证中心进行。"),e("code",[v._v("CAS")]),v._v("系统像是一个中转中心，可以认证所有用户的身份，同样也可以直接通过在"),e("code",[v._v("CAS")]),v._v("系统登录后以登录态跳转到其他各个系统。"),e("br"),v._v("\n假如我们存在三个子系统，"),e("code",[v._v("A")]),v._v("系统"),e("code",[v._v("A.com")]),v._v("、"),e("code",[v._v("B")]),v._v("系统"),e("code",[v._v("B.com")]),v._v("、认证服务"),e("code",[v._v("SSO.com")]),v._v("，当用户已经注册，登录时的主要流程：")]),v._v(" "),e("ul",[e("li",[v._v("用户打开系统"),e("code",[v._v("A")]),v._v("，此时用户未登录，系统自动跳转到认证服务系统"),e("code",[v._v("SSO.com")]),v._v("并携带参数存储跳转地址"),e("code",[v._v("A.com")]),v._v("。")]),v._v(" "),e("li",[v._v("用户在"),e("code",[v._v("SSO.com")]),v._v("输入账号密码，点击登录验证成功后，中央认证服务器返回一个"),e("code",[v._v("Ticket")]),v._v("，并将已经登录的"),e("code",[v._v("COOKIE")]),v._v("写入"),e("code",[v._v("SSO.com")]),v._v("认证服务的域名下，"),e("code",[v._v("SSO.com")]),v._v("认证服务重定向至跳转到认证服务时携带的地址，也就是上一步的"),e("code",[v._v("A.com")]),v._v("，并携带中央认证服务端下发的"),e("code",[v._v("Ticket")]),v._v("。")]),v._v(" "),e("li",[v._v("系统"),e("code",[v._v("A")]),v._v("得到"),e("code",[v._v("Ticket")]),v._v("并向本系统的服务器传递"),e("code",[v._v("Ticket")]),v._v("，服务端验证"),e("code",[v._v("Ticket")]),v._v("无误后获取"),e("code",[v._v("Ticket")]),v._v("中携带的用户信息，并设置当前"),e("code",[v._v("A")]),v._v("系统的此用户为登录态，下发"),e("code",[v._v("COOKIE")]),v._v("信息等用户凭据，至此该用户可正常使用"),e("code",[v._v("A")]),v._v("系统的服务。")]),v._v(" "),e("li",[v._v("此时用户打开"),e("code",[v._v("B")]),v._v("系统，由于用户未在"),e("code",[v._v("B")]),v._v("系统登录，系统自动跳转到认证服务系统"),e("code",[v._v("SSO.com")]),v._v("并携带参数存储跳转地址"),e("code",[v._v("B.com")]),v._v("。")]),v._v(" "),e("li",[v._v("用户在"),e("code",[v._v("SSO.com")]),v._v("已经处于登录状态，此时直接从中央认证服务器获取"),e("code",[v._v("Ticket")]),v._v("，然后重定向至跳转到认证服务时携带的地址，也就是上一步的"),e("code",[v._v("B.com")]),v._v("，并携带中央认证服务端下发的"),e("code",[v._v("Ticket")]),v._v("。")]),v._v(" "),e("li",[v._v("系统"),e("code",[v._v("B")]),v._v("得到"),e("code",[v._v("Ticket")]),v._v("并向本系统的服务器传递"),e("code",[v._v("Ticket")]),v._v("，服务端验证"),e("code",[v._v("Ticket")]),v._v("无误后获取"),e("code",[v._v("Ticket")]),v._v("中携带的用户信息，并设置当前"),e("code",[v._v("B")]),v._v("系统的此用户为登录态，下发"),e("code",[v._v("COOKIE")]),v._v("信息等用户凭据，至此该用户可正常使用"),e("code",[v._v("B")]),v._v("系统的服务。")])]),v._v(" "),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://www.zifangsky.cn/1327.html\nhttps://zhuanlan.zhihu.com/p/66037342\nhttps://www.jianshu.com/p/75edcc05acfd\nhttps://blog.csdn.net/qq_32060101/article/details/83473760\nhttps://blog.csdn.net/qq_32239417/article/details/62228624\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br")])])])}),[],!1,null,null,null);_.default=t.exports}}]);