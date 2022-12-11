const { Article, Detail } = require('../db/model/articles')
const { formatArticle } = require('../utils/format')
// 查询文章列表
async function getArticles (keyword) {

}

// 获取文章信息
async function getArticleInfoS ({ title }) {
  // 查询条件
  const whereOpt = {
    title
  }
  const result = await Article.findOne({
    where: whereOpt
  })
  if (result === null) {
    return result
  }
  return result.dataValues
}

// 创建文章
async function createArticleS({ title, desc, tag, content, likes = 0 }) {
  const articleInfo = await Article.create({
    title,
    tag,
    desc,
    likes
  })
  const articleId = articleInfo.dataValues.id
  await updateArticleContent({ articleId, content })
  // 不需要返回文章内容
  return formatArticle(articleInfo.dataValues)
}

// 创建/更新文章内容
async function updateArticleContent({ articleId, content }) {
  const res = await Detail.create({
    content: content,
    articleId
  })
  return res
}

module.exports = {
  getArticleInfoS,
  createArticleS
}
