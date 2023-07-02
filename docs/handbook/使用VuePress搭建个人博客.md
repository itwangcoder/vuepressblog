---
title: 搭建个人博客
description: 使用VuePress搭建个人博客
author: itwangcoder
date: '2023-06-27'
categories:
 - 其他
tags:
 - VuePress
 - 博客
 - 安装
---

## 一、本地搭建

### 1、安装 VuePress

创建并进入一个新目录，在此目录中安装 VuePress
``` bash
npm install -g vuepress
```

接着调用下面的代码初始化项目
``` bash
npm init -y
```

### 2、创建文件和文件夹

在初始化的项目中创建文件和文件夹，最终目录结构如下所示
```
|-- docs',
    |-- README.md',
    |-- .vuepress',
        |-- config.js'
        |-- public
```

### 3、配置 config.js 文件

在 config.js 文件中配置网站标题、描述、主题等信息
``` js
module.exports = {
    title: 'itwangcoder\'s blog',   // 博客的标题
    description: '我的个人网站',    // 博客的描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'GitHub', link: 'https://github.com/' }
        ],
    }
};
```

### 4、在 package.json 文件里添加两个启动命令

``` json
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```

### 5、启动服务

打开终端，执行 `npm run dev` 命令启动服务，用户可以在 http://localhost:8080 地址中访问博客页面 <br/>
此时博客的界面如下：
![](使用VuePress搭建个人博客/05启动服务个人博客页面.png)


### 6、添加侧边栏

现在我们添加一些 md 文档，内容自行添加，文档的目录结构如下：
```
|-- docs',
    |-- README.md',
    |-- .vuepress',
        |-- config.js',itwangcoder
        |-- public
|-- docs',
    |-- README.md',
    |-- .vuepress',
        |-- config.js'
    |-- handbook
        |-- 使用vuepress搭建个人博客.md 
        |-- 2.md
```

我们在 config.js 中添加如下配置
```js
module.exports = {
    title: 'itwangcoder\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'GitHub', link: 'https://github.com/' }
        ],
        // sidebar: 'auto', // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,     // 是否折叠
                children: [{ title: "博客简介", path: "/" }]
            },
            {
                title: "杂篇",
                path: "/handbook/使用VuePress搭建个人博客",
                collapsable: true,     // 是否折叠
                children: [
                    { title: "使用vuepress搭建个人博客", path: "/handbook/使用VuePress搭建个人博客" },
                    { title: "第二篇", path: "/handbook/2" }
                ]
            }
        ]
    }
};
```

此时页面如下所示：
![](使用VuePress搭建个人博客/06添加侧边栏个人博客页面.png)


### 7、更换主题

现在基本的目录和导航功能已经实现，如果还想要 loading 效果、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，我使用的主题是 `vuepress-theme-reco` <br/>
现在我们安装 vuepress-theme-reco：
```bash
npm install vuepress-theme-reco --save-dev
```

然后在 `config.js` 中引用该主题：
```js
module.exports = {
  ...
  theme: 'reco',
  ...
}  
```

配置好之后，可以看到自己的博客网站新增了一些功能，例如模式切换：
![](使用VuePress搭建个人博客/07更换主题个人博客页面.png)

### 8、添加文章信息

我们会发现，一篇文章竟然出现了两遍标题，这是因为这个主题自动提取了第一个大标题作为本文的标题，我们可以在每篇文章的 md 文件中添加一些信息修改：
```md
---
title: 搭建个人博客
description: 使用VuePress搭建个人博客
author: itwangcoder
date: '2023-06-27'
---
```

其他属性：
```
---
title: 烤鸭的做法
date: 2019-08-08
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456'
publish: false
---
```

> 常用变量说明：
- title：文章标题，放弃通过一级目录定义标题的方式，改在 Front Matter 中定义。
- date：文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08。
- sidebar：是否开启侧边栏。
- categories：所属分类。
- tags：所属标签。
- keys：所属标签。
- publish：文章是否发布。

此时页面效果如下：
![](使用VuePress搭建个人博客/08添加文章信息个人博客页面.png)

### 9、设置语言

我们还可以设置语言，文章时间，我们写入的格式为 `2022-8-28` ，但是显示的是 `8/28/2022`，这是因为 VuePress 默认的 lang 为 `en-US`，我们修改一下 `config.js`：
```js
module.exports = {
  ...
  locales: {      // 设置语言
    '/': {
      lang: 'zh-CN'
    }
  },
  ...
}  
```

### 10、开启目录结构

在原本的主题里，我们发现每篇文章的目录结构在左侧，而 vuepress-theme-reco 将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧，如果你要全局开启，可在 `config.js` 中设置开启：
```js
module.exports = {
  ...
  themeConfig: {
    subSidebar: 'auto',
  },
  ...
}
```

此时页面右侧出现子标题，页面效果如下：
![](使用VuePress搭建个人博客/10开启目录结构个人博客页面.png)

### 11、修改主题颜色

VuePress 基于 Vue，所以主题色用的是 Vue 的绿色，你也可以将主题颜色修改为你自己喜欢的颜色，你可以创建一个 .vuepress/styles/palette.styl 文件，文件代码如下：
```styl
$accentColor = #3178c6
```

页面效果如下：
![](使用VuePress搭建个人博客/11修改主题颜色个人博客页面.png)

### 12、自定义修改样式

我们发现用作强调的文字颜色比较暗淡，在暗黑模式下看不清楚，如何修改这个文字的颜色和背景色呢？ <br/>
你可以创建一个 `.vuepress/styles/index.styl` 文件，文件代码如下
```styl
.dark .content__default code {
  background-color: rgba(58,58,92,0.7);
  color: #fff;
}
```

如果想要隐藏每篇文章的标题、作者、时间呢，其实也是类似的方式：
```styl
.page .page-title {
  display: none;
}
```


## 二、网络部署

### 1、Github上面创建项目

到这里，我们的博客网站基本搭建好了，接下来我们将它部署到 Github Pages 上。首先我们需要把我们的这个项目上传到 Github 上面 <br/>
为此，我们需要在 Github 上面新建一个仓库，这里我取名为：`vuepressblog`，接着依次执行下面的代码
```git
git init        # 初始化 git 仓库
git add *       # 把项目添加到暂存区
git commit -m "first commit"        # 把项目提交到仓库'
git remote add origin git@github.com:itwangcoder/vuepressblog.git           # 把本地的仓库和 Github 上面的仓库相关联
git push origin master          # 上传文件到远程仓库
```

### 2、修改 config.js 配置文件

相应地，我们需要在 config.js 添加一个 base 路径配置：
```js
module.exports = {
  ...
  // 和仓库名相同
  base: '/vuepressblog/',
  ...
}
```

最终 `config.js` 文件内容为
```js
module.exports = {
    title: 'itwangcoder\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    theme: "reco",
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'GitHub', link: 'https://github.com/' }
        ],
        // sidebar: 'auto', // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,     // 是否折叠
                children: [{ title: "博客简介", path: "/" }]
            },
            {
                title: "杂篇",
                path: "/handbook/使用VuePress搭建个人博客",
                collapsable: true,     // 是否折叠
                children: [
                    { title: "使用vuepress搭建个人博客", path: "/handbook/使用VuePress搭建个人博客" },
                    { title: "第二篇", path: "/handbook/2" }
                ]
            }
        ],
        subSidebar: 'auto'      // 开启目录结构
    },
    locales: {      // 设置语言
        '/': {
            lang: 'zh-CN'
        }
    },
    // 和仓库名相同
    base: '/vuepressblog/'
};
```

### 3、创建脚本文件

然后我们在项目 `vuepressblog` 目录下创建一个脚本文件 `deploy.sh`，注意修改一下对应的用户名和仓库名：
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:itwangcoder/vuepressblog.git master:blog-pages

cd -
```

> 出现问题：<br/>
> 执行 `deploy.sh` 文件时出现下面的错误：
> ```
> '"node"' 不是内部或外部命令，也不是可运行的程序或批处理文件。
> ```
> 
> 解决方案：
> - 检查环境变量中的用户变量和系统变量中是否都添加了 `D:\Application\nodejs` 一项

### 4、配置 Github Pages

我们可以在仓库的 Settings -> Pages 中选择 `Branch` 选项添加上传的 `blog-pages` 分支，点击 `save` <br/>
接着点击 `Custom domain` 将 itwangcoder.github.io 填入 <br/>

完成后的博客地址为： [https://itwangcoder.github.io/vuepressblog/](https://itwangcoder.github.io/vuepressblog/) <br/>
[搭建 VuePress 博客，你可能会用到的一些插件](https://github.com/mqyqingfeng/Blog/issues/261)


## 三、插件安装

### 1、优化代码展示

插件地址：[https://vuepress-theme-reco.recoluan.com/views/plugins/extractCode.html](https://vuepress-theme-reco.recoluan.com/views/plugins/extractCode.html) <br/>

安装：
```bash
yarn add @vuepress-reco/vuepress-plugin-extract-code -D
```

使用：
```js
plugins: [
    '@vuepress-reco/extract-code'
  ]
```

当你需要使用这种方式展示代码的时候，你需要在 md 文件中添加：
```md
<RecoDemo :collapse="true">
  <template slot="code-bash">
    <<< @/docs/handbook/demo/index.sh
  </template>
  <template slot="code-js">
    <<< @/docs/handbook/demo/index.js
  </template>
  <img src="./demo/index.gif" slot="demo" />
</RecoDemo>
```
其中的@表示当前项目目录的别名，即源码的根目录，而非 docs 或者 .vuepress

### 2、last-updated

文章的末尾会自动显示文章的更新日期，这里的最后更新时间以通过git提交的时间为准，在本地修改文章，时间并不会改变
```js
plugins： [
	['@vuepress/last-updated'],
]
```

### 3、代码复制<font style="color:red;font-weight:bold">（未搭建成功）</font>

插件地址：[https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy](https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy)

安装
```bash
yarn add vuepress-plugin-nuggets-style-copy -D
或
npm install -D vuepress-plugin-nuggets-style-copy
```

使用
```js
plugins： [
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }],
]
```

> 出现问题：<br/>
> ```
> warning An error was encountered in plugin "@vuepress-reco/back-to-top"
> warning An error was encountered in plugin "@vuepress-reco/pagation"
> warning An error was encountered in plugin "@vuepress-reco/comments"
> warning An error was encountered in plugin "@vuepress/medium-zoom"
> warning An error was encountered in plugin "@vuepress/plugin-blog"
> warning An error was encountered in plugin "@vuepress-reco/extract-code"
> ```
> 解决方法：
> ```bash
> yarn add -D vuepress
> ```
> <font style="color:red;font-weight:bold">未解决</font>

### 4、添加著作信息

使用 vuepress-plugin-copyright 可以禁用文字复制或者在复制时添加著作权信息。
插件地址：[https://vuepress-community.netlify.app/zh/plugins/copyright](https://vuepress-community.netlify.app/zh/plugins/copyright)

安装：
```bash
yarn add vuepress-plugin-copyright -D
```

使用：
``` js
plugins: [
  [
    'copyright',
    {
      authorName: 'itwangcoder', // 选中的文字将无法被复制
      minLength: 30, // 如果长度超过  30 个字符
    },
  ]
]
```

当你复制超过 30 个字符的时候，就会出现：
```
著作权归itwangcoder所有。
链接：http://localhost:8080/vuepressblog/handbook/使用VuePress搭建个人博客.html
```

### 5、PWA 插件

安装：
``` bash
npm install -D @vuepress/plugin-pwa
```

使用：
本选项开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 refresh 按钮，允许用户立即刷新内容。
> 如果没有“刷新”按钮，则只有在所有的 Clients 被关闭后，新的 Service Worker 才会处于活动状态。这意味着用户在关闭你网站的所有标签之前无法看到新内容。但是 refresh 按钮会立即激活新> 的 Service Worker。
```js
['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
    }
}],
```

### 6、趣味标题插件

这个在hexo已经很熟悉了，主要在标签栏当时选中和离开页面时会有变化

安装：
``` bash
npm i vuepress-plugin-dynamic-title -D
```

使用：
```js
plugins: [
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ]
]
```

### 7、彩带背景

安装：
``` bash
npm i vuepress-plugin-ribbon-animation
```

使用：
修改config.js下的plugins,可参考npm
```js
["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]

```


## 四、内容优化

### 1、修改主题颜色

我这里暂时没有修改，如有需要可以通过配置 `.vuepress/styles/palette.styl` 来快速修改主题的一些颜色属性。(如果不存在该目录和文件就创建一个)
```stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

### 2、修改主题样式

你可以创建一个 `.vuepress/styles/index.styl` 文件以方便地添加额外样式。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。我的修改如下，主要是改进了文档页面的可读性和操作性：<br/>
```stylus
// 侧边栏样式
// 左侧侧边栏标题
.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: 1.5em !important;
  margin-left: -1em;
}
// 右侧文章标题导航栏
a.sidebar-link {
  font-size: 16px !important;
}
// 左侧边栏标题字体大小样式
.sidebar-heading span{
    font-size: 1.2em;
    font-weight: bold;

}
.sidebar-heading.open span{
    font-weight: bold;
}


// 左侧边栏展开文章的字体大小
a.sidebar-link.active {
    color: #070808 !important;
    font-size: 14px !important;
    background: #c3d4b742 !important;
}
.sidebar-sub-headers a.sidebar-link {
    margin: 0 1rem 0 1rem !important;
}
// 分组的透明度修改，未生效
.sidebar-group.is-sub-group > .sidebar-heading:not(.clickable){
    opacity: 0.5;
}

// 去除左上角标题，作者，标签等
.page .page-title {
    display: none;
}
```

其他修改，主要参照znote大佬，修改如下(可选)：<font style="color:red;font-weight:bold">（未搭建成功）</font>
```stylus
blockquote {
	background-color: transparent !important;
    margin: 20px !important;
    padding: 0 !important;
    font-size: 1rem !important;
    color: #999 !important;
    border-left: .25rem solid #dfe2e5 !important;
    margin-left: 0 !important;
    padding-left: 1rem !important;
}

// tip,warning,danger容器样式
.custom-block.tip {
    background-color: #d4d4d452 !important;
}
.custom-block.warning {
    background-color: #ffa16d47 !important;
}
.custom-block.danger {
    background-color: #f9b4b457 !important;
}
// details容器样式
 summary {
    font-weight: 550;
    font-size: 16px;
    margin-top: 0.2rem;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #75826b42;
    border-radius: 5px;
}

// 时间线样式
.timeline-wrapper .year {
  margin: 80px 0px 20px !important;
  font-size: 27px !important;
}
.timeline-wrapper .year-wrapper li {
    padding: 10px 20px 10px !important;
    border-bottom: 2px solid #999da06b !important;
    background: #c1c1e626;
    border-radius: 5rem;
    margin: 5px 0px;
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li:hover {
    transform:  translate(50px,0);
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li .date {
  width: 43px !important;
  font-size: 13px !important;
}
.timeline-wrapper .year-wrapper li .date:before {
    top: 22px !important;
    border: 1px solid !important;
}
.timeline-wrapper:after {
    background: skyblue !important;
}
.timeline-wrapper .desc:before, .timeline-wrapper .year:before {
  background: cadetblue !important;
}

//主页，评论偏左
.page, .password-wrapper-in {
    margin-left: 8rem !important;
}
.comments-wrapper {
    padding: 2rem 2rem 2rem 10rem !important;
}
#valine .vwrap .vedit #veditor{
  background: url('/znote/img/other/comment.png')  
  background-position: 90% 60%
  background-size: 16rem 10rem
  background-repeat: no-repeat
}

$mobileSidebarWidth = $sidebarWidth * 0.82

// narrow desktop / iPad
@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth !important;
  .page, .password-wrapper-in
    margin-left $mobileSidebarWidth !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem $mobileSidebarWidth*1.1 !important;

// wide mobile
@media (max-width: $MQMobile)
  .sidebar
    top 0
    padding-top $navbarHeight !important;
    transform translateX(-100%)
    transition transform .2s ease
  .page, .password-wrapper-in
    margin-left 0  !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem 2rem !important;
  .theme-container
    &.sidebar-open
      .sidebar
        transform translateX(0) !important;
    &.no-navbar
      .sidebar
        padding-top: 0 !important;
  .password-shadow
    padding-left 0 !important;

// narrow mobile
@media (max-width: $MQMobileNarrow)
  h1
    font-size 1.9rem
  .content__default
    div[class*="language-"]
      margin 0.85rem -1.5rem  !important;
      border-radius 0
//about me
@media (min-width: ($MQMobile + 1px))
  .theme-container.no-sidebar
    .sidebar
      display none
    .page, .password-wrapper-in
      margin-left 0  !important;
    .comments-wrapper 
      padding: 2rem 2rem 2rem 2rem !important;

//标签列表样式
.abstract-item {
  background-color: #acdcfd3d !important;  
  transition: all .5s;
}
.abstract-item:hover {
    transform:  scale(1.02);
    transition: all .5s;
}

//滚动条样式
::-webkit-scrollbar
  width: 6px !important;
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
	background-color:#94989c8c !important; 
	background-clip:padding-box !important; 
	-webkit-border-radius: 10em !important; 
	-moz-border-radius: 10em !important; 
	border-radius: 10em !important; 
}
/*滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
	background-color:transparent !important; 
	-webkit-border-radius: 0em !important; 
	-moz-border-radius: 0em !important; 
	border-radius: 0em !important; 
}
/*滚动条鼠标移上去*/
::-webkit-scrollbar-thumb:hover {
	background-color:#bbb !important; 
}

//navbar字体大小
.navbar .links
  font-size: 15.5px !important;

//容器样式
.theorem
  margin 1rem 0
  padding .1rem 1.5rem
  border-radius 0.4rem
  background-color #c9daea61
  .title
    font-weight bold
.custom-block
  &.right
    color transparentify($textColor, 0.4)
    font-size 0.9rem
    text-align right

@require './markdown-container'
```

这里作者还引入了markdown-container.styl，需要的自行引入<br/>
```stylus
.cardListContainer
  margin .7rem 0
  &>:not(.card-list)
    display none
  .card-list
    margin -0.35rem
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .card-item
      width calc(100%/3 - .7rem)
      margin auto
      background var(--bodyBg)
      border-radius 3px
      color var(--textColor)
      display flex 
      box-shadow 1px 1px 2px 0 rgba(0,0,0,.06)
      &:hover
        text-decoration none
        img 
          transform rotate(8deg) scale(1.1, 1.1)
          box-shadow 3px 2px 7px rgba(0, 0, 0, 0.15)
        div p
          text-shadow 3px 2px 5px rgba(0, 0, 0, 0.15)
      img
        width 60px
        height 60px
        border-radius 50%
        border 2px solid #fff
        margin 1rem
        margin-right 0
        box-shadow 3px 2px 5px rgba(0, 0, 0, 0.08)
        transition all .4s
      div
        flex 1
        display inline-block
        float right 
        padding 1rem 0
        p
          margin 0
          padding 0 1rem
          transition text-shadow .4s
          text-align center
        .name
          margin .2rem 0 .3rem 0
        .desc
          font-size .8rem
          line-height 1.1rem
          opacity .8
          margin-bottom .2rem
    .card-item.row-1
      width calc(100% - .7rem)
      img
        margin-left 2rem
    .card-item.row-2
      width calc(100%/2 - .7rem)
      img
        margin-left 1.5rem
    .card-item.row-3
      width calc(100%/3 - .7rem)
    .card-item.row-4
      width calc(100%/4 - .7rem)

.cardImgListContainer
  margin 1rem 0
  &>:not(.card-list)
    display none
  .card-list
    margin -0.5rem
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .card-item
      width calc(100%/3 - 1rem)
      margin .5rem
      background var(--mainBg)
      border 1px solid rgba(0,0,0,0.08)
      box-sizing: border-box
      border-radius 3px
      overflow hidden
      color var(--textColor)
      box-shadow 2px 2px 10px rgba(0,0,0,.04)
      display flex 
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      transition: box-shadow .3s
      &:hover
        box-shadow 1px 1px 20px rgba(0,0,0,.07)
      .box-img
        overflow hidden
        position relative
        background #000
        img
          display block
          width 100%
          height auto
          transition: all .3s
        &:hover
          img
            transform: scale(1.1, 1.1)
            opacity .75
      a
        color var(--textColor)
        transition: color .3s
        &:hover
          color $accentColor
          text-decoration none
      .box-info
        padding: .8rem 1rem
        p
          margin 0
        .desc
          margin-top: .3rem
          opacity .8
          font-size: .9rem
          line-height: 1.1rem
      .box-footer
        overflow hidden
        padding: .8rem 1rem
        border-top:  1px solid rgba(0,0,0,0.05)
        img
          width 1.8rem
          height 1.8rem
          border-radius 50%
          float left
        span 
          line-height 1.8rem
          float left
          margin-left: .6rem
          font-size: .8rem
    .card-item.row-1
      width calc(100% - 1rem)
    .card-item.row-2
      width calc(100%/2 - 1rem)
    .card-item.row-3
      width calc(100%/3 - 1rem)
    .card-item.row-4
      width calc(100%/4 - 1rem)

.theme-mode-dark
  .cardImgListContainer
    .card-list
      .card-item
        border-color: var(--borderColor)
        .box-footer
           border-color: var(--borderColor)
           
// 卡片列表的响应
@media (max-width: 900px) 
  .cardListContainer
    .card-list
      .card-item.row-4
        width calc(100%/3 - .7rem)
  .cardImgListContainer
    .card-list
      .card-item.row-4
        width calc(100%/3 - 1rem)

@media (max-width: 720px) 
  .cardListContainer
    .card-list
      .card-item.row-3, .card-item.row-4
        width calc(100%/2 - .7rem)
        img
          margin-left 1.5rem
  .cardImgListContainer
    .card-list
      .card-item.row-3, .card-item.row-4
        width calc(100%/2 - 1rem)
        
@media (max-width: 500px) 
  .cardListContainer
    .card-list
      .card-item.row-1, .card-item.row-2, .card-item.row-3, .card-item.row-4
        width calc(100% - .7rem)
        img
          margin-left 1.5rem
  .cardImgListContainer
    .card-list
      .card-item.row-1, .card-item.row-2, .card-item.row-3, .card-item.row-4
        width calc(100% - 1rem)
```

### 3、添加时间轴

使用：
```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }
}

```



