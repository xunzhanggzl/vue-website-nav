// 知名博客
import req from './req'

const blogsite = {
  id: 'blog',
  title: '知名博客',
  websites: [
    {
      name: '阮一峰',
      url: 'http://www.ruanyifeng.com/blog/',
      describe: '阮一峰的网络日志',
      imageSvg: req('ruanyifeng.png')
    }
  ]
}
export default blogsite
