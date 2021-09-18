(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{616:function(s,e,t){"use strict";t.r(e);var a=t(45),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"fmt命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fmt命令"}},[s._v("#")]),s._v(" fmt命令")]),s._v(" "),t("p",[t("code",[s._v("fmt")]),s._v("命令用于编排文本文件，其会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备，若指定的文件名为"),t("code",[s._v("-")]),s._v("，则"),t("code",[s._v("fmt")]),s._v("指令会从标准输入设备读取数据。")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("fmt [-WIDTH] [OPTION]... [FILE]...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-c, --crown-margin")]),s._v(": 保留前两行的缩进。")]),s._v(" "),t("li",[t("code",[s._v("-p, --prefix=STRING")]),s._v(": 仅重新格式化以"),t("code",[s._v("STRING")]),s._v("开头的行，并将前缀重新附加到格式化后的行上。")]),s._v(" "),t("li",[t("code",[s._v("-s, --split-only")]),s._v(": 拆分长行，但不再重新填充它们。")]),s._v(" "),t("li",[t("code",[s._v("-t, --tagged-paragraph")]),s._v(": 第一行的缩进不同于第二行。")]),s._v(" "),t("li",[t("code",[s._v("-u, --uniform-spacing")]),s._v(": 单词之间使用一个空格，句子后面使用两个空格。")]),s._v(" "),t("li",[t("code",[s._v("-w, --width=WIDTH")]),s._v(": 最大行宽(默认为"),t("code",[s._v("75")]),s._v("列)。")]),s._v(" "),t("li",[t("code",[s._v("-g, --goal=WIDTH")]),s._v(": 目标宽度(默认为宽度的"),t("code",[s._v("93％")]),s._v(")。")]),s._v(" "),t("li",[t("code",[s._v("--help")]),s._v(": 输出帮助信息。")]),s._v(" "),t("li",[t("code",[s._v("--version")]),s._v(": 输出版本信息。")])]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("fmt")]),s._v("不使用任何选项，将给定文件中存在的所有单词格式化为一行，当然默认单行最大宽度"),t("code",[s._v("75")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" file.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hello")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# everyone.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Have")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# day.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fmt")]),s._v(" file.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hello everyone.  Have a nice day.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("格式化文件，并使用"),t("code",[s._v("-w")]),s._v("选项指定文件行最大宽度，添加单词超出长度则将单词换行。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" file.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hello")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# everyone.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Have")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# day.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fmt")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" file.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hello")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# everyone.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Have a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice day.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("code",[s._v("-s")]),s._v("选项分割了很长的行，但是不重新填充它们。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat file.txt\n# Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered,  it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.\n\nfmt -s file.txt\n# Love is patient, love is kind. It does not envy, it does not boast, it\n# is not proud. It is not rude, it is not self-seeking, it is not easily\n# angered,  it keeps no record of wrongs. Love does not delight in evil\n# but rejoices with the truth. It always protects, always trusts, always\n# hopes, always perseveres. Love never fails.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://www.computerhope.com/unix/ufmt.htm\nhttps://www.runoob.com/linux/linux-comm-fmt.html\nhttps://www.geeksforgeeks.org/fmt-command-unixlinux/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);