import imageCompression from 'browser-image-compression'
const path = require('path')
function Utils () {}

/**
 * 动态解析路径
 * @param formatPath 待解析路径
 * @param fileName 文件名
 * @param timestamp 时间戳
 * @return {string|*} 处理后的文件名
 */
Utils.getImageSavePath = (formatPath, fileName, { timestamp = false } = {}) => {
  if (!/{.*?}/.test(formatPath)) {
    // 在没有配置动态路径时
    if (timestamp) {
      return path.join(formatPath, Date.now().toString() + fileName)
    }
    return path.join(formatPath, fileName)
  }
  /**
   * 允许格式化的关键词
   * @type {string[]} Y-年 M-月 D-日 H-时 m-分 s-秒 rand-10位 随机字符串
   */
  const enableKeywords = ['Y', 'MM', 'M', 'D', 'DD', 'H', 'm', 's', 'rand', 'ms', 'filename', 'suffix', 'since_millisecond', 'since_second']
  const date = new Date()
  const suffix = path.extname(fileName).replace()
  const filename = path.basename(fileName).replace(suffix, '')
  const option = {
    Y: date.getFullYear().toString(),
    M: (date.getMonth() + 1).toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    D: date.getDate().toString(),
    DD: date.getDate().toString().padStart(2, '0'),
    H: date.getHours().toString().padStart(2, '0'),
    m: date.getMinutes().toString().padStart(2, '0'),
    s: date.getSeconds().toString().padStart(2, '0'),
    ms: date.getMilliseconds().toString(),
    rand: Math.random().toString(36).slice(-10),
    since_millisecond: Date.now(),
    since_second: Math.round(Date.now() / 1000),
    filename,
    suffix: suffix.replace('.', '')
  }
  const noFilename = formatPath.includes('{no_filename}')
  const rewrite = formatPath.includes('filename') || noFilename
  if (noFilename) {
    formatPath = formatPath.replace('{no_filename}', '')
  }
  for (const key of enableKeywords) {
    if (option[key]) {
      formatPath = formatPath.replace(new RegExp('\\{' + key + '\\}', 'g'), option[key])
    }
  }
  if (rewrite) {
    return formatPath
  }
  return formatPath + fileName
}
// Utils.compressImage = (file, quality) => {
//   return new Promise((resolve) => {
//     debugger
//     // eslint-disable-next-line no-new
//     new Compressor(file, {
//       quality,
//       success: (newFile) => {
//         resolve(newFile)
//       },
//       error: (error) => {
//         console.log(error)
//         resolve(file)
//       }
//     })
//   })
// }
Utils.formatPath = (formatPath, params) => {
  for (const key in params) {
    if (params[key]) {
      formatPath = formatPath.replace(new RegExp('\\{' + key + '\\}', 'g'), params[key])
    }
  }
  return formatPath
}
Utils.compressImage = async (file, maxSizeMB) => {
  try {
    console.log('压缩')
    return await imageCompression(file, {
      maxSizeMB: 1,
      useWebWorker: true
    })
  } catch (e) {
    return file
  }
}
export default Utils
