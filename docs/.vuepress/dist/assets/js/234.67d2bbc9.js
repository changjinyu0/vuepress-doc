(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{600:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"colrm命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colrm命令"}},[s._v("#")]),s._v(" colrm命令")]),s._v(" "),a("p",[a("code",[s._v("colrm")]),s._v("命令用于编辑源代码文件，脚本文件或常规文本文件中的文本，此命令从文件中删除选定的列，列定义为一行中的单个字符。索引总是从"),a("code",[s._v("1")]),s._v("开始，而不是"),a("code",[s._v("0")]),s._v("。如果同时指定了开始和结束，则它们之间的列包括开始和结束将被删除。如果只需要删除一列，则开始和结束必须相同。"),a("code",[s._v("colrm")]),s._v("也可以从"),a("code",[s._v("stdin")]),s._v("接受输入。如果不加任何参数，则该指令不会过滤任何一行。")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("colrm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("start")]),s._v("： 指定要删除的列的起始编号。")]),s._v(" "),a("li",[a("code",[s._v("stop")]),s._v("： 指定要删除的列的结束编号，省略则删除从"),a("code",[s._v("start")]),s._v("开始的所有列。")]),s._v(" "),a("li",[a("code",[s._v("-V, --version")]),s._v(": 输出版本信息。")]),s._v(" "),a("li",[a("code",[s._v("-h, --help")]),s._v(": 输出帮助信息。")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("从标准输入中获取输入，删除"),a("code",[s._v("start")]),s._v("和"),a("code",[s._v("stop")]),s._v("之间的所有字符，包括"),a("code",[s._v("start")]),s._v("和"),a("code",[s._v("stop")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("colrm "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 127")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("从标准输入中获取输入，删除"),a("code",[s._v("start")]),s._v("之后所有的字符。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("colrm "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1234567")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 12")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("读"),a("code",[s._v("file.txt")]),s._v("文件中的内容，并将删除后的内容写入"),a("code",[s._v("file2.txt")]),s._v("中。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" file.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" colrm "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file2.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://linux.die.net/man/1/colrm\nhttps://www.runoob.com/linux/linux-comm-colrm.html\nhttps://www.geeksforgeeks.org/colrm-command-in-linux-with-examples/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);