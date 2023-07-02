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
```

使用
```js
plugins： [
    [
        "vuepress-plugin-nuggets-style-copy",
        {
            copyText: "复制代码",
            tip: {
            content: "复制成功",
            },
        },
    ],
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
      authorName: '冴羽', // 选中的文字将无法被复制
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





