(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{429:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"响应式布局的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局的实现"}},[t._v("#")]),t._v(" 响应式布局的实现")]),t._v(" "),a("p",[t._v("响应式布局指的是同一页面在不同屏幕尺寸或者在不同的设备下有不同的布局，能够在大屏设备以及小屏设备获得更好的浏览体验，简单来说就是页面适应终端而无需为每个终端制作单独的页面。")]),t._v(" "),a("h2",{attrs:{id:"媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("p",[t._v("通过使用"),a("code",[t._v("CSS")]),t._v("媒体查询来实现响应式布局，针对不同的媒体类型设置不同的样式规则，可以根据视窗、设备高度与宽度、设备方向、分辨率等进行不同"),a("code",[t._v("CSS")]),t._v("适配。")]),t._v(" "),a("h3",{attrs:{id:"使用link链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用link链接"}},[t._v("#")]),t._v(" 使用link链接")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="example.css">--\x3e')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("all and (max-width:600px)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"直接在css中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接在css中使用"}},[t._v("#")]),t._v(" 直接在CSS中使用")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n@media mediatype and|not|only (media feature){\n    /* css样式 */\n}\n--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#t1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#t1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("h3",{attrs:{id:"使用-import导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-import导入"}},[t._v("#")]),t._v(" 使用@import导入")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* @import url("example.css") mediatype and|not|only (media feature); */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"example.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"媒体类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[t._v("#")]),t._v(" 媒体类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("all")]),t._v(": 用于所有设备。")]),t._v(" "),a("li",[a("code",[t._v("print")]),t._v(": 用于打印机和打印预览。")]),t._v(" "),a("li",[a("code",[t._v("screen")]),t._v(": 用于电脑屏幕，平板电脑，智能手机等。")]),t._v(" "),a("li",[a("code",[t._v("speech")]),t._v(": 应用于屏幕阅读器等发声设备。")])]),t._v(" "),a("h3",{attrs:{id:"逻辑操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑操作符"}},[t._v("#")]),t._v(" 逻辑操作符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("and")]),t._v(": 表示且，当所有的条件满足的时候返回"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("not")]),t._v(": 是用来排除某种制定的媒体类型。")]),t._v(" "),a("li",[a("code",[t._v("only")]),t._v(": 用来指定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。")]),t._v(" "),a("li",[a("code",[t._v(",")]),t._v(": 逗号用于将多个媒体查询合并为一个规则，逗号分隔效果等同于"),a("code",[t._v("or")]),t._v("逻辑操作符。")])]),t._v(" "),a("h3",{attrs:{id:"媒体功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体功能"}},[t._v("#")]),t._v(" 媒体功能")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("aspect-ratio")]),t._v(": 定义输出设备中的页面可见区域宽度与高度的比率。")]),t._v(" "),a("li",[a("code",[t._v("color")]),t._v(": 定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("color-index")]),t._v(": 定义在输出设备的彩色查询表中的条目数，如果没有使用彩色查询表，则值等于"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("device-aspect-ratio")]),t._v(": 定义输出设备的屏幕可见宽度与高度的比率。")]),t._v(" "),a("li",[a("code",[t._v("device-height")]),t._v(": 定义输出设备的屏幕可见高度。")]),t._v(" "),a("li",[a("code",[t._v("device-width")]),t._v(": 定义输出设备的屏幕可见宽度。")]),t._v(" "),a("li",[a("code",[t._v("grid")]),t._v(": 用来查询输出设备是否使用栅格或点阵。")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v(": 定义输出设备中的页面可见区域高度。")]),t._v(" "),a("li",[a("code",[t._v("max-aspect-ratio")]),t._v(": 定义输出设备的屏幕可见宽度与高度的最大比率。")]),t._v(" "),a("li",[a("code",[t._v("max-color")]),t._v(": 定义输出设备每一组彩色原件的最大个数。")]),t._v(" "),a("li",[a("code",[t._v("max-color-index")]),t._v(": 定义在输出设备的彩色查询表中的最大条目数。")]),t._v(" "),a("li",[a("code",[t._v("max-device-aspect-ratio")]),t._v(": 定义输出设备的屏幕可见宽度与高度的最大比率。")]),t._v(" "),a("li",[a("code",[t._v("max-device-height")]),t._v(": 定义输出设备的屏幕可见的最大高度。")]),t._v(" "),a("li",[a("code",[t._v("max-device-width")]),t._v(": 定义输出设备的屏幕最大可见宽度。")]),t._v(" "),a("li",[a("code",[t._v("max-height")]),t._v(": 定义输出设备中的页面最大可见区域高度。")]),t._v(" "),a("li",[a("code",[t._v("max-monochrome")]),t._v(": 定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。")]),t._v(" "),a("li",[a("code",[t._v("max-resolution")]),t._v(": 定义设备的最大分辨率。")]),t._v(" "),a("li",[a("code",[t._v("max-width")]),t._v(": 定义输出设备中的页面最大可见区域宽度。")]),t._v(" "),a("li",[a("code",[t._v("min-aspect-ratio")]),t._v(": 定义输出设备中的页面可见区域宽度与高度的最小比率。")]),t._v(" "),a("li",[a("code",[t._v("min-color")]),t._v(": 定义输出设备每一组彩色原件的最小个数。")]),t._v(" "),a("li",[a("code",[t._v("min-color-index")]),t._v(": 定义在输出设备的彩色查询表中的最小条目数。")]),t._v(" "),a("li",[a("code",[t._v("min-device-aspect-ratio")]),t._v(": 定义输出设备的屏幕可见宽度与高度的最小比率。")]),t._v(" "),a("li",[a("code",[t._v("min-device-width")]),t._v(": 定义输出设备的屏幕最小可见宽度。")]),t._v(" "),a("li",[a("code",[t._v("min-device-height")]),t._v(": 定义输出设备的屏幕的最小可见高度。")]),t._v(" "),a("li",[a("code",[t._v("min-height")]),t._v(": 定义输出设备中的页面最小可见区域高度。")]),t._v(" "),a("li",[a("code",[t._v("min-monochrome")]),t._v(": 定义在一个单色框架缓冲区中每像素包含的最小单色原件个数")]),t._v(" "),a("li",[a("code",[t._v("min-resolution")]),t._v(": 定义设备的最小分辨率。")]),t._v(" "),a("li",[a("code",[t._v("min-width")]),t._v(": 定义输出设备中的页面最小可见区域宽度。")]),t._v(" "),a("li",[a("code",[t._v("monochrome")]),t._v(": 定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("orientation")]),t._v(": 定义输出设备中的页面可见区域高度是否大于或等于宽度。")]),t._v(" "),a("li",[a("code",[t._v("resolution")]),t._v(": 定义设备的分辨率。")]),t._v(" "),a("li",[a("code",[t._v("scan")]),t._v(": 定义电视类设备的扫描工序。")]),t._v(" "),a("li",[a("code",[t._v("width")]),t._v(": 定义输出设备中的页面可见区域宽度。")])]),t._v(" "),a("h2",{attrs:{id:"单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单位"}},[t._v("#")]),t._v(" 单位")]),t._v(" "),a("h3",{attrs:{id:"百分比单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百分比单位"}},[t._v("#")]),t._v(" 百分比单位")]),t._v(" "),a("p",[t._v("当度量单位设置为百分比时，即可使浏览器组件宽高随着浏览器的大小相应变化。")]),t._v(" "),a("ul",[a("li",[t._v("子元素的"),a("code",[t._v("height")]),t._v("或"),a("code",[t._v("width")]),t._v("中使用百分比，是相对于子元素的直接父元素，"),a("code",[t._v("width")]),t._v("相对于父元素的"),a("code",[t._v("width")]),t._v("，"),a("code",[t._v("height")]),t._v("相对于父元素的"),a("code",[t._v("height")]),t._v("。")]),t._v(" "),a("li",[t._v("子元素的"),a("code",[t._v("top")]),t._v("和"),a("code",[t._v("bottom")]),t._v("如果设置百分比，则相对于直接非"),a("code",[t._v("static")]),t._v("定位的父元素的高度，同样子元素的"),a("code",[t._v("left")]),t._v("和"),a("code",[t._v("right")]),t._v("如果设置百分比，则相对于直接非"),a("code",[t._v("static")]),t._v("定位父元素的宽度。")]),t._v(" "),a("li",[t._v("子元素的"),a("code",[t._v("padding")]),t._v("如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的"),a("code",[t._v("width")]),t._v("，而与父元素的"),a("code",[t._v("height")]),t._v("无关。")]),t._v(" "),a("li",[t._v("子元素的"),a("code",[t._v("margin")]),t._v("如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的"),a("code",[t._v("width")]),t._v("。")]),t._v(" "),a("li",[t._v("设置"),a("code",[t._v("border-radius")]),t._v("为百分比，则是相对于自身的宽度，还有"),a("code",[t._v("translate")]),t._v("、"),a("code",[t._v("background-size")]),t._v("等都是相对于自身的。")])]),t._v(" "),a("h3",{attrs:{id:"em单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#em单位"}},[t._v("#")]),t._v(" em单位")]),t._v(" "),a("p",[a("code",[t._v("em")]),t._v("是相对长度单位，相对于当前对象内文本的字体尺寸，若未设置则相对于浏览器默认字体尺寸"),a("code",[t._v("16px")]),t._v("，"),a("code",[t._v("em")]),t._v("是会继承父元素的字体的尺寸，使用时需要重新计算子元素的"),a("code",[t._v("em")]),t._v("值避免"),a("code",[t._v("1.2*1.2=1.44")]),t._v("的现象，使用"),a("code",[t._v("em")]),t._v("可以使元素根据字体大小的动态调整来制作响应式布局。")]),t._v(" "),a("h3",{attrs:{id:"rem单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem单位"}},[t._v("#")]),t._v(" rem单位")]),t._v(" "),a("p",[a("code",[t._v("rem")]),t._v("单位都是相对于根元素"),a("code",[t._v("html")]),t._v("的"),a("code",[t._v("font-size")]),t._v("来决定大小的,根元素的"),a("code",[t._v("font-size")]),t._v("相当于提供了一个基准，当页面的"),a("code",[t._v("size")]),t._v("发生变化时，只需要改变"),a("code",[t._v("font-size")]),t._v("的值，那么以"),a("code",[t._v("rem")]),t._v("为固定单位的元素的大小也会发生相应的变化。因此，如果通过"),a("code",[t._v("rem")]),t._v("来实现响应式的布局，只需要根据视图容器的大小，动态的改变根元素的"),a("code",[t._v("font-size")]),t._v("即可。")]),t._v(" "),a("h3",{attrs:{id:"vh-vw-vmin-vmax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vh-vw-vmin-vmax"}},[t._v("#")]),t._v(" vh vw vmin vmax")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vh")]),t._v(": 相对于视窗的高度，"),a("code",[t._v("1vh")]),t._v("等于视窗高度的"),a("code",[t._v("1%")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("vw")]),t._v(": 相对于视窗的宽度，"),a("code",[t._v("1vw")]),t._v("等于视窗宽度的"),a("code",[t._v("1%")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("vmin")]),t._v(": "),a("code",[t._v("vw")]),t._v("和"),a("code",[t._v("vh")]),t._v("中的较小值。")]),t._v(" "),a("li",[a("code",[t._v("vmax")]),t._v(": "),a("code",[t._v("vw")]),t._v("和"),a("code",[t._v("vh")]),t._v("中的较大值。")])]),t._v(" "),a("h3",{attrs:{id:"缩放比例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放比例"}},[t._v("#")]),t._v(" 缩放比例")]),t._v(" "),a("p",[t._v("通过动态地控制网页视图的缩放比例来制作响应式布局。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, user-scalable=no, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"自适应布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应布局"}},[t._v("#")]),t._v(" 自适应布局")]),t._v(" "),a("p",[t._v("自适应布局一般是通过检测"),a("code",[t._v("User-Agent")]),t._v("来判断当前访问的设备是"),a("code",[t._v("PC")]),t._v("端还是平板或者是手机，或者是通过检测窗口分辨率而请求服务器，从而服务端重定向或者返回不同的页面，需要开发多个页面来适应不同的设备，通常自适应布局与响应式布局并不是单独使用的，可以通过开发一套"),a("code",[t._v("PC")]),t._v("端页面与一套移动端页面来实现自适应布局，而两套页面都实现对于不同范围分辨率的响应式布局，可以避免过大的"),a("code",[t._v("CSS")]),t._v("样式表又可以获得较好的浏览体验，")]),t._v(" "),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://github.com/WindrunnerMax/EveryDay\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://www.w3.org/TR/css3-mediaqueries/\nhttps://juejin.im/post/5caaa230e51d452b672f9703\nhttps://www.cnblogs.com/yanayana/p/7066948.html\nhttps://www.cnblogs.com/jianxian/p/12808363.html\nhttps://www.runoob.com/cssref/css3-pr-mediaquery.html\nhttps://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);