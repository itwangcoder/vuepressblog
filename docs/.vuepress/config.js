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
    }
};