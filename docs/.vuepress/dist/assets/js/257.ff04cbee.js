(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{623:function(v,_,e){"use strict";e.r(_);var s=e(45),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"kill命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kill命令"}},[v._v("#")]),v._v(" kill命令")]),v._v(" "),e("p",[e("code",[v._v("kill")]),v._v("命令向指定的"),e("code",[v._v("pid")]),v._v("进程发送信号，如果不指定要发送的"),e("code",[v._v("signal")]),v._v("信号，则默认情况下"),e("code",[v._v("signal")]),v._v("是"),e("code",[v._v("SIGTERM")]),v._v("，它会终止进程，要列出所有可用信号，可以使用"),e("code",[v._v("-l")]),v._v("选项获取"),e("code",[v._v("Linux")]),v._v("信号列表，经常使用的信号包括"),e("code",[v._v("HUP")]),v._v("、"),e("code",[v._v("INT")]),v._v("、"),e("code",[v._v("KILL")]),v._v("、"),e("code",[v._v("STOP")]),v._v("、"),e("code",[v._v("CONT")]),v._v("和"),e("code",[v._v("0")]),v._v("，可以通过三种方式指定信号: 按数字例如"),e("code",[v._v("-9")]),v._v("，带有"),e("code",[v._v("SIG")]),v._v("前缀例如"),e("code",[v._v("-SIGKILL")]),v._v("，不带"),e("code",[v._v("SIG")]),v._v("前缀例如"),e("code",[v._v("-KILL")]),v._v("。负"),e("code",[v._v("PID")]),v._v("值用于指示过程组"),e("code",[v._v("ID")]),v._v("，如果传递了进程组"),e("code",[v._v("ID")]),v._v("，则该组中的所有进程都将接收到该信号，"),e("code",[v._v("PID")]),v._v("为"),e("code",[v._v("-1")]),v._v("是特殊的，其指示除两个以外的所有进程，"),e("code",[v._v("kill")]),v._v("进程本身和"),e("code",[v._v("init")]),v._v("即"),e("code",[v._v("PID 1")]),v._v("，其是系统上所有进程的父进程，将"),e("code",[v._v("-1")]),v._v("指定为目标会将信号发送到除这两个以外的所有进程。")]),v._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[v._v("#")]),v._v(" 语法")]),v._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" pid "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\n"),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("-signal "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" -s signal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v(" pid "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\n"),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("-l "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" --list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("signal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" -L "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("|")]),v._v(" --table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])]),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[v._v("#")]),v._v(" 参数")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-signal, -s signal")]),v._v(": 要发送的信号的名称、缩写名或编号，前面有破折号，例如"),e("code",[v._v("-SIGTERM")]),v._v("、"),e("code",[v._v("-TERM")]),v._v("、"),e("code",[v._v("-15")]),v._v("等，要查看可用信号的列表可以使用"),e("code",[v._v("kill -l")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("pid")]),v._v(": 数字进程"),e("code",[v._v("ID")]),v._v("，如果不确定某个进程的"),e("code",[v._v("PID")]),v._v("是什么，可以使用"),e("code",[v._v("ps")]),v._v("命令将其列出例如"),e("code",[v._v("ps -aux")]),v._v("，通常会配合管道与"),e("code",[v._v("grep")]),v._v("使用例如查看"),e("code",[v._v("nginx")]),v._v("相关的进程"),e("code",[v._v("ps -aux | grep nginx")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("-l, --list[=signal]")]),v._v(": 列出可用的信号名称，用"),e("code",[v._v("-l")]),v._v("或"),e("code",[v._v("--list")]),v._v("列出所有信号名称，使用"),e("code",[v._v("--list = signal")]),v._v("，可将数字转换为其信号名称。")]),v._v(" "),e("li",[e("code",[v._v("-L, --table")]),v._v(": 在表格中列出可用的信号名称和编号。")])]),v._v(" "),e("h2",{attrs:{id:"信号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#信号"}},[v._v("#")]),v._v(" 信号")]),v._v(" "),e("p",[v._v("下列的某些信号是不能使用的，因为系统有可能不支持这些信号，或者这些信号已中断，详情可以实际查阅系统的"),e("code",[v._v("kill -l")]),v._v("命令。每个系统都有信号"),e("code",[v._v("1")]),v._v("、"),e("code",[v._v("3")]),v._v("、"),e("code",[v._v("9")]),v._v("和"),e("code",[v._v("15")]),v._v("，这些是最常见的信号。终止信号不仅用于关闭锁定的应用程序，还可以阻止软件执行不允许的任务，这意味着其中一些终止信号是安全的一部分，另外"),e("code",[v._v("kill")]),v._v("命令不仅停止"),e("code",[v._v("/")]),v._v("终止进程，而且还暂停，继续和重新启动进程。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v(" 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP\n 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1\n11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM\n16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP\n21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ\n26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR\n31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3\n38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8\n43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13\n48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12\n53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7\n58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2\n63) SIGRTMAX-1  64) SIGRTMAX\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br"),e("span",{staticClass:"line-number"},[v._v("9")]),e("br"),e("span",{staticClass:"line-number"},[v._v("10")]),e("br"),e("span",{staticClass:"line-number"},[v._v("11")]),e("br"),e("span",{staticClass:"line-number"},[v._v("12")]),e("br"),e("span",{staticClass:"line-number"},[v._v("13")]),e("br")])]),e("ul",[e("li",[e("code",[v._v("SIGHUP")]),v._v(": "),e("code",[v._v("SIGHUP")]),v._v("信号用于断开进程与父进程的连接，这也可以用于重新启动进程，这对于内存泄漏的守护程序很有用。")]),v._v(" "),e("li",[e("code",[v._v("SIGINT")]),v._v(": 该信号与按"),e("code",[v._v("Ctrl+C")]),v._v("相同，在某些系统上"),e("code",[v._v("delete + break")]),v._v("会向进程发送相同的信号，该进程被中断并停止，但是该进程自身可以忽略此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGQUIT")]),v._v(": 这类似于"),e("code",[v._v("SIGINT")]),v._v("，但由于"),e("code",[v._v("QUIT")]),v._v("字符通常是由"),e("code",[v._v("Ctrl+\\")]),v._v("来控制，进程在收到"),e("code",[v._v("SIGQUIT")]),v._v("退出时会产生"),e("code",[v._v("core")]),v._v("文件, 在这个意义上类似于一个程序错误信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGILL")]),v._v(": 当一个进程执行一个错误的、禁止的或未知的功能时，系统向该进程发送"),e("code",[v._v("SIGILL")]),v._v("信号，这是代表非法操作的信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGTRAP")]),v._v(": 此信号用于调试目的，当某个进程执行了某个操作或满足了调试器正在等待的条件时，此信号将被发送到该进程。")]),v._v(" "),e("li",[e("code",[v._v("SIGABRT")]),v._v(": 该终止信号是中止信号,通常进程会在自身上发出此终止信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGBUS")]),v._v(": 当一个进程被发送"),e("code",[v._v("SIGBUS")]),v._v("信号时，是因为该进程导致了一个总线错误，通常这些总线错误是由于进程试图使用假物理地址或进程的内存对齐设置不正确造成的。")]),v._v(" "),e("li",[e("code",[v._v("SIGFPE")]),v._v(": 被零除的进程使用"),e("code",[v._v("SIGFPE")]),v._v("终止。")]),v._v(" "),e("li",[e("code",[v._v("SIGKILL")]),v._v(": "),e("code",[v._v("SIGKILL")]),v._v("信号强制进程立即停止执行，程序不能忽略该信号，此过程也无法清除。")]),v._v(" "),e("li",[e("code",[v._v("SIGUSR1")]),v._v(": 这表示用户定义的条件，用户可以通过在"),e("code",[v._v("sigusr1.c")]),v._v("中编程命令来设置此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGSEGV")]),v._v(": 当应用程序有分段冲突时，这个信号被发送到进程。")]),v._v(" "),e("li",[e("code",[v._v("SIGUSR2")]),v._v(": 这表示用户定义的条件。")]),v._v(" "),e("li",[e("code",[v._v("SIGPIPE")]),v._v(": 当进程尝试写入缺少与读取器连接的一端的管道时，此信号将发送到进程，读取器是在管道末端读取数据的过程。")]),v._v(" "),e("li",[e("code",[v._v("SIGALRM")]),v._v(": 当实时或时钟计时器到期时，将发送"),e("code",[v._v("SIGALRM")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("SIGTERM")]),v._v(": 该信号请求进程停止运行，该信号可以被程序自身忽略，该过程有时间正常关闭，当程序正常关闭时，这意味着它有时间保存进度并释放资源，换句话说即它不被迫停止。")]),v._v(" "),e("li",[e("code",[v._v("SIGCHLD")]),v._v(": 当父进程丢失其子进程时，将向父进程发送"),e("code",[v._v("SIGCHLD")]),v._v("信号，这将清理子进程使用的资源，子进程指的是由另一个称为父进程的进程启动的进程。")]),v._v(" "),e("li",[e("code",[v._v("SIGCONT")]),v._v(": 要使进程在被"),e("code",[v._v("SIGTSTP")]),v._v("或"),e("code",[v._v("SIGSTOP")]),v._v("信号暂停后继续执行，需要将"),e("code",[v._v("SIGCONT")]),v._v("信号发送到已暂停的进程，这是"),e("code",[v._v("CONTiNUE SIGNAL")]),v._v("，该信号对"),e("code",[v._v("Unix")]),v._v("作业控制执行后台任务很有帮助。")]),v._v(" "),e("li",[e("code",[v._v("SIGSTOP")]),v._v(": 该信号使操作系统暂停进程的执行，进程自身不能忽略该信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGTSTP")]),v._v(": 这个信号类似于按下"),e("code",[v._v("Ctrl+Z")]),v._v("，它向包含进程的终端发出请求，请求进程暂时停止，进程自身可以忽略该信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGTTIN")]),v._v(": 当进程试图从"),e("code",[v._v("tty")]),v._v("终端读取数据时，进程接收到这个信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGTTOU")]),v._v(": 当某个进程尝试向"),e("code",[v._v("tty")]),v._v("终端进行写操作时，该进程将收到此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGURG")]),v._v(": 当进程中有紧急数据要读取或数据非常大时，"),e("code",[v._v("SIGURG")]),v._v("信号将发送到该进程。")]),v._v(" "),e("li",[e("code",[v._v("SIGXCPU")]),v._v(": 当某个进程在分配的时间之后使用"),e("code",[v._v("CPU")]),v._v("时，系统将向该进程发送该信号，"),e("code",[v._v("SIGXCPU")]),v._v("的行为就像一个警告，该进程有时间保存进度(如果可能)并在系统使用"),e("code",[v._v("SIGKILL")]),v._v("终止该进程之前将其关闭。")]),v._v(" "),e("li",[e("code",[v._v("SIGXFSZ")]),v._v(": 文件系统对文件的大小有限制，当程序尝试违反此限制时，系统将发送该过程"),e("code",[v._v("SIGXFSZ")]),v._v("信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGVTALRM")]),v._v(": "),e("code",[v._v("SIGVTALRM")]),v._v("在进程使用的"),e("code",[v._v("CPU")]),v._v("时间结束时发送。")]),v._v(" "),e("li",[e("code",[v._v("SIGPROF")]),v._v(": 当进程以及由系统代表进程使用的"),e("code",[v._v("CPU")]),v._v("时间过去时，将发送"),e("code",[v._v("SIGPROF")]),v._v("信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGWINCH")]),v._v(": 当进程在更改其大小的终端中时，该进程将接收此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGIO")]),v._v(": "),e("code",[v._v("SIGPOLL")]),v._v("的别名或至少表现得很像"),e("code",[v._v("SIGPOLL")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("SIGPWR")]),v._v(": 电源故障将导致系统将该信号发送到进程，如果系统仍在运行。")]),v._v(" "),e("li",[e("code",[v._v("SIGSYS")]),v._v(": 为系统调用提供无效参数的进程将接收此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGRTMIN*")]),v._v(": 这是一组在系统之间变化的信号，它们被标记为"),e("code",[v._v("SIGRTMIN + 1")]),v._v("、"),e("code",[v._v("SIGRTMIN + 2")]),v._v("、"),e("code",[v._v("SIGRTMIN + 3")]),v._v("、"),e("code",[v._v("...")]),v._v("，通常最多"),e("code",[v._v("15")]),v._v("个，这些是用户定义的信号，它们必须在"),e("code",[v._v("Linux")]),v._v("内核的源代码中进行编程。")]),v._v(" "),e("li",[e("code",[v._v("SIGRTMAX*")]),v._v(": 这是一组在系统之间变化的信号，它们被标记为"),e("code",[v._v("SIGRTMAX-1")]),v._v("、"),e("code",[v._v("SIGRTMAX-2")]),v._v("、"),e("code",[v._v("SIGRTMAX-3")]),v._v("、"),e("code",[v._v("...")]),v._v("，通常最多"),e("code",[v._v("14")]),v._v("个，这些是用户定义的信号，它们必须在"),e("code",[v._v("Linux")]),v._v("内核的源代码中进行编程。")]),v._v(" "),e("li",[e("code",[v._v("SIGEMT")]),v._v(":  指示一个实现定义的硬件故障。")]),v._v(" "),e("li",[e("code",[v._v("SIGINFO")]),v._v(": 终端有时可能会向进程发送状态请求，发生这种情况时，进程也将收到此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGLOST")]),v._v(": 试图访问锁定文件的进程将收到此信号。")]),v._v(" "),e("li",[e("code",[v._v("SIGPOLL")]),v._v(": 当进程引起异步"),e("code",[v._v("I/O")]),v._v("事件时，会向该进程发送"),e("code",[v._v("SIGPOLL")]),v._v("信号。")])]),v._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[v._v("#")]),v._v(" 示例")]),v._v(" "),e("p",[v._v("要显示所有可用信号，查看信号的详细信息可以使用"),e("code",[v._v("man")]),v._v("命令，例如信号"),e("code",[v._v("7 SIGBUS")]),v._v("即使用"),e("code",[v._v("man 7 signal")]),v._v("。")]),v._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" -l\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("在表格中列出可用的信号名称和编号。")]),v._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("kill")]),v._v(" -L\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("终端断线，重新加载配置文件，平滑重启。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -1 111\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("通知进程关闭，使进程自行关闭，这个关闭是安全、干净地退出，如果"),e("code",[v._v("kill")]),v._v("命令后直接加进程的"),e("code",[v._v("pid")]),v._v("号默认选项为"),e("code",[v._v("-15")]),v._v("，这个信号是可以被进程自身忽略并继续执行自身的，即该信号是可以被阻塞和忽略的。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -15 111\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("强行中断当前程序的执行，类似"),e("code",[v._v("Ctrl+C")]),v._v("按键用以结束进程的结果，该信号是可以被阻塞和忽略的。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -2 111\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("退出进程，类似"),e("code",[v._v("Ctrl+\\")]),v._v("按键用以结束进程的结果，该信号是可以被阻塞和忽略的。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -3 111\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("强行关闭进程，"),e("code",[v._v("-9")]),v._v("信号是无条件终止，这个信号不能被捕获或忽略，同时接收这个信号的进程在收到这个信号时不能执行任何清理，该信号是不可以被阻塞和忽略的，当然通常是不建议使用"),e("code",[v._v("kill -9")]),v._v("的，应该尝试使用"),e("code",[v._v("-15")]),v._v("以及"),e("code",[v._v("-2")]),v._v("给目标进程一个清理自身资源工作的机会，不要用收割机来修剪花盆里的花。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -9 111\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("暂停进程，对于暂停信号进程自身不能忽略该信号。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -19 111 \n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("激活进程，对于激活信号必须发送到已暂停的进程才有效。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("kill -18 111 \n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("https://www.computerhope.com/unix/ukill.htm\nhttps://www.linux.org/threads/kill-commands-and-signals.8881/\nhttps://www.geeksforgeeks.org/kill-command-in-linux-with-examples/\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])])])}),[],!1,null,null,null);_.default=a.exports}}]);