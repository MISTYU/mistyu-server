const { createArticleS, getArticleInfoS } = require('../service/articles')
const { IsHasArticleError, CreateArticleError } = require('../model/ErrorModel')
const { SuccessModel, ErrorModel } = require('../model/ResponseModel')
// 文章是否存在
async function isHasArticle () {
  const articleInfo = await getArticleInfoS(params)
  if (articleInfo) {
    return new SuccessModel(articleInfo)
  } else {
    return new ErrorModel(IsHasArticleError)
  }
}

async function createArticleC (params) {
  const articleInfo = await getArticleInfoS(params)
  if (articleInfo) {
    return new ErrorModel(IsHasArticleError)
  }
  // 创建文章
  try {
    const newArticleInfo = await createArticleS(params)
    return new SuccessModel(newArticleInfo)
  } catch (err) {
    // 文章创建失败
    console.error(err.message, err.stack)
    return new ErrorModel(CreateArticleError)
  }
  
}

module.exports = {
  isHasArticle,
  createArticleC
}
