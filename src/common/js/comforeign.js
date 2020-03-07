// 国外社区
function req(name) {
  return require(`../img/${name}`)
}

const comforeignsite = {
  id: 'comforeign',
  title: '国外社区',
  websites: [{
      name: 'GitHub',
      url: 'https://github.com/',
      describe: 'The world’s leading software development platform.',
      imageSvg: req('github.svg')
    },
    {
      name: 'medium',
      url: 'https://medium.com/',
      describe: 'Get smarter about what matters to you.',
      imageSvg: req('medium.svg')
    },
    {
      name: 'stackoverflow',
      url: 'https://stackoverflow.com/',
      describe: 'Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.',
      imageSvg: req('stackoverflow.svg')
    }
  ]
}
export default comforeignsite
