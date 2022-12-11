const { password } = require('../config/user')
// 获取密码
async function getPassword () {
  return password
}

module.exports = {
  getPassword
}
