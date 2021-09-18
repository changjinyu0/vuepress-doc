(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{615:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"find命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find命令"}},[e._v("#")]),e._v(" find命令")]),e._v(" "),s("p",[s("code",[e._v("find")]),e._v("命令用来在指定目录下查找文件，任何位于参数之前的字符串都将被视为要查找的目录名，如果使用该命令时，不设置任何参数，则"),s("code",[e._v("find")]),e._v("命令将在当前目录下查找子目录与文件，并且将查找到的子目录和文件全部进行显示。")]),e._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-H"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-Olevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-D "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("tree"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("search"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("stat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("rates"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("opt"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("expression"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("-amin<minute>")]),e._v(": 查找在指定时间曾被存取过的文件或目录，单位以分钟计算。")]),e._v(" "),s("li",[s("code",[e._v("-anewer<file or folder>")]),e._v(": 查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-atime<day>")]),e._v(": 查找在指定时间曾被存取过的文件或目录，单位以天计算。")]),e._v(" "),s("li",[s("code",[e._v("-cmin<minute>")]),e._v(": 查找在指定时间之时被更改过的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-cnewer<file or folder>")]),e._v("查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-ctime<day>")]),e._v(": 查找在指定时间之时被更改的文件或目录，单位以天计算。")]),e._v(" "),s("li",[s("code",[e._v("-daystart")]),e._v(": 从本日开始计算时间。")]),e._v(" "),s("li",[s("code",[e._v("-depth")]),e._v(": 从指定目录下最深层的子目录开始查找。")]),e._v(" "),s("li",[s("code",[e._v("-empty")]),e._v(": 寻找文件大小为"),s("code",[e._v("0 Byte")]),e._v("的文件，或目录下没有任何子目录或文件的空目录。")]),e._v(" "),s("li",[s("code",[e._v("-exec<command>")]),e._v(": 假设"),s("code",[e._v("find")]),e._v("指令的回传值为"),s("code",[e._v("True")]),e._v("，就执行该指令。")]),e._v(" "),s("li",[s("code",[e._v("-false")]),e._v(": 将"),s("code",[e._v("find")]),e._v("指令的回传值皆设为"),s("code",[e._v("False")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("-fls<file list>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-ls")]),e._v("参数类似，但会把结果保存为指定的列表文件。")]),e._v(" "),s("li",[s("code",[e._v("-follow")]),e._v(": 排除符号连接。")]),e._v(" "),s("li",[s("code",[e._v("-fprint<file list>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-print")]),e._v("参数类似，但会把结果保存成指定的列表文件。")]),e._v(" "),s("li",[s("code",[e._v("-fprint0<file list>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-print0")]),e._v("参数类似，但会把结果保存成指定的列表文件。")]),e._v(" "),s("li",[s("code",[e._v("-fprintf<file list><output format>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-printf")]),e._v("参数类似，但会把结果保存成指定的列表文件。")]),e._v(" "),s("li",[s("code",[e._v("-fstype<file system type>")]),e._v(": 只寻找该文件系统类型下的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-gid<group id>")]),e._v(": 查找符合指定之群组识别码的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-group<group name>")]),e._v(": 查找符合指定之群组名称的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-help, --help")]),e._v(": 在线帮助。")]),e._v(" "),s("li",[s("code",[e._v("-ilname<template style>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-lname")]),e._v("参数类似，但忽略字符大小写的差别。")]),e._v(" "),s("li",[s("code",[e._v("-iname<template style>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-name")]),e._v("参数类似，但忽略字符大小写的差别。")]),e._v(" "),s("li",[s("code",[e._v("-inum<inode num>")]),e._v(": 查找符合指定的inode编号的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-ipath<template style>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-path")]),e._v("参数类似，但忽略字符大小写的差别。")]),e._v(" "),s("li",[s("code",[e._v("-iregex<template style>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-regexe")]),e._v("参数类似，但忽略字符大小写的差别。")]),e._v(" "),s("li",[s("code",[e._v("-links<number of connections>")]),e._v(": 查找符合指定的硬连接数目的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-iname<template style>")]),e._v(": 指定字符串作为寻找符号连接的范本样式。")]),e._v(" "),s("li",[s("code",[e._v("-ls")]),e._v(": 假设"),s("code",[e._v("find")]),e._v("指令的回传值为"),s("code",[e._v("Ture")]),e._v("，就将文件或目录名称列出到标准输出。")]),e._v(" "),s("li",[s("code",[e._v("-maxdepth<directory level>")]),e._v(": 设置最大目录层级。")]),e._v(" "),s("li",[s("code",[e._v("-mindepth<directory level>")]),e._v(": 设置最小目录层级。")]),e._v(" "),s("li",[s("code",[e._v("-mmin<minute>")]),e._v(": 查找在指定时间曾被更改过的文件或目录，单位以分钟计算。")]),e._v(" "),s("li",[s("code",[e._v("-mount")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-xdev")]),e._v("相同。")]),e._v(" "),s("li",[s("code",[e._v("-mtime<24 hour>")]),e._v(": 查找在指定时间曾被更改过的文件或目录，单位以"),s("code",[e._v("24")]),e._v("小时计算。")]),e._v(" "),s("li",[s("code",[e._v("-name<template style>")]),e._v(": 指定字符串作为寻找文件或目录的范本样式。")]),e._v(" "),s("li",[s("code",[e._v("-newer<file or folder>")]),e._v(": 查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-nogroup")]),e._v(": 找出不属于本地主机群组识别码的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-noleaf")]),e._v(": 不去考虑目录至少需拥有两个硬连接存在。")]),e._v(" "),s("li",[s("code",[e._v("-nouser")]),e._v(": 找出不属于本地主机用户识别码的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-ok<command>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-exec")]),e._v("类似，但在执行指令之前会先询问用户，若回答"),s("code",[e._v("y")]),e._v("或"),s("code",[e._v("Y")]),e._v("，则放弃执行命令。")]),e._v(" "),s("li",[s("code",[e._v("-path<template style>")]),e._v(": 指定字符串作为寻找目录的范本样式。")]),e._v(" "),s("li",[s("code",[e._v("-perm<permission value>")]),e._v(": 查找符合指定的权限数值的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-print")]),e._v(": 假设"),s("code",[e._v("find")]),e._v("指令的回传值为"),s("code",[e._v("Ture")]),e._v("，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称前皆有"),s("code",[e._v("./")]),e._v("字符串。")]),e._v(" "),s("li",[s("code",[e._v("-print0")]),e._v(": 假设"),s("code",[e._v("find")]),e._v("指令的回传值为"),s("code",[e._v("Ture")]),e._v("，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行。")]),e._v(" "),s("li",[s("code",[e._v("-printf<output format>")]),e._v(": 假设"),s("code",[e._v("find")]),e._v("指令的回传值为"),s("code",[e._v("Ture")]),e._v("，就将文件或目录名称列出到标准输出。格式可以自行指定。")]),e._v(" "),s("li",[s("code",[e._v("-prune")]),e._v(": 不寻找字符串作为寻找文件或目录的范本样式;")]),e._v(" "),s("li",[s("code",[e._v("-regex<template style>")]),e._v(": 指定字符串作为寻找文件或目录的范本样式。")]),e._v(" "),s("li",[s("code",[e._v("-size<file size>")]),e._v(": 查找符合指定的文件大小的文件。")]),e._v(" "),s("li",[s("code",[e._v("-true")]),e._v(": 将find指令的回传值皆设为"),s("code",[e._v("True")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("-type<file type>")]),e._v(": 只寻找符合指定的文件类型的文件。")]),e._v(" "),s("li",[s("code",[e._v("-uid<user id>")]),e._v(": 查找符合指定的用户识别码的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-used<day>")]),e._v(": 查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算。")]),e._v(" "),s("li",[s("code",[e._v("-user<owner name>")]),e._v(": 查找符和指定的拥有者名称的文件或目录。")]),e._v(" "),s("li",[s("code",[e._v("-version, --version")]),e._v(": 显示版本信息。")]),e._v(" "),s("li",[s("code",[e._v("-xdev")]),e._v(": 将范围局限在先行的文件系统中。")]),e._v(" "),s("li",[s("code",[e._v("-xtype<file type>")]),e._v(": 此参数的效果和指定"),s("code",[e._v("-type")]),e._v("参数类似，差别在于它针对符号连接检查。")])]),e._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有拓展名为"),s("code",[e._v("py")]),e._v("的文件。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/ -name *.py\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file.py")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有一般文件。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/ -type f\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file.c")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file.txt")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/a.out")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/www/1.txt")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file.py")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有最近"),s("code",[e._v("1")]),e._v("天内更改过的文件，"),s("code",[e._v("+1")]),e._v("则表示"),s("code",[e._v("1")]),e._v("天前更改过文件。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/ -ctime -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file.txt")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# /tmp/file")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有更改时间在"),s("code",[e._v("7")]),e._v("日以前的普通文件，并在删除之前询问是否删除。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/ -type f -mtime +7 -ok "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# < rm ... /tmp/file.py > ? n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/  -type f -perm "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("644")]),e._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -rw-r--r-- 1 root root 60 Jul 22 19:55 /tmp/file.c")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -rw-r--r-- 1 www www 73 Jul 23 20:54 /tmp/file.txt")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("查找"),s("code",[e._v("/tmp/")]),e._v("目录及其子目录下所有文件长度为"),s("code",[e._v("0")]),e._v("的普通文件，并列出它们的完整路径。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /tmp/ -type f -size "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -rwx------ 1 root root 0 Jul 11 17:25 /tmp/file.py")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[e._v("#")]),e._v(" 每日一题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://github.com/WindrunnerMax/EveryDay\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://man.linuxde.net/find\nhttps://www.runoob.com/linux/linux-comm-find.html\nhttps://www.tutorialspoint.com/unix_commands/find.htm\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);