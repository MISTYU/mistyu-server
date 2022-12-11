const { getPassword } = require('../service/user')
const { SuccessModel, ErrorModel } = require('../model/ResponseModel')
const { IsAdminError } = require('../model/ErrorModel')
// const doCrypto = require('../utils/cryp')

async function isAdmin (userPwd) {
  const password = await getPassword()
  if (userPwd === password) {
    return new SuccessModel({
      isAdmin: true
    })
  } else {
    // 没有密码
    return new ErrorModel(IsAdminError)
  }
}

module.exports = {
  isAdmin
}