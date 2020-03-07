// 参考文档
function req(name) {
  return require(`../img/${name}`)
}

const documentsite = {
  id: 'document',
  title: '参考文档',
  websites: [{
      name: 'vue.js',
      url: 'https://cn.vuejs.org/',
      describe: '渐进式 JavaScript 框架',
      imageSvg: req('vue.svg')
    },
    {
      name: 'w3c',
      url: 'https://www.w3school.com.cn/index.html',
      describe: '全球最大的中文 Web 技术教程',
      imageSvg: req('w3c.svg')
    },
    {
      name: 'MDN',
      url: 'https://developer.mozilla.org/zh-CN/',
      describe: '源于开发者，服务开发者',
      imageSvg: req('mdn.png')
    }
  ]
}
export default documentsite
