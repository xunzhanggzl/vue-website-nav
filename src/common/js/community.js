// 国内社区
function req(name) {
  return require(`../img/${name}`)
}

const communitysite = {
  id: 'community',
  title: '国内社区',
  websites: [
    {
      name: '知乎',
      url: 'https://www.zhihu.com/',
      describe: '有问题,上知乎。知乎,可信赖的问答社区,以让每个人高效获得可信赖的解答为使命',
      imageSvg: req('zhihu.svg')
    },
    {
      name: '掘金',
      url: 'https://juejin.im/timeline',
      describe: '一个帮助开发者成长的社区',
      imageSvg: req('juejin.svg')
    },
    {
      name: '思否',
      url: 'https://segmentfault.com/',
      describe: '在 SegmentFault，学习技能、解决问题',
      imageSvg: req('segmentfault.svg')
    }
  ]
}
export default communitysite
