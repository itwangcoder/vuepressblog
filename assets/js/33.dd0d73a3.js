(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{459:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、安装步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装步骤"}},[t._v("#")]),t._v(" 一、安装步骤")]),t._v(" "),s("p",[t._v("官网安装教程："),s("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/install/centos/"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_1、前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、前提条件"}},[t._v("#")]),t._v(" 1、前提条件")]),t._v(" "),s("p",[t._v("目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x "),s("br"),t._v("\n因此需要查看自己的内核，执行以下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/redhat-release\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A401%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6%E6%9F%A5%E7%9C%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E5%86%85%E6%A0%B8.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2、卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、卸载旧版本"}},[t._v("#")]),t._v(" 2、卸载旧版本")]),t._v(" "),s("p",[t._v("官网地址："),s("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/install/centos/"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A402%E5%8D%B8%E8%BD%BD%E6%97%A7%E7%89%88%E6%9C%AC.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3、yum-安装-gcc-相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、yum-安装-gcc-相关"}},[t._v("#")]),t._v(" 3、yum 安装 gcc 相关")]),t._v(" "),s("p",[t._v("首先应确保CentOS7能上外网，接着执行以下代码")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc-c++\n")])])]),s("h3",{attrs:{id:"_4、安装需要的软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装需要的软件包"}},[t._v("#")]),t._v(" 4、安装需要的软件包")]),t._v(" "),s("h4",{attrs:{id:"_4-1-官网要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-官网要求"}},[t._v("#")]),t._v(" 4.1 官网要求")]),t._v(" "),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A404%E5%AE%89%E8%A3%85%E9%9C%80%E8%A6%81%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%AE%98%E7%BD%91%E9%9C%80%E6%B1%82.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_4-2-执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-执行命令"}},[t._v("#")]),t._v(" 4.2 执行命令")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" yum-utils\n")])])]),s("h3",{attrs:{id:"_5、设置-stable-镜像仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、设置-stable-镜像仓库"}},[t._v("#")]),t._v(" 5、设置 stable 镜像仓库")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("大坑")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),s("p",[t._v("报错：")]),t._v(" "),s("ol",[s("li",[t._v("[Errno 14] curl#35 - TCP connection reset by peer")]),t._v(" "),s("li",[t._v("[Errno 12] curl#35 - Timeout")])]),t._v(" "),s("blockquote",[s("p",[t._v("此代码是官网推荐安装步骤，用户执行此代码后，会链接国外的网址进行下载，因此会出现网络卡顿等现象，"),s("strong",[t._v("不建议使用该网址，建议使用国内镜像地址")])])])]),t._v(" "),s("li",[s("p",[t._v("推荐")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("出现错误")]),t._v("："),s("br"),t._v("\n[root@wang128 ~]# yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n已加载插件：fastestmirror, langpacks\nadding repo from: https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\ngrabbing file https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo\nCould not fetch/save url https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to file /etc/yum.repos.d/docker-ce.repo: [Errno 14] HTTPS Error 403 - Forbidden\n"),s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A405%E8%AE%BE%E7%BD%AEstable%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%8E%A8%E8%8D%90%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("原因")]),t._v("："),s("br"),t._v("\n访问该网址次数过多把你屏蔽了")]),t._v(" "),s("p",[s("strong",[t._v("解决方案")]),t._v("："),s("br"),t._v("\n更换网络")])])])]),t._v(" "),s("h3",{attrs:{id:"_6、更新-yum-软件包索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、更新-yum-软件包索引"}},[t._v("#")]),t._v(" 6、更新 yum 软件包索引")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum makecache fast\n")])])]),s("h3",{attrs:{id:"_7、安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、安装-docker-ce"}},[t._v("#")]),t._v(" 7、安装 DOCKER CE")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n")])])]),s("p",[t._v("安装结果：\n"),s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A407%E5%AE%89%E8%A3%85DOCKERCE%E5%AE%89%E8%A3%85%E7%BB%93%E6%9E%9C.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_8、启动-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、启动-docker"}},[t._v("#")]),t._v(" 8、启动 Docker")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("h3",{attrs:{id:"_9、测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、测试"}},[t._v("#")]),t._v(" 9、测试")]),t._v(" "),s("h4",{attrs:{id:"_9-1-查看-docker-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-查看-docker-版本"}},[t._v("#")]),t._v(" 9.1 查看 docker 版本")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" version  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 docker版本")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A409%E6%B5%8B%E8%AF%95%E6%9F%A5%E7%9C%8Bdocker%E7%89%88%E6%9C%AC.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_9-2-从远程镜像仓库中拉取-hello-world-项目并运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-从远程镜像仓库中拉取-hello-world-项目并运行"}},[t._v("#")]),t._v(" 9.2 从远程镜像仓库中拉取 hello-world 项目并运行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run hello-world\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程镜像仓库中拉取 hello-world 项目并运行")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A409%E6%B5%8B%E8%AF%95%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96helloworld%E5%B9%B6%E8%BF%90%E8%A1%8C.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_10、卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、卸载"}},[t._v("#")]),t._v(" 10、卸载")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl stop "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止 docker 服务")]),t._v("\nyum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载 docker")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /var/lib/docker\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除相关配置文件，镜像文件，容器和卷等信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /var/lib/containerd\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除相关配置文件，镜像文件，容器和卷等信息")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("运行 "),s("code",[t._v("systemctl stop docker")]),t._v(" 时出现如下提示")]),t._v("："),s("br"),t._v("\nWarning: Stopping docker.service, but it can still be activated by:\ndocker.socket")]),t._v(" "),s("p",[s("strong",[t._v("原因")]),t._v("："),s("br"),t._v("\n这是docker在关闭状态下被访问自动唤醒机制，很人性化，即这时再执行任意docker命令会直接启动")]),t._v(" "),s("p",[s("strong",[t._v("解决方案")]),t._v("："),s("br"),t._v("\n如果真的不希望docker被访问自动唤醒，执行 "),s("code",[t._v("systemctl stop docker")]),t._v(" 后再执行"),s("code",[t._v("systemctl stop docker.socket")]),t._v("即可")])]),t._v(" "),s("h2",{attrs:{id:"二、docker-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-配置"}},[t._v("#")]),t._v(" 二、Docker 配置")]),t._v(" "),s("h3",{attrs:{id:"_1、阿里云镜像加速配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、阿里云镜像加速配置"}},[t._v("#")]),t._v(" 1、阿里云镜像加速配置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先进入阿里云官网地址："),s("a",{attrs:{href:"https://promotion.aliyun.com/ntms/act/kubernetes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://promotion.aliyun.com/ntms/act/kubernetes.html"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("注册一个属于自己的阿里云账户（可复用淘宝账号）")])]),t._v(" "),s("li",[s("p",[t._v("获得加速器地址连接")]),t._v(" "),s("ol",[s("li",[t._v("登陆阿里云开发者平台")]),t._v(" "),s("li",[t._v("点击控制台")]),t._v(" "),s("li",[t._v("选择容器镜像服务")]),t._v(" "),s("li",[t._v("获取加速器地址")])])]),t._v(" "),s("li",[s("p",[t._v("粘贴脚本直接执行")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /etc/docker\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'EOF\'\n{\n  "registry-mirrors": ["https://i4mas7hh.mirror.aliyuncs.com"]\n}\nEOF')]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("重启服务器")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、常用命令"}},[t._v("#")]),t._v(" 三、常用命令")]),t._v(" "),s("h3",{attrs:{id:"_1、帮助启动类命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、帮助启动类命令"}},[t._v("#")]),t._v(" 1、帮助启动类命令")]),t._v(" "),s("ol",[s("li",[t._v("启动docker")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("停止docker")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl stop "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("重启docker")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl restart "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("查看docker状态")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl status "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("开机启动")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("查看docker概要信息")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" info\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("查看docker总体帮助文档")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[t._v("查看docker命令帮助文档")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" 具体命令 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、镜像命令"}},[t._v("#")]),t._v(" 2、镜像命令")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("列出本地主机上的镜像")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 镜像名字\n")])])]),s("blockquote",[s("p",[t._v("OPTIONS说明：")]),t._v(" "),s("ul",[s("li",[t._v("-a :列出本地所有的镜像（含历史映像层）")]),t._v(" "),s("li",[t._v("-q :只显示镜像ID。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A402%E9%95%9C%E5%83%8F%E5%91%BD%E4%BB%A4%E5%88%97%E5%87%BA%E6%9C%AC%E5%9C%B0%E4%B8%BB%E6%9C%BA%E4%B8%8A%E7%9A%84%E9%95%9C%E5%83%8F.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("各个选项说明：")]),t._v(" "),s("ul",[s("li",[t._v("REPOSITORY：表示镜像的仓库源")]),t._v(" "),s("li",[t._v("TAG：镜像的标签版本号")]),t._v(" "),s("li",[t._v("IMAGE ID：镜像ID")]),t._v(" "),s("li",[t._v("CREATED：镜像创建时间")]),t._v(" "),s("li",[t._v("SIZE：镜像大小")])]),t._v(" "),s("p",[t._v("同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像")])])]),t._v(" "),s("li",[s("p",[t._v("在网络仓库上查看相关镜像信息")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 镜像名字\n")])])]),s("blockquote",[s("p",[t._v("网站：https://hub.docker.com")]),t._v(" "),s("p",[t._v("OPTIONS说明：")]),t._v(" "),s("p",[t._v("--limit : 只列出N个镜像，默认25个")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--limit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" redis\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A402%E9%95%9C%E5%83%8F%E5%91%BD%E4%BB%A4%E6%9F%A5%E8%AF%A2%E5%91%BD%E4%BB%A4.png",alt:""}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("NAME")]),t._v(" "),s("td",[t._v("镜像名称")])]),t._v(" "),s("tr",[s("td",[t._v("DESCRIPTION")]),t._v(" "),s("td",[t._v("镜像说明")])]),t._v(" "),s("tr",[s("td",[t._v("STARS")]),t._v(" "),s("td",[t._v("点赞数量")])]),t._v(" "),s("tr",[s("td",[t._v("OFFICIAL")]),t._v(" "),s("td",[t._v("是否是官方的")])]),t._v(" "),s("tr",[s("td",[t._v("AUTOMATED")]),t._v(" "),s("td",[t._v("是否是自动构建的")])])])])]),t._v(" "),s("li",[s("p",[t._v("下载镜像")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull 镜像名字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("docker pull 镜像名字")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("没有TAG就是最新版")])]),t._v(" "),s("li",[s("p",[t._v("等价于 docker pull 镜像名字:latest")])]),t._v(" "),s("li",[s("p",[t._v("docker pull ubuntu")])])])])]),t._v(" "),s("li",[s("p",[t._v("查看镜像/容器/数据卷所占的空间")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除镜像")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" 镜像ID\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除单个，-f 表示强制删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" 镜像名1:TAG 镜像名2:TAG\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除多个")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qa")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除全部")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("面试题：谈谈docker虚悬镜像是什么？")]),t._v(" "),s("p",[t._v("仓库名、标签都是<none>的镜像，俗称虚悬镜像dangling image，这种镜像是由于下载失败等原因造成的，"),s("strong",[t._v("需要立即删除")])])])]),t._v(" "),s("h3",{attrs:{id:"_3、容器命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、容器命令"}},[t._v("#")]),t._v(" 3、容器命令")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("前提")]),t._v(" "),s("p",[t._v("有镜像才能创建容器，这是根本前提（下载一个CentOS或者ubuntu镜像演示）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull centos\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull ubuntu\n")])])]),s("blockquote",[s("p",[t._v("本次演示用ubuntu演示")])])]),t._v(" "),s("li",[s("p",[t._v("新建并启动容器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("新建")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IMAGE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMMAND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("OPTIONS说明（常用）：有些是一个减号，有些是两个减号")]),t._v(" "),s("ul",[s("li",[t._v('--name="容器新名字"    为容器指定一个名称；')]),t._v(" "),s("li",[t._v("-d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；")]),t._v(" "),s("li",[t._v("-i：以交互模式运行容器，通常与 -t 同时使用；")]),t._v(" "),s("li",[t._v("-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；也即启动交互式容器(前台有伪终端，等待交互)；")]),t._v(" "),s("li",[t._v("-P: 随机端口映射，大写P")]),t._v(" "),s("li",[t._v("-p: 指定端口映射，小写p")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-p hostPort:containerPort")]),t._v(" "),s("td",[t._v("端口映射 -p 8080:80")])]),t._v(" "),s("tr",[s("td",[t._v("-p ip:hostPort:containerPort")]),t._v(" "),s("td",[t._v("配置监听地址 -p 10.0.0.100:8080:80")])]),t._v(" "),s("tr",[s("td",[t._v("-p ip::containerPort")]),t._v(" "),s("td",[t._v("随机分配端口 -p 10.0.0.100::80")])]),t._v(" "),s("tr",[s("td",[t._v("-p hostPort:containerPort:udp")]),t._v(" "),s("td",[t._v("指定协议 -p 8080:80:tcp")])]),t._v(" "),s("tr",[s("td",[t._v("-p 81:80 -p 443:443")]),t._v(" "),s("td",[t._v("指定多个")])])])])]),t._v(" "),s("li",[s("p",[t._v("启动\n使用镜像 ubuntu:latest 以"),s("strong",[t._v("交互模式")]),t._v("启动一个容器,在容器内执行 /bin/bash 命令。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" ubuntu /bin/bash\n")])])]),s("blockquote",[s("p",[t._v("参数说明：")]),t._v(" "),s("ul",[s("li",[t._v("-i：交互式操作。 （interactive）")]),t._v(" "),s("li",[t._v("-t：终端。 （tyy）")]),t._v(" "),s("li",[t._v("ubuntu：ubuntu 镜像。")]),t._v(" "),s("li",[t._v("/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。")])]),t._v(" "),s("p",[t._v("要退出终端，直接输入 exit")])])])])]),t._v(" "),s("li",[s("p",[t._v("列出当前所有正在运行的容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("OPTIONS说明（常用）：")]),t._v(" "),s("ul",[s("li",[t._v("-a：列出当前所有正在运行的容器+历史上运行过的")]),t._v(" "),s("li",[t._v("-l：显示最近创建的容器。")]),t._v(" "),s("li",[t._v("-n：显示最近n个创建的容器。")]),t._v(" "),s("li",[t._v("-q：静默模式，只显示容器编号。")])])])]),t._v(" "),s("li",[s("p",[t._v("退出容器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("exit：run进去容器，exit退出，容器停止")])]),t._v(" "),s("li",[s("p",[t._v("ctrl+p+q：run进去容器，ctrl+p+q退出，容器不停止")])])])]),t._v(" "),s("li",[s("p",[t._v("启动已停止运行的容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" start 容器ID或者容器名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重启容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" restart 容器ID或者容器名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("停止容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" stop 容器ID或者容器名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("强制停止容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" 容器ID或容器名\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除已停止的容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 容器ID\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一次性删除多个容器实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重要")])])]),t._v(" "),s("h3",{attrs:{id:"_4、小总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、小总结"}},[t._v("#")]),t._v(" 4、小总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A404%E5%B0%8F%E6%80%BB%E7%BB%93.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("attach   Attach to a running container         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前 shell 下 attach 连接指定运行镜像")]),t._v("\nbuild   Build an image from a Dockerfile        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过 Dockerfile 定制镜像")]),t._v("\ncommit   Create a new image from a container changes  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交当前容器为新的镜像")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v("     Copy files/folders from the containers filesystem to the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" path  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#从容器中拷贝指定文件或者目录到宿主机中")]),t._v("\ncreate   Create a new container             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新的容器，同 run，但不启动容器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("    Inspect changes on a container's filesystem  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 docker 容器变化")]),t._v("\nevents   Get real "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" events from the server      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 docker 服务获取容器实时事件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v("    Run a "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" an existing container     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在已存在的容器上运行命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v("   Stream the contents of a container as a "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" archive  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出容器的内容流作为一个 tar 归档文件[对应 import ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("  Show the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" of an image          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 展示一个镜像形成历史")]),t._v("\nimages   List images                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出系统当前镜像")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v("   Create a new filesystem image from the contents of a tarball "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从tar包中的内容创建一个新的文件系统映像[对应export]")]),t._v("\ninfo    Display system-wide information        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示系统相关信息")]),t._v("\ninspect  Return low-level information on a container  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器详细信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v("    Kill a running container            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kill 指定 docker 容器")]),t._v("\nload    Load an image from a "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" archive        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从一个 tar 包中加载一个镜像[对应 save]")]),t._v("\nlogin   Register or Login to the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" registry server   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注册或者登陆一个 docker 源服务器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("logout")]),t._v("   Log out from a Docker registry server      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从当前 Docker registry 退出")]),t._v("\nlogs    Fetch the logs of a container         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出当前容器日志信息")]),t._v("\nport    Lookup the public-facing port "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" is NAT-ed to PRIVATE_PORT   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看映射端口对应的容器内部源端口")]),t._v("\npause   Pause all processes within a container     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂停容器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("     List containers                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出容器列表")]),t._v("\npull    Pull an image or a repository from the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" registry server  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从docker镜像源服务器拉取指定镜像或者库镜像")]),t._v("\npush    Push an image or a repository to the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" registry server   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送指定镜像或者库镜像至docker源服务器")]),t._v("\nrestart  Restart a running container          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启运行的容器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("     Remove one or "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" containers         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除一个或者多个容器")]),t._v("\nrmi    Remove one or "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" images    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]")]),t._v("\nrun    Run a "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a new container        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新的容器并运行一个命令")]),t._v("\nsave    Save an image to a "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" archive         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存一个镜像为一个 tar 包[对应 load]")]),t._v("\nsearch   Search "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" an image on the Docker Hub     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 docker hub 中搜索镜像")]),t._v("\nstart   Start a stopped containers           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动容器")]),t._v("\nstop    Stop a running containers           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止容器")]),t._v("\ntag    Tag an image into a repository         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给源中镜像打标签")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("    Lookup the running processes of a container  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器中运行的进程信息")]),t._v("\nunpause  Unpause a paused container           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消暂停容器")]),t._v("\nversion  Show the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" version information      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 docker 版本号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v("    Block "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" a container stops, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" print its "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" code  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 截取容器停止时的退出状态值")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);