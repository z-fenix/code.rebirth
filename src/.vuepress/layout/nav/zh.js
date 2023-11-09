export const navbarZh = [
    {
        text: 'FollowMe',
        link: '/guide/',
    },
    {
        text: '基础知识',
        children: [
            {
                text: '操作系统',
                children: [
                    '/computer/os/index.md',
                ],
            }, {
                text: '计算机网络',
                children: [
                    '/computer/network/index.md',
                ],
            },
            {
                text: '编译原理',
                children: [
                    '/computer/compiler/index.md',
                ],
            }
        ],
    },
    {
        text: '编程基础',
        children: [
            {
                text: '数据结构',
                link: '/code/d_s/',
            },
            {
                text: '算法',
                link: '/code/algorithms/',
            },
            {
                text: '程序员数学',
                link: '/code/math/',
            }
        ],
    },
    {
        text: '编程语言',
        children: [
            {
                text: 'Java',
                link: '/program/java/',
            },
            {
                text: 'Go',
                link: '/program/go/',

            }, {
                text: 'Python',
                link: '/program/python/',
            }
        ],
    },
    {
        text: '编程探索🌌',
        children: [
            {
                text: 'AI',
                link:"/explore/AI/"
            },
            {
                text: '语音解析',
                link:"/explore/whisper/"
            }, {
                text: '图像',
                link:"/explore/image/"
            }
        ],
    },
    {
        text: '笔记📔',
        children: [
            {
                text: '部署',
                children: [
                    {text: "云服务器", link: "/notes/deploy/ecs.md"},
                ],
            },
            {
                text: '开发',
                children: [
                    {text: "开发随记", link: "/notes/develop/note.md"},
                ],
            }, {
                text: '学习',
                children: [
                    {text: "学习随记", link: "/notes/lean/note.md"},
                ],
            }
        ],
    },
    {
        text: '异常记录',
        children: [
            {
                text: 'Java',
                link: "/issue/java/"
            },
            {
                text: '项目',
                link: "/issue/project/"
            }
        ],
    },
    {
        text: '关于',
        children: [
            {
                text: '自己',
                link: "/about/"
            }
        ],
    },

]
