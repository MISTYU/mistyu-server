const { createArticleS, getArticleInfoS, getArticlesS, getArticleContent } = require('../service/articles')
const { IsHasArticleError, CreateArticleError, queryArticlesError } = require('../model/ErrorModel')
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
// 获取文章列表
async function getArticlesC (query) {
  try {
    const articles = await getArticlesS(query)
    return new SuccessModel(articles)
  } catch (err) {
    console.error(err.message, err.stack)
    return new ErrorModel(queryArticlesError)
  }
}
// 获取文章详情
async function getArticleContentC (params) {
  try {
    const content = await getArticleContent(params)
    return new SuccessModel(content)
  } catch (error) {
    console.error(err.message, err.stack)
    return new ErrorModel(queryArticlesError)
  }

}

module.exports = {
  isHasArticle,
  createArticleC,
  getArticlesC,
  getArticleContentC
}
