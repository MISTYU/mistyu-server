const { timeFormat } = require('./dt')

function _formatDBTime (obj) {
  if (obj.createdAt) {
    obj.createdAt = timeFormat(obj.createdAt)
  }
  if (obj.updatedAt) {
    obj.updatedAt = timeFormat(obj.updatedAt)
  }

  return obj
}

function formatArticle (list) {
  if (list === null) return list
  if (Array.isArray(list)) {
    return list.map(_formatDBTime)
  }
  return _formatDBTime(list)
}

module.exports = {
  formatArticle
}
