function req(name) {
  return require(`../img/${name}`)
}

const searchsite = {
  id: 'search',
  title: '搜索引擎',
  websites: [
    {
      name: '百度一下',
      url: 'https://www.baidu.com/',
      describe: '有事搜一搜  没事看一看',
      imageSvg: req('baidu.svg')
    },
    {
      name: '谷歌',
      url: 'https://www.google.com/',
      describe: 'Search the world\'s information',
      imageSvg: req('google.svg')
    },
    {
      name: '必应',
      url: 'https://cn.bing.com/',
      describe: '微软Bing搜索是国际领先的搜索引擎',
      imageSvg: req('bing.svg')
    },
    {
      name: '搜狗微信搜索',
      url: 'https://weixin.sogou.com/',
      describe: '微信公众号,精彩内容独家收录,一搜即达',
      imageSvg: req('sougou.svg')
    }
  ]
}
export default searchsite
