(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(v,_,e){"use strict";e.r(_);var c=e(45),o=Object(c.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"get和post的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get和post的区别"}},[v._v("#")]),v._v(" GET和POST的区别")]),v._v(" "),e("p",[v._v("超文本传输协议"),e("code",[v._v("HTTP")]),v._v("的设计目的是保证客户端与服务端之间的通信，"),e("code",[v._v("HTTP")]),v._v("协议的工作方式是客户端与服务端之间的请求响应，在客户端与服务端进行请求响应时最常用的两种方法就是"),e("code",[v._v("GET")]),v._v("与"),e("code",[v._v("POST")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[v._v("#")]),v._v(" 区别")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("GET")]),v._v("是安全的、幂等的，而"),e("code",[v._v("POST")]),v._v("是 不安全的、不幂等的。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("在浏览器回退或者刷新时是无害的，而"),e("code",[v._v("POST")]),v._v("会再次提交数据请求。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("产生的"),e("code",[v._v("URL")]),v._v("地址可以作为书签保存，而"),e("code",[v._v("POST")]),v._v("不行。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("请求会被浏览器主动"),e("code",[v._v("cache")]),v._v("，而"),e("code",[v._v("POST")]),v._v("不会主动缓存。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("请求只能进行"),e("code",[v._v("url")]),v._v("编码，而"),e("code",[v._v("POST")]),v._v("支持多种编码方式。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("请求参数会被完整保留在浏览器历史记录里，而"),e("code",[v._v("POST")]),v._v("中的参数不会被保留。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("请求在"),e("code",[v._v("URL")]),v._v("中传送的参数长度受"),e("code",[v._v("URL")]),v._v("长度限制，而"),e("code",[v._v("POST")]),v._v("的大小取决于后端配置。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("参数只接受"),e("code",[v._v("ASCII")]),v._v("字符的数据类型，而"),e("code",[v._v("POST")]),v._v("没有限制，可以传输二进制数据。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("比"),e("code",[v._v("POST")]),v._v("更不安全，因为参数直接暴露在"),e("code",[v._v("URL")]),v._v("上，所以不适合传递敏感信息。")]),v._v(" "),e("li",[e("code",[v._v("GET")]),v._v("参数通过"),e("code",[v._v("URL")]),v._v("传递，直接可见，"),e("code",[v._v("POST")]),v._v("的参数放在"),e("code",[v._v("Request body")]),v._v("中，不直接可见。")])]),v._v(" "),e("h2",{attrs:{id:"详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详解"}},[v._v("#")]),v._v(" 详解")]),v._v(" "),e("p",[v._v("上述的区别都是"),e("code",[v._v("GET")]),v._v("与"),e("code",[v._v("POST")]),v._v("在浏览器中的具体实现上的区别，例如现在广泛使用的"),e("code",[v._v("Promise")]),v._v("就是各种对于"),e("code",[v._v("Promise/A+")]),v._v("的规范"),e("code",[v._v("promisesaplus.com")]),v._v("的实现，在"),e("code",[v._v("HTTP/1.1")]),v._v("的规范的征求意见稿"),e("code",[v._v("RFC")]),v._v("中提到了语义这个词语，语义定义了一个类型的请求应该具有什么样的，例如"),e("code",[v._v("GET")]),v._v("的语义就应该是获取资源，"),e("code",[v._v("POST")]),v._v("的语义就是修改资源，如果在符合语法的前提下实现违背语义的行为也是可以做到的，例如使用"),e("code",[v._v("GET")]),v._v("修改资源或者使用"),e("code",[v._v("POST")]),v._v("获取资源，甚至使用"),e("code",[v._v("GET")]),v._v("发送"),e("code",[v._v("body")]),v._v("(这需要服务端能够配合解析)，这是合法的请求但是这是不符合语义的请求，而且很有可能会带来一些副作用，所以在本质上"),e("code",[v._v("GET")]),v._v("与"),e("code",[v._v("POST")]),v._v("的区别是其语义的区别，甚至可以理解为"),e("code",[v._v("GET")]),v._v("与"),e("code",[v._v("POST")]),v._v("并没有什么区别，只要客户端与服务端能够配合发送与接收即可，一个敢发一个敢收就可以了，而上文所述的区别主要是在浏览器中具体实现上的区别。")]),v._v(" "),e("p",[v._v("关于安全性与幂等性，安全性是指访问接口时不会对服务端资源状态发生改变，幂等性是指对于同一接口的"),e("code",[v._v("URI")]),v._v("多次访问时，得到的资源状态是相同的。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("GET")]),v._v(": 安全的，幂等的，用于读取资源。")]),v._v(" "),e("li",[e("code",[v._v("POST")]),v._v(": 不安全的，不幂等的，用于服务端自动产生的实例号创建资源，更新部分资源。")]),v._v(" "),e("li",[e("code",[v._v("PUT")]),v._v(": 不安全的，幂等的，用于客户端的实例号创建资源，更新资源。")]),v._v(" "),e("li",[e("code",[v._v("DELETE")]),v._v(": 不安全的，幂等的，用于客户端实例号删除资源。")])]),v._v(" "),e("p",[v._v("在浏览器点击后退操作时，如果将要返回的页面是"),e("code",[v._v("GET")]),v._v("请求的，那么将会安全的进行回退，如果将要返回的页面是"),e("code",[v._v("POST")]),v._v("请求的，例如使用"),e("code",[v._v("<form>")]),v._v("的"),e("code",[v._v("method")]),v._v("为"),e("code",[v._v("POST")]),v._v("去提交数据并跳转页面的话，浏览器会发出一个是否再次提交表单的确认提示。")]),v._v(" "),e("p",[v._v("关于"),e("code",[v._v("GET")]),v._v("和"),e("code",[v._v("POST")]),v._v("提交的参数长度的限制问题，"),e("code",[v._v("GET")]),v._v("是通过"),e("code",[v._v("URL")]),v._v("提交数据，因此"),e("code",[v._v("GET")]),v._v("可提交的数据量就跟"),e("code",[v._v("URL")]),v._v("所能达到的最大长度有直接关系，实际上"),e("code",[v._v("HTTP")]),v._v("协议对"),e("code",[v._v("URL")]),v._v("长度是没有限制的，但是在各种浏览器中对于"),e("code",[v._v("URL")]),v._v("长度是有限制的，而且限制的长度是不同的，一般使用不超过"),e("code",[v._v("4K")]),v._v("，此外服务端也会对于"),e("code",[v._v("URL")]),v._v("有各自的限制，当然服务端可以接收的"),e("code",[v._v("URL")]),v._v("长度大小是可以配置的，同样的，"),e("code",[v._v("HTTP")]),v._v("协议没有对"),e("code",[v._v("POST")]),v._v("进行任何限制，"),e("code",[v._v("POST")]),v._v("提交的数据大小一般是受服务器的主动配置来限定大小。")]),v._v(" "),e("p",[v._v("关于敏感信息不要使用"),e("code",[v._v("GET")]),v._v("进行传输主要有两个方面的考虑，首先使用"),e("code",[v._v("GET")]),v._v("传输敏感信息会直接暴露在"),e("code",[v._v("URL")]),v._v("上，会直接可见，此外使用"),e("code",[v._v("GET")]),v._v("传输的参数会被直接保存在浏览器的历史记录中以及服务器的日志中，当然"),e("code",[v._v("HTTP")]),v._v("协议本身就是一个明文传输的协议，无论是使用"),e("code",[v._v("GET")]),v._v("还是"),e("code",[v._v("POST")]),v._v("在中间人攻击等情况下都是能够拿到传输的数据的，如果需要避免中间人等攻击需要使用"),e("code",[v._v("HTTPS")]),v._v("进行数据的加密传输。")]),v._v(" "),e("p",[v._v("关于"),e("code",[v._v("GET")]),v._v("发送一个请求，"),e("code",[v._v("POST")]),v._v("发送两个请求的问题，同样这也是各种浏览器对于"),e("code",[v._v("HTTP")]),v._v("协议的具体实现的案例，而不涉及"),e("code",[v._v("GET")]),v._v("和"),e("code",[v._v("POST")]),v._v("的本质区别，关于这个具体的实现在各种浏览器上的表现并不相同，主要是浏览器的网络请求底层对于请求上优化的实现，例如需要使用"),e("code",[v._v("POST")]),v._v("传输一个大文件，那么浏览器就有可能首先发送一个数据包并携带少量数据去检测服务端是否能够接收这个文件，服务端在解析上传的文件时，总是会先完全解析全部的请求头部，服务器端总是希望能够了解请求的控制信息后，就能决定这个请求怎么进一步处理，是拒绝还是接收，如果服务端允许接收这个文件那么客户端会继续发送数据进行上传操作，如果服务端拒绝了就直接中断上传，这样用以节省提高数据吞吐和降低带宽的浪费。在本质上这和"),e("code",[v._v("HTTP")]),v._v("协议无关，这是浏览器在具体实现上做的一些优化，例如在内部设定一次"),e("code",[v._v("POST")]),v._v("的数据超过"),e("code",[v._v("1KB")]),v._v("就先只发请求头，否则就一次性全发，客户端甚至还可以做一些"),e("code",[v._v("Adaptive")]),v._v("的策略，统计发送成功率，如果成功率很高，就总是全部发等等。不同浏览器可以有各自的不同的方案，不管怎样做，优化目的总是在提高数据吞吐和降低带宽浪费。无论浏览器如何发送其总是符合"),e("code",[v._v("HTTP")]),v._v("协议的，是具体实现而不涉及"),e("code",[v._v("GET")]),v._v("和"),e("code",[v._v("POST")]),v._v("的本质区别。")]),v._v(" "),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://zhuanlan.zhihu.com/p/25028045\nhttps://www.zhihu.com/question/28586791\nhttps://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])])])}),[],!1,null,null,null);_.default=o.exports}}]);