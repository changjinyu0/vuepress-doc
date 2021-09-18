(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{410:function(e,s,v){"use strict";v.r(s);var _=v(45),a=Object(_.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器页面呈现过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器页面呈现过程"}},[e._v("#")]),e._v(" 浏览器页面呈现过程")]),e._v(" "),v("p",[e._v("从输入链接到浏览器呈现页面的过程中，浏览器所经历的过程。")]),e._v(" "),v("h2",{attrs:{id:"dns解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[e._v("#")]),e._v(" DNS解析")]),e._v(" "),v("p",[e._v("首先浏览器将输入的链接进行"),v("code",[e._v("DNS")]),e._v("解析，也就是将域名转换为"),v("code",[e._v("IP")]),e._v("地址的过程，得到了服务器具体的"),v("code",[e._v("IP")]),e._v("地址，才可以进行"),v("code",[e._v("TCP")]),e._v("链接以及数据的传输。"),v("br"),e._v("\n具体"),v("code",[e._v("DNS")]),e._v("解析的过程，浏览器首先检查自身的"),v("code",[e._v("DNS")]),e._v("缓存是否对于此域名有"),v("code",[e._v("IP")]),e._v("地址，"),v("code",[e._v("chrome")]),e._v("对于域名解析的缓存时间为"),v("code",[e._v("60s")]),e._v("，可以通过地址栏输入"),v("code",[e._v("chrome://net-internals/#dns")]),e._v("清除"),v("code",[e._v("DNS")]),e._v("缓存。若浏览器解析缓存未命中，则到操作系统中"),v("code",[e._v("hosts")]),e._v("文件检查域名与"),v("code",[e._v("IP")]),e._v("对应关系。若"),v("code",[e._v("hosts")]),e._v("文件未命中，则向本地域名服务器请求解析，本地域名服务器一般是运营商"),v("code",[e._v("ISP")]),e._v("提供的，一般是通过"),v("code",[e._v("53")]),e._v("端口发送"),v("code",[e._v("UDP")]),e._v("报文请求服务器解析"),v("code",[e._v("DNS")]),e._v("。若本地服务器解析未命中则会有两种解析方案：迭代解析与递归解析，一般来说，主机向本地域名服务器的查询一般都是采用递归查询，本地域名服务器向根域名服务器的查询通常是采用迭代查询，依次向根域名服务器、顶级域名服务器、主域名服务器等一级一级查询查询直到查询到"),v("code",[e._v("IP")]),e._v("地址。")]),e._v(" "),v("h2",{attrs:{id:"tcp三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[e._v("#")]),e._v(" TCP三次握手")]),e._v(" "),v("p",[v("code",[e._v("HTTP")]),e._v("协议是使用"),v("code",[e._v("TCP")]),e._v("协议作为其传输层协议的，在拿到服务器的"),v("code",[e._v("IP")]),e._v("地址后，客户端浏览器会与服务器建立"),v("code",[e._v("TCP")]),e._v("连接，该过程包括三次握手。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("client                                      server\n主动打开 →          SYN=1,seq=x          → 被动打开，接收\n(同步已发送)                               (同步收到)\n接收     ←   SYN=1,ACK=1,seq=y,ack=x+1   ← 发送\n(已建立链接)                               (同步收到)\n发送     →      ACK=1,seq=x+1,ack=y+1    →  接收\n(已建立链接)                               (已建立链接)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br")])]),v("ol",[v("li",[e._v("第一次握手：客户端主动链接服务器，发送初始序列号"),v("code",[e._v("seq=x")]),e._v("与"),v("code",[e._v("SYN=1")]),e._v("同步请求标志，并进入同步已发送"),v("code",[e._v("SYN_SENT")]),e._v("状态，等待服务器确认。")]),e._v(" "),v("li",[e._v("第二次握手：服务端收到消息后发送确认标志"),v("code",[e._v("ACK=1")]),e._v("与同步请求标志"),v("code",[e._v("SYN=1")]),e._v("，发送自己的序列号"),v("code",[e._v("seq=y")]),e._v("以及客户端确认序号"),v("code",[e._v("ack=x+1")]),e._v("，此时服务器进入同步收到"),v("code",[e._v("SYN_RECV")]),e._v("状态。")]),e._v(" "),v("li",[e._v("第三次握手：客户端收到消息后发送确认标志"),v("code",[e._v("ACK=1")]),e._v("，发送自己的序列号"),v("code",[e._v("seq=x+1")]),e._v("与服务器确认号"),v("code",[e._v("ack=y+1")]),e._v("，发送过后即确认链接已建立状态"),v("code",[e._v("ESTABLISHED")]),e._v("，服务端接收确认信息后进入链接已建立状态"),v("code",[e._v("ESTABLISHED")]),e._v("。")])]),e._v(" "),v("h2",{attrs:{id:"ssl加密传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl加密传输"}},[e._v("#")]),e._v(" SSL加密传输")]),e._v(" "),v("p",[v("code",[e._v("SSL")]),e._v("的建立是为了"),v("code",[e._v("HTTPS")]),e._v("加密传输，"),v("code",[e._v("HTTPS")]),e._v("在"),v("code",[e._v("HTTP")]),e._v("的基础下加入"),v("code",[e._v("SSL")]),e._v("层，"),v("code",[e._v("HTTPS")]),e._v("的安全基础是"),v("code",[e._v("SSL")]),e._v("，因此加密的详细内容就需要"),v("code",[e._v("SSL")]),e._v("。")]),e._v(" "),v("ol",[v("li",[e._v("首先"),v("code",[e._v("TCP")]),e._v("三次握手建立链接，这是数据传输基础，在此之上开始"),v("code",[e._v("SSL")]),e._v("。")]),e._v(" "),v("li",[e._v("客户端首先发送"),v("code",[e._v("Client Hello")]),e._v("开始"),v("code",[e._v("SSL")]),e._v("通信，报文中包含客户端支持的"),v("code",[e._v("SSL")]),e._v("版本、随机值"),v("code",[e._v("Random1")]),e._v("、加密算法以及密钥长度等。")]),e._v(" "),v("li",[e._v("服务器发送"),v("code",[e._v("Server Hello")]),e._v("，和客户端一样，在报文中包含"),v("code",[e._v("SSL")]),e._v("版本、随机值"),v("code",[e._v("Random2")]),e._v("以及加密组件，此后服务端将证书也发送到客户端。")]),e._v(" "),v("li",[e._v("此时客户端需要对服务端发送的证书进行验证，通过操作系统内置的"),v("code",[e._v("CA")]),e._v("证书，将服务器发送的证书的数字签名进行解密，并将证书的公钥进行相同算法的"),v("code",[e._v("HASH")]),e._v("与解密的数字签名解密的内容进行对比，验证证书是否合法有效，是否被劫持更换。")]),e._v(" "),v("li",[e._v("客户端验证证书合法，然后生成一个随机值"),v("code",[e._v("Random3")]),e._v("，用公钥对"),v("code",[e._v("Random3")]),e._v("进行加密，生成"),v("code",[e._v("Pre-Master Key")]),e._v("，客户端以"),v("code",[e._v("Client Key Exchange")]),e._v("报文将"),v("code",[e._v("Pre-Master Key")]),e._v("发送到服务端，此后发送"),v("code",[e._v("Change Cipher Spec")]),e._v("报文表示此后数据传输进行加密传输。")]),e._v(" "),v("li",[e._v("服务端将"),v("code",[e._v("Pre-Master Key")]),e._v("用自己的私钥解密为"),v("code",[e._v("Random3")]),e._v(",服务端发送"),v("code",[e._v("Change Cipher Spec")]),e._v("报文表示此后数据传输进行加密传输。")]),e._v(" "),v("li",[e._v("此时客户端与服务端都拥有三个随机字符串，且"),v("code",[e._v("Random3")]),e._v("是密文传输的，是安全状态的，此时则可以使用这三个字符串进行对称加密传输。由于非对称加密慢，不能每次传输数据都进行非对称加密，所以使用非对称加密将密钥协商好然后使用对称加密进行数据传输。")]),e._v(" "),v("li",[e._v("此时便正常进行"),v("code",[e._v("HTTP")]),e._v("数据传输，但是由于"),v("code",[e._v("SSL")]),e._v("加密的作用，此时的"),v("code",[e._v("HTTP")]),e._v("传输便是安全的，此为"),v("code",[e._v("HTTPS")]),e._v("的传输过程，其中"),v("code",[e._v("2")]),e._v("、"),v("code",[e._v("3")]),e._v("、"),v("code",[e._v("5")]),e._v("、"),v("code",[e._v("6")]),e._v("也被称为"),v("code",[e._v("SSL")]),e._v("四次握手。")])]),e._v(" "),v("h2",{attrs:{id:"发起请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发起请求"}},[e._v("#")]),e._v(" 发起请求")]),e._v(" "),v("p",[e._v("浏览器构建"),v("code",[e._v("HTTP")]),e._v("请求报文，并通过"),v("code",[e._v("TCP")]),e._v("协议传送到服务器的指定端口，"),v("code",[e._v("HTTP")]),e._v("请求报文一共有三个部分，报文首部，通常包含请求行与各种请求头字段等；空行，告诉服务器请求头部到此为止），报文主体，即发送的数据信息，通常并不一定要有报文主体。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("\x3c!-- 报文首部 --\x3e\nGET / HTTP/1.1 \x3c!-- 请求行 --\x3e\naccept: text/html\naccept-encoding: gzip, deflate, br\naccept-language: zh-CN,zh;q=0.9 \n... \x3c!-- 请求头 --\x3e\n\x3c!-- 空行 --\x3e\n\n\x3c!-- 报文主体 --\x3e\nu=1&t=1587699008\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br"),v("span",{staticClass:"line-number"},[e._v("10")]),v("br")])]),v("h2",{attrs:{id:"响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[e._v("#")]),e._v(" 响应报文")]),e._v(" "),v("p",[e._v("服务端响应"),v("code",[e._v("HTTP")]),e._v("请求，返回响应报文，"),v("code",[e._v("HTTP")]),e._v("响应报文由四部分组成：响应行、响应头、空行、响应体。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('HTTP/1.1 200 OK \x3c!-- 响应行 --\x3e\ncontent-encoding: gzip\ncontent-type: text/html; charset=utf-8\ndate: Fri, 24 Apr 2020 03:34:50 GMT\n... \x3c!-- 响应头 --\x3e\n\x3c!-- 空行 --\x3e\n\n\x3c!-- 响应体 --\x3e\n{"status":1, "msg": "success"}\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br")])]),v("h2",{attrs:{id:"浏览器渲染页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染页面"}},[e._v("#")]),e._v(" 浏览器渲染页面")]),e._v(" "),v("ol",[v("li",[e._v("自上而下，首先解析"),v("code",[e._v("HTML")]),e._v("标签，生成"),v("code",[e._v("DOM Tree")])]),e._v(" "),v("li",[e._v("在解析到"),v("code",[e._v("<link>")]),e._v("或者"),v("code",[e._v("<style>")]),e._v("标签时，开始解析"),v("code",[e._v("CSS")]),e._v("，生成"),v("code",[e._v("CSSOM")]),e._v("，值的注意的是此时解析"),v("code",[e._v("HTML")]),e._v("标签与解析"),v("code",[e._v("CSS")]),e._v("是并行执行的")]),e._v(" "),v("li",[e._v("当遇到"),v("code",[e._v("<script>")]),e._v("标签后，浏览器会立即开始解析脚本，并停止解析文档，因为脚本有可能会改动"),v("code",[e._v("DOM")]),e._v("与"),v("code",[e._v("CSS")]),e._v("，继续解析会浪费资源，所以应当将"),v("code",[e._v("<script>")]),e._v("标签放于"),v("code",[e._v("<body></body>")]),e._v("后")]),e._v(" "),v("li",[e._v("当"),v("code",[e._v("DOM Tree")]),e._v("与"),v("code",[e._v("CSSOM")]),e._v("生成后，将两者结合进行布局，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型，可称为渲染树"),v("code",[e._v("render tree")])]),e._v(" "),v("li",[e._v("根据计算好的信息绘制整个页面，系统会遍历渲染树，并调用"),v("code",[e._v("paint")]),e._v("方法，将内容显示在屏幕上。")])]),e._v(" "),v("h2",{attrs:{id:"断开tcp链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#断开tcp链接"}},[e._v("#")]),e._v(" 断开TCP链接")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("client                                      server\n主动关闭 →          FIN=1,seq=u          → 被动关闭，接收\n(终止等待1)                               (关闭等待)\n接收     ←      ACK=1,seq=v,ack=u+1      ← 发送\n(终止等待2)                               (关闭等待)\n接收     ←   FIN=1,ACK=1,seq=w,ack=u+1   ← 发送\n(时间等待)                                (最后确认)\n发送     →      ACK=1,seq=u+1,ack=w+1    → 接收\n(时间等待 2MSL 关闭)                      (关闭)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br")])]),v("ol",[v("li",[e._v("第一次挥手：客户端发出释放标识"),v("code",[e._v("FIN=1")]),e._v("，自己的序列号"),v("code",[e._v("seq=u")]),e._v("，进入终止等待"),v("code",[e._v("FIN-WAIT-1")]),e._v("状态")]),e._v(" "),v("li",[e._v("第二次挥手：服务端收到消息后发出"),v("code",[e._v("ACK=1")]),e._v("确认标志和客户端的确认号"),v("code",[e._v("ack=u+1")]),e._v("，自己的序列号"),v("code",[e._v("seq=v")]),e._v("，进入关闭等待"),v("code",[e._v("CLOSE-WAIT")]),e._v("状态，客户端收到消息后进入终止等待"),v("code",[e._v("FIN-WAIT-2")]),e._v("状态")]),e._v(" "),v("li",[e._v("第三次挥手：服务器发送释放标识"),v("code",[e._v("FIN=1")]),e._v("信号，确认标志"),v("code",[e._v("ACK=1")]),e._v("，确认序号"),v("code",[e._v("ack=u+1")]),e._v("，自己的序列号"),v("code",[e._v("seq=w")]),e._v("，服务器进入最后确认"),v("code",[e._v("LAST-ACK")]),e._v("状态")]),e._v(" "),v("li",[e._v("第四次挥手：客户端收到回复后，发送确认标志"),v("code",[e._v("ACK=1")]),e._v("，确认序号"),v("code",[e._v("ack=w+1")]),e._v("，自己的序列号"),v("code",[e._v("seq=u+1")]),e._v("，客户端进入时间等待"),v("code",[e._v("TIME-WAIT")]),e._v("状态，经过"),v("code",[e._v("2")]),e._v("个最长报文段寿命后，客户端"),v("code",[e._v("CLOSE")]),e._v("。服务器收到确认后，立刻进入"),v("code",[e._v("CLOSE")]),e._v("状态。")])]),e._v(" "),v("h2",{attrs:{id:"相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关"}},[e._v("#")]),e._v(" 相关")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("TCP三次握手四次挥手 https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.md\nHTTP协议概述 https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/HTTP%E5%8D%8F%E8%AE%AE%E6%A6%82%E8%BF%B0.md\nHTTPS加密传输过程 https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/HTTPS%E5%8A%A0%E5%AF%86%E4%BC%A0%E8%BE%93%E8%BF%87%E7%A8%8B.md\n浏览器渲染与内核 https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E4%B8%8E%E5%86%85%E6%A0%B8.md\n对称加密与非对称加密 https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E4%B8%8E%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86.md\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br")])]),v("h2",{attrs:{id:"每日一题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[e._v("#")]),e._v(" 每日一题")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("https://github.com/WindrunnerMax/EveryDay\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("https://www.jianshu.com/p/d616d887953a\nhttps://www.cnblogs.com/lhh520/p/10232738.html\nhttps://blog.csdn.net/bjweimengshu/article/details/78978314\nhttps://blog.csdn.net/wlk2064819994/article/details/79756669\nhttps://blog.csdn.net/weixin_40659167/article/details/86510745\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);