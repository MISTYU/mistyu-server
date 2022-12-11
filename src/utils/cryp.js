const crypto = require('crypto')

const secretKey = require('../config/user')

function _md5 (content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

function doCrypto (content) {
  const str = `password=${content}&key=${secretKey}`
  return _md5(str)
}

module.exports = doCrypto
