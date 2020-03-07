function req(name) {
  return require(`../img/${name}`)
}

const toolsite = {
  id: 'tool',
  title: '前端工具',
  websites: [{
      name: 'npm',
      url: 'https://www.npmjs.com/',
      describe: 'Build amazing things',
      imageSvg: req('npm.svg')
    },
    {
      name: 'git',
      url: 'https://git-scm.com/book/zh/v2',
      describe: 'Distributed-even-if-your-workflow-isnt',
      imageSvg: req('git.svg')
    }
  ]
}
export default toolsite
