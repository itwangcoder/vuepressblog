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
        style: "@vuepress-reco/style-default",
        logo: "/logo.png",  // 设置标题栏的图像
        author: "itwangcoder",  // 设置主页作者名称
        authorAvatar: "/logo.png",  // 设置主页用户图像
        type: 'blog',
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'GitHub', link: 'https://github.com/' }
        ],


        // sidebar: 'auto', // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
        // sidebar: [
        //     {
        //         title: "欢迎学习",
        //         path: "/",
        //         collapsable: false,     // 是否折叠
        //         children: [{ title: "博客简介", path: "/" }]
        //     },
        //     {
        //         title: "杂篇",
        //         path: "/handbook/使用VuePress搭建个人博客",
        //         collapsable: true,     // 是否折叠
        //         children: [
        //             { title: "使用vuepress搭建个人博客", path: "/handbook/使用VuePress搭建个人博客" },
        //             { title: "第二篇", path: "/handbook/2" }
        //         ]
        //     }
        // ],
        subSidebar: 'auto'      // 开启目录结构
    },
    locales: {      // 设置语言
        '/': {
            lang: 'zh-CN'
        }
    },
    // 和仓库名相同
    base: '/vuepressblog/',
    plugins: [
        // 优化代码显示插件
        ['@vuepress-reco/extract-code'],
        // last-updated，最后更新插件
        ['@vuepress/last-updated'],
        // 代码复制弹窗插件
        // ["vuepress-plugin-nuggets-style-copy", {
        //     copyText: "复制代码",
        //     tip: {
        //         content: "复制成功!"
        //     }
        // }],

        // 添加著作信息插件
        [
            'copyright',
            {
                authorName: 'itwangcoder', // 选中的文字将无法被复制
                minLength: 30, // 如果长度超过  30 个字符
            },
        ],
        // 更新刷新插件
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }],

        // 趣味标题插件
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又好了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，崩溃啦！",
                recoverTime: 2000
            }
        ],

        // 彩带背景
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
        }],
    ]
};