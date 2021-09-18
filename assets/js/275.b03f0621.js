(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{641:function(s,e,a){"use strict";a.r(e);var t=a(45),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rm命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm命令"}},[s._v("#")]),s._v(" rm命令")]),s._v(" "),a("p",[a("code",[s._v("rm")]),s._v("命令用于删除一个文件或者目录。")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-f, --force")]),s._v(": 即使文件属性设为只读也直接删除，不逐一确认，此外忽略不存在的文件，不产生提示。")]),s._v(" "),a("li",[a("code",[s._v("-i")]),s._v(": 删除之前逐一询问确认。")]),s._v(" "),a("li",[a("code",[s._v("-I")]),s._v(": 在删除三个以上文件之前或在递归删除时提示一次，比"),a("code",[s._v("-i")]),s._v("提示的次数少，但仍然可以防止大多数错误。")]),s._v(" "),a("li",[a("code",[s._v("--interactive[=WHEN]")]),s._v(": 根据"),a("code",[s._v("WHEN")]),s._v("提示，从不，一次"),a("code",[s._v("-I")]),s._v("或始终"),a("code",[s._v("-i")]),s._v("，如果没有"),a("code",[s._v("WHEN")]),s._v("，则始终提示。")]),s._v(" "),a("li",[a("code",[s._v("--one-file-system")]),s._v(": 递归删除层次结构时，跳过文件系统上与相应命令行参数不同的任何目录。")]),s._v(" "),a("li",[a("code",[s._v("--no-preserve-root")]),s._v(": 不特别对待"),a("code",[s._v("/")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("--preserve-root")]),s._v(": 不要删除"),a("code",[s._v("/")]),s._v("，默认选项。")]),s._v(" "),a("li",[a("code",[s._v("-r, -R, --recursive")]),s._v(": 递归删除目录及其内容。")]),s._v(" "),a("li",[a("code",[s._v("-d, --dir")]),s._v(": 删除空目录。")]),s._v(" "),a("li",[a("code",[s._v("-v, --verbose")]),s._v(": 输出执行过程。")]),s._v(" "),a("li",[a("code",[s._v("--help")]),s._v(": 输出帮助信息。")]),s._v(" "),a("li",[a("code",[s._v("--version")]),s._v(": 输出版本信息。")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("删除文件"),a("code",[s._v("file.txt")]),s._v("，如果文件是写保护的，则将提示是否确认要删除。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" file.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除文件"),a("code",[s._v("file.txt")]),s._v("，即使文件是写保护的也不会有确认提示。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f file.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除当前目录中的所有文件，如果文件是写保护的，则在"),a("code",[s._v("rm")]),s._v("删除之前将提示。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除当前目录中的所有文件，"),a("code",[s._v("rm")]),s._v("将不会有任何提示。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("尝试删除当前目录中的每个文件，但在删除每个文件之前提示确认。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -i *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除当前目录中的每个文件，提示确认是否删除三个以上的文件。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -I *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除目录"),a("code",[s._v("directory")]),s._v("及其包含的所有文件和目录，果"),a("code",[s._v("rm")]),s._v("尝试删除的文件或目录具有写保护，则将提示是否确实要删除。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r directory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除目录"),a("code",[s._v("directory")]),s._v("及其包含的所有文件和目录，不会有任何确认提示。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf mydirectory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.howtoforge.com/linux-rm-command/\nhttps://www.runoob.com/linux/linux-comm-rm.html\nhttps://www.tutorialspoint.com/unix_commands/rm.htm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);