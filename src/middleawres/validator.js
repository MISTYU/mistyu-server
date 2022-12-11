const { ErrorModel } = require('../model/ResponseModel')
const { ArticleParamsError } = require('../model/ErrorInfo')

function genValidator (validate) {
  async function validator (ctx, next) {
    const data = ctx.request.body
    const err = validate(data)
    if (err) {
      ctx.body = new ErrorModel(ArticleParamsError)
      return
    }
    // 验证成功继续下一个
    await next()
  }
  return validator
}

module.exports = {
  genValidator
}
