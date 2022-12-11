const { format } = require('date-fns')

function timeFormat (str) {
  return format(new Date(str), 'yyyy-MM-dd HH:mm')
}

module.exports = {
  timeFormat
}
