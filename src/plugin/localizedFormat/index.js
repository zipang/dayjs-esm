import { FORMAT_DEFAULT } from '../../constant.js'
import { englishFormats, u } from './utils.js'

export default (o, c, d) => {
  const proto = c.prototype
  const oldFormat = proto.format

  d.en.formats = englishFormats
  proto.format = function (formatStr = FORMAT_DEFAULT) {
    const { formats = {} } = this.$locale()
    const result = u(formatStr, formats)
    return oldFormat.call(this, result)
  }
}

