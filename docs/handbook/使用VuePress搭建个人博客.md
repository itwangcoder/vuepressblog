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
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/05%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)


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
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/06%E6%B7%BB%E5%8A%A0%E4%BE%A7%E8%BE%B9%E6%A0%8F%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)


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
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/07%E6%9B%B4%E6%8D%A2%E4%B8%BB%E9%A2%98%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)

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
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/08%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E4%BF%A1%E6%81%AF%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)

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
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/10%E5%BC%80%E5%90%AF%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)

### 11、修改主题颜色

VuePress 基于 Vue，所以主题色用的是 Vue 的绿色，你也可以将主题颜色修改为你自己喜欢的颜色，你可以创建一个 .vuepress/styles/palette.styl 文件，文件代码如下：
```styl
$accentColor = #3178c6
```

页面效果如下：
![](/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/11%E4%BF%AE%E6%94%B9%E4%B8%BB%E9%A2%98%E9%A2%9C%E8%89%B2%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)
![](/docs/.vuepress/public/handbook/%E4%BD%BF%E7%94%A8VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/11%E4%BF%AE%E6%94%B9%E4%B8%BB%E9%A2%98%E9%A2%9C%E8%89%B2%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A1%B5%E9%9D%A2.png)

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

### 1、

