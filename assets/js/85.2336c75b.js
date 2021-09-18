(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{451:function(a,v,t){"use strict";t.r(v);var _=t(45),e=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"前端性能优化方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化方案"}},[a._v("#")]),a._v(" 前端性能优化方案")]),a._v(" "),t("p",[a._v("前端资源比较庞大，包括"),t("code",[a._v("HTML")]),a._v("、"),t("code",[a._v("CSS")]),a._v("、"),t("code",[a._v("JavaScript")]),a._v("、"),t("code",[a._v("Image")]),a._v("、"),t("code",[a._v("Flash")]),a._v("、"),t("code",[a._v("Media")]),a._v("、"),t("code",[a._v("Font")]),a._v("、"),t("code",[a._v("Doc")]),a._v("等等，前端优化相对比较复杂，对于各种资源的优化都有不同的方式，按粒度大致可以分为两类，第一类是页面级别的优化，例如减小"),t("code",[a._v("HTTP")]),a._v("请求数、脚本的无阻塞加载、内联脚本的位置优化等，第二类则是代码级别的优化，例如"),t("code",[a._v("JavaScript")]),a._v("中的"),t("code",[a._v("DOM")]),a._v("操作优化、图片优化以及"),t("code",[a._v("HTML")]),a._v("结构优化等等。在用户角度前端优化可以让页面加载得更快，对用户的操作响应得更及时，能够给用户提供更为友好的体验，在服务商角度前端优化能够减少页面请求数，减小请求所占带宽，能够节省服务器资源。")]),a._v(" "),t("h2",{attrs:{id:"减少http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少http请求"}},[a._v("#")]),a._v(" 减少HTTP请求")]),a._v(" "),t("p",[a._v("加载前端的大部分时间在于下载各种资源，浏览器对于同一个服务器的"),t("code",[a._v("HTTP")]),a._v("请求连接池数量也是有限的，对于过多的请求需要排队等候，最小化"),t("code",[a._v("HTTP")]),a._v("请求减少请求次数可以防止"),t("code",[a._v("HTTP")]),a._v("连接池被占满，同时也能避免过多"),t("code",[a._v("HTTP")]),a._v("链接时的"),t("code",[a._v("TCP")]),a._v("握手造成的时间消耗。")]),a._v(" "),t("h3",{attrs:{id:"css-sprite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-sprite"}},[a._v("#")]),a._v(" CSS Sprite")]),a._v(" "),t("p",[t("code",[a._v("CSS Sprite")]),a._v("也就是俗称的雪碧图，将多张图片合并到一张图片中，可以减少图片的数量，此外由于合并图片相对分开的图片减少了存储信息的开销如颜色表和格式信息等，合并图片后的大小比分开的图片的大小的总和要趋于更小，当然如果合并图片时有大量空白来分隔原来的单个图片那么其大小会趋于更大。使用雪碧图，需要使用"),t("code",[a._v("CSS")]),a._v("的"),t("code",[a._v("background-image")]),a._v("和"),t("code",[a._v("background-position")]),a._v("属性显示所需的图像段。")]),a._v(" "),t("h3",{attrs:{id:"image-maps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-maps"}},[a._v("#")]),a._v(" Image maps")]),a._v(" "),t("p",[a._v("假如网站有很多带链接的图片例如地图应用等，那么图片映射"),t("code",[a._v("image maps")]),a._v("将是一个很好的选择，"),t("code",[a._v("image maps")]),a._v("允许在单张图片上有很多带链接的图片，通过"),t("code",[a._v("<map>")]),a._v("与"),t("code",[a._v("<area>")]),a._v("来将一张完整的图片映射分割为多个区域来制作不同的链接，同样是可以减少图片的"),t("code",[a._v("HTTP")]),a._v("请求链接数量。")]),a._v(" "),t("h3",{attrs:{id:"inline-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inline-images"}},[a._v("#")]),a._v(" Inline images")]),a._v(" "),t("p",[a._v("通过使用"),t("code",[a._v("data:URL")]),a._v("方案来直接将图像数据嵌入到页面或者"),t("code",[a._v("CSS")]),a._v("中，虽然这会增加文档或者是"),t("code",[a._v("CSS")]),a._v("文件的大小，但同样这确实是一个减少"),t("code",[a._v("HTTP")]),a._v("请求数量的方案，对于"),t("code",[a._v("data:URL")]),a._v("的格式为"),t("code",[a._v("data:[<mediatype>][;base64],<data>")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"font-icon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#font-icon"}},[a._v("#")]),a._v(" Font icon")]),a._v(" "),t("p",[a._v("使用字体图标来代替图标，将多个图标合成为字体图标不仅可以减少对于图片的"),t("code",[a._v("HTTP")]),a._v("请求数量与图标大小，还作为矢量图对于放大缩小等操作不会失真，此外字体图标的优点还包括其很容易改变颜色、产生阴影、透明效果等，可以得到"),t("code",[a._v("CSS")]),a._v("的很好的支持从而制作各种样式、旋转和动画效果等。")]),a._v(" "),t("h3",{attrs:{id:"combined-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#combined-files"}},[a._v("#")]),a._v(" Combined files")]),a._v(" "),t("p",[t("code",[a._v("Combined files")]),a._v("也就是合并文件，将多个"),t("code",[a._v("CSS")]),a._v("文件或者"),t("code",[a._v("JavaScript")]),a._v("文件合并成一个"),t("code",[a._v("CSS")]),a._v("文件或者"),t("code",[a._v("JavaScript")]),a._v("文件，可以有效减少"),t("code",[a._v("HTTP")]),a._v("请求数量，并且可以通过压缩算法减小文件的大小。当脚本和样式表在页面之间变化时，组合文件可能会变得难以阅读和修改，但是将其作为发布过程的一部分可以缩短响应时间。")]),a._v(" "),t("h2",{attrs:{id:"利用缓存机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用缓存机制"}},[a._v("#")]),a._v(" 利用缓存机制")]),a._v(" "),t("h3",{attrs:{id:"缓存控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存控制"}},[a._v("#")]),a._v(" 缓存控制")]),a._v(" "),t("p",[a._v("通过服务器端设置响应头的"),t("code",[a._v("Expires")]),a._v("与"),t("code",[a._v("Cache-Control")]),a._v("来设置资源组件过期时间以及过期策略，对于静态资源可以通过设置"),t("code",[a._v("Expires")]),a._v("为一个长期时间来实现永不过期策略，对于动态组件通过"),t("code",[a._v("Cache-Control")]),a._v("指定缓存机制来辅助浏览器处理条件请求。")]),a._v(" "),t("h3",{attrs:{id:"外部引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部引用"}},[a._v("#")]),a._v(" 外部引用")]),a._v(" "),t("p",[a._v("将"),t("code",[a._v("JavaScript")]),a._v("与"),t("code",[a._v("CSS")]),a._v("设置为外部文件引入而不是直接嵌入到"),t("code",[a._v("HTML")]),a._v("中，由于浏览器的缓存机制，外部文件可以通过浏览器的缓存引入而不需要每次请求重复请求同一个资源文件，这样就使得浏览器在第二次打开页面的速度会快得多，当然全部由外部文件引入的方式会增加"),t("code",[a._v("HTTP")]),a._v("请求数量，所以外部引用的关键问题就在于如何权衡相对于"),t("code",[a._v("HTML")]),a._v("文档数量而言，缓存外部"),t("code",[a._v("JavaScript")]),a._v("与"),t("code",[a._v("CSS")]),a._v("文件的数量，尽管难以量化，但可以使用各种度量标准来衡量此因素，网站上的用户每个会话具有多个页面视图，并且许多页面都重复使用相同的脚本和样式表，则缓存的外部文件会带来更大的潜在利益。")]),a._v(" "),t("h2",{attrs:{id:"优化资源加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化资源加载"}},[a._v("#")]),a._v(" 优化资源加载")]),a._v(" "),t("h3",{attrs:{id:"样式表位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式表位置"}},[a._v("#")]),a._v(" 样式表位置")]),a._v(" "),t("p",[a._v("根据浏览器渲染的顺序，将"),t("code",[a._v("CSS")]),a._v("在"),t("code",[a._v("<head>")]),a._v("中引入或者嵌入，相对于将"),t("code",[a._v("CSS")]),a._v("放到"),t("code",[a._v("<body>")]),a._v("或者页面底部来说，可以使页面渲染速度加快，这对于页面内容比较丰富的网站或者网络链接较慢时相当重要。假如将样式表放置于底部，就会导致浏览器还未加载样式表就开始渲染页面，无法渐进式渲染页面而直接从无样式状态立即跳转到有样式状态，用户体验较差；此外有些浏览器可能会在"),t("code",[a._v("CSS")]),a._v("下载完成后才开始渲染页面，样式表放在下方会导致页面渲染推迟。")]),a._v(" "),t("h3",{attrs:{id:"脚本位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本位置"}},[a._v("#")]),a._v(" 脚本位置")]),a._v(" "),t("p",[a._v("浏览器是可以并发请求的，这一特点使得其能够更快的加载资源，然而外部引入"),t("code",[a._v("JavaScript")]),a._v("脚本在加载时却会阻塞其他资源，例如在脚本加载完成之前，它后面的图片、样式以及其他脚本都处于阻塞状态，直到脚本加载完成后才会开始加载，原因之一是"),t("code",[a._v("Js")]),a._v("可能会改变页面或者改变"),t("code",[a._v("Js")]),a._v("间的依赖关系，例如"),t("code",[a._v("A.js")]),a._v("中用"),t("code",[a._v("document.write")]),a._v("改变页面，"),t("code",[a._v("B.js")]),a._v("依赖"),t("code",[a._v("A.js")]),a._v("。因此要严格保证顺序，不能并行下载。如果将脚本放在比较靠前的位置，则会影响整个页面的加载速度从而影响用户体验。此外当浏览器发现"),t("code",[a._v("Js")]),a._v("脚本时浏览器会立即开始解析脚本，并停止解析文档，因为脚本有可能会改动"),t("code",[a._v("DOM")]),a._v("与"),t("code",[a._v("CSS")]),a._v("，继续解析会浪费资源。解决这些问题的方法有很多例如异步加载脚本等，而最简单可依赖的方法就是将脚本尽可能的往后挪，减少对并发下载与页面渲染的影响。")]),a._v(" "),t("h2",{attrs:{id:"优化代码方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化代码方案"}},[a._v("#")]),a._v(" 优化代码方案")]),a._v(" "),t("h3",{attrs:{id:"避免css表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免css表达式"}},[a._v("#")]),a._v(" 避免CSS表达式")]),a._v(" "),t("p",[t("code",[a._v("CSS")]),a._v("表达式通过"),t("code",[a._v("expression")]),a._v("方法来接受"),t("code",[a._v("JavaScript")]),a._v("表达式，是一种动态设置"),t("code",[a._v("CSS")]),a._v("的强大的方式，但同样也是非常危险的方式，"),t("code",[a._v("CSS")]),a._v("表达式的问题在于其会进行频繁的计算，"),t("code",[a._v("CSS")]),a._v("计算的频率要远远超出我们的想象，不仅在页面显示和缩放时会进行计算，在页面滚动或者移动鼠标都会重新计算一次，从而影响到页面的性能。可以通过使用"),t("code",[a._v("Js")]),a._v("将属性进行一次算来并赋值给样式属性，也就是一次性表达式，如果必须在页面的整个生命周期中动态设置样式属性，则可以使用事件处理程序代替"),t("code",[a._v("CSS")]),a._v("表达式。如果必须使用"),t("code",[a._v("CSS")]),a._v("表达式，需要注意它们可能会被计算数千次，并且很可能会影响页面的性能。")]),a._v(" "),t("h3",{attrs:{id:"避免重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向"}},[a._v("#")]),a._v(" 避免重定向")]),a._v(" "),t("p",[a._v("尽量避免使用重定向，当页面发生了重定向，就会延迟整个"),t("code",[a._v("HTML")]),a._v("文档的传输。在"),t("code",[a._v("HTML")]),a._v("文档到达之前，页面中不会呈现任何东西，也没有任何组件会被下载，降低了用户体验。如果一定要使用重定向，如"),t("code",[a._v("http")]),a._v("重定向到"),t("code",[a._v("https")]),a._v("，要使用"),t("code",[a._v("301")]),a._v("永久重定向，而不是"),t("code",[a._v("302")]),a._v("临时重定向。因为如果使用"),t("code",[a._v("302")]),a._v("，则每一次访问"),t("code",[a._v("http")]),a._v("，都会被重定向到"),t("code",[a._v("https")]),a._v("的页面，而永久重定向，在第一次从"),t("code",[a._v("http")]),a._v("重定向到"),t("code",[a._v("https")]),a._v("之后就会被浏览器记住，每次访问"),t("code",[a._v("http")]),a._v("，会直接返回"),t("code",[a._v("https")]),a._v("的页面。")]),a._v(" "),t("h3",{attrs:{id:"最小化操作dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最小化操作dom"}},[a._v("#")]),a._v(" 最小化操作DOM")]),a._v(" "),t("p",[t("code",[a._v("JavaScript")]),a._v("操作"),t("code",[a._v("DOM")]),a._v("无可避免的会触发浏览器的重绘或者回流，由于重绘和回流可能代价比较昂贵，因此最好就是可以减少它的发生次数，为了减少发生次数，我们可以合并多次对"),t("code",[a._v("DOM")]),a._v("和样式的修改，然后一次处理掉，或者将样式事先设计好，动态去改变"),t("code",[a._v("class")]),a._v("。或者采用离线修改"),t("code",[a._v("DOM")]),a._v("的方案，使用"),t("code",[a._v("documentFragment")]),a._v("对象在内存里操作"),t("code",[a._v("DOM")]),a._v("，在内存中的"),t("code",[a._v("DOM")]),a._v("修改就是让元素脱离文档流，当然是不会触发重绘的，将对"),t("code",[a._v("DOM")]),a._v("的所有修改批量完成，想怎么改就怎么改，然后将节点再放入文档流中，只触发一次回流。")]),a._v(" "),t("h2",{attrs:{id:"压缩资源文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩资源文件"}},[a._v("#")]),a._v(" 压缩资源文件")]),a._v(" "),t("h3",{attrs:{id:"gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[a._v("#")]),a._v(" Gzip")]),a._v(" "),t("p",[a._v("从"),t("code",[a._v("HTTP / 1.1")]),a._v("开始，客户端可以通过使用"),t("code",[a._v("HTTP")]),a._v("请求中的"),t("code",[a._v("Accept-Encoding: gzip, deflate")]),a._v("来指示对压缩的支持。如果服务器在请求中看到此标头，则可以使用客户端列出的方法之一压缩响应，服务器通过响应中的"),t("code",[a._v("Content-Encoding: gzip")]),a._v("通知客户端采用"),t("code",[a._v("gzip")]),a._v("压缩。"),t("code",[a._v("Gzip")]),a._v("的压缩率很高，是目前最流行，最有效的压缩方法，它由"),t("code",[a._v("GNU")]),a._v("项目开发，并由"),t("code",[a._v("RFC 1952")]),a._v("标准化。")]),a._v(" "),t("h3",{attrs:{id:"压缩外部文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩外部文件"}},[a._v("#")]),a._v(" 压缩外部文件")]),a._v(" "),t("p",[a._v("压缩"),t("code",[a._v("JavaScript")]),a._v("和"),t("code",[a._v("CSS")]),a._v("文件，从代码中删除不必要的字符以减小其大小，从而缩短加载时间，当代码最小化时，所有注释以及不需要的空白字符都将被删除，由于减小了下载文件的大小，因此可以提高响应时间性能。")]),a._v(" "),t("h2",{attrs:{id:"优化网络请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化网络请求"}},[a._v("#")]),a._v(" 优化网络请求")]),a._v(" "),t("h3",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[a._v("#")]),a._v(" CDN")]),a._v(" "),t("p",[t("code",[a._v("CDN")]),a._v("的全称是"),t("code",[a._v("Content Delivery Network")]),a._v("，即内容分发网络，"),t("code",[a._v("CDN")]),a._v("是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。当用户处于跨地域的多个位置时，对于服务器响应速度的感知是有差别的，用户访问网站的绝大部分时间都是处于下载静态资源状态的，将这些静态资源首先分发到"),t("code",[a._v("CDN")]),a._v("各服务器，可以大大缩短响应时间，"),t("code",[a._v("CDN")]),a._v("可以根据用户网络状态信息来选择网络跳数最少的服务器或响应最快的服务器来就近交予用户资源。")]),a._v(" "),t("h3",{attrs:{id:"dns预解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns预解析"}},[a._v("#")]),a._v(" DNS预解析")]),a._v(" "),t("p",[a._v("当浏览器访问一个域名的时候，需要解析一次DNS，获得对应域名的"),t("code",[a._v("ip")]),a._v("地址。在解析过程中，按照浏览器缓存、系统缓存、路由器缓存、"),t("code",[a._v("ISP")]),a._v("(运营商)"),t("code",[a._v("DNS")]),a._v("缓存、根域名服务器、顶级域名服务器、主域名服务器的顺序，逐步读取缓存，直到拿到"),t("code",[a._v("IP")]),a._v("地址，"),t("code",[a._v("DNS Prefetch")]),a._v("，即"),t("code",[a._v("DNS")]),a._v("预解析就是根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短"),t("code",[a._v("DNS")]),a._v("解析时间，来提高网站的访问速度")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dns-prefecth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://www.google.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dns-prefecth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://www.google-analytics.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("提前解析"),t("code",[a._v("DNS")]),a._v("，由于它是并行的，不会堵塞页面渲染，这样可以缩短资源加载的时间")]),a._v(" "),t("h3",{attrs:{id:"配置etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置etag"}},[a._v("#")]),a._v(" 配置ETag")]),a._v(" "),t("p",[a._v("实体标签"),t("code",[a._v("ETag")]),a._v("是"),t("code",[a._v("Web")]),a._v("服务器和浏览器用来确定浏览器缓存中的资源是否与原始服务器上的资源匹配的一种机制，添加了"),t("code",[a._v("ETag")]),a._v("，以提供一种比上次修改日期更灵活的验证实体的机制。"),t("code",[a._v("ETag")]),a._v("是唯一标识组件特定版本的字符串，唯一的格式限制是用引号引起来，原始服务器使用"),t("code",[a._v("ETag")]),a._v("响应头指定组件的"),t("code",[a._v("ETag")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"尽早释放缓冲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尽早释放缓冲"}},[a._v("#")]),a._v(" 尽早释放缓冲")]),a._v(" "),t("p",[a._v("当用户请求页面时，后端服务器将"),t("code",[a._v("HTML")]),a._v("页面拼接在一起可能需要"),t("code",[a._v("200")]),a._v("到"),t("code",[a._v("500")]),a._v("毫秒的时间，在这段时间内，浏览器在等待数据到达时处于空闲状态，这段时间则可以将服务端部分已经处理好的数据发送到前端，使浏览器先开始加载外部资源。例如使用"),t("code",[a._v("PHP")]),a._v("，则可以使用函数"),t("code",[a._v("flush()")]),a._v("将部分就绪的"),t("code",[a._v("HTML")]),a._v("响应发送到浏览器，以便浏览器可以在后端忙于处理"),t("code",[a._v("HTML")]),a._v("页面的其余部分时开始获取资源，好处主要体现在繁忙的后端或轻量级前端。")]),a._v(" "),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[a._v("#")]),a._v(" 每日一题")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://github.com/WindrunnerMax/EveryDay\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://www.jianshu.com/p/fbd1d510be67\nhttps://www.cnblogs.com/coober/p/8078847.html\nhttps://www.cnblogs.com/psxiao/p/11552823.html\nhttps://www.cnblogs.com/xiaohuochai/p/9178390.html\nhttps://developer.yahoo.com/performance/rules.html\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);v.default=e.exports}}]);