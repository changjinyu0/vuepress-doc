(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{605:function(t,e,s){"use strict";s.r(e);var a=s(45),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"diffstat命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diffstat命令"}},[t._v("#")]),t._v(" diffstat命令")]),t._v(" "),s("p",[s("code",[t._v("diffstat")]),t._v("命令根据"),s("code",[t._v("diff")]),t._v("的比较结果，统计各文件的插入、删除、修改等差异计量。")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("diffstat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-c")]),t._v(": 输出的每一行都以"),s("code",[t._v("＃")]),t._v("作为前缀，使其成为"),s("code",[t._v("Shell")]),t._v("脚本的注释行。")]),t._v(" "),s("li",[s("code",[t._v("-C")]),t._v(": 添加"),s("code",[t._v("SGR")]),t._v("颜色转义序列以突出显示直方图。")]),t._v(" "),s("li",[s("code",[t._v("-e")]),t._v(": 将标准错误重定向到"),s("code",[t._v("file")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("-f <num>")]),t._v(": 指定直方图的格式，"),s("code",[t._v("0")]),t._v("仅显示插入"),s("code",[t._v("+")]),t._v("，删除"),s("code",[t._v("-")]),t._v("或修改"),s("code",[t._v("!")]),t._v("的值和单个直方图代码，"),s("code",[t._v("1")]),t._v("正常输出，"),s("code",[t._v("2")]),t._v("用点填充直方图，"),s("code",[t._v("4")]),t._v("用直方图打印每个值，任何非零值都会给出直方图，点和单个值可以组合。")]),t._v(" "),s("li",[s("code",[t._v("-H")]),t._v(": 打印使用情况消息并退出。")]),t._v(" "),s("li",[s("code",[t._v("-k")]),t._v(": 禁止合并报告中的文件名。")]),t._v(" "),s("li",[s("code",[t._v("-l")]),t._v(": 仅列出文件名，不生成直方图。")]),t._v(" "),s("li",[s("code",[t._v("-n <file length>")]),t._v(": 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。")]),t._v(" "),s("li",[s("code",[t._v("-o <file>")]),t._v(": 将标准输出重定向到"),s("code",[t._v("file")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("-p <file length>")]),t._v(": 与"),s("code",[t._v("-n")]),t._v("参数相同，但此处的"),s("code",[t._v("<file length>")]),t._v("包括了文件的路径。")]),t._v(" "),s("li",[s("code",[t._v("-r")]),t._v(": 提供对直方图所示数据的可选舍入，而不是通过误差调整来截断，"),s("code",[t._v("0")]),t._v("是默认值，不进行舍入，但累积的错误将添加到以下列，"),s("code",[t._v("1")]),t._v("舍入数据，"),s("code",[t._v("2")]),t._v("对数据进行舍入并调整直方图，以确保即使有差异通常会四舍五入也存在差异。")]),t._v(" "),s("li",[s("code",[t._v("-t")]),t._v(": 覆盖直方图，生成逗号分隔值的输出。")]),t._v(" "),s("li",[s("code",[t._v("-u")]),t._v(": 禁止在报告中对文件名进行排序。")]),t._v(" "),s("li",[s("code",[t._v("-v")]),t._v(": 显示进度，例如如果将输出重定向到文件，则将进度消息写入标准错误。")]),t._v(" "),s("li",[s("code",[t._v("-w")]),t._v(": 指定输出时栏位的宽度。")]),t._v(" "),s("li",[s("code",[t._v("-V")]),t._v(": 显示版本信息。")])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("统计"),s("code",[t._v("diff")]),t._v("的比较结果的差异信息。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" file.txt file2.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" diffstat -v\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("统计"),s("code",[t._v("diff")]),t._v("的比较结果的差异信息，仅列出文件名，不生成直方图。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" file.txt file2.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" diffstat -l\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("统计"),s("code",[t._v("diff")]),t._v("的比较结果的差异信息，指定直方图的最大宽度。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" file.txt file2.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" diffstat -w "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/WindrunnerMax/EveryDay\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://man.linuxde.net/diffstat\nhttps://www.runoob.com/linux/linux-comm-diffstat.html\nhttps://www.tutorialspoint.com/unix_commands/diffstat.htm\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);e.default=v.exports}}]);