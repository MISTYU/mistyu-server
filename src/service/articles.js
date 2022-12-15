const { Article, Detail } = require('../db/model/articles')
const { formatArticle } = require('../utils/format')
// 查询文章列表
async function getArticlesS ({ keyword = '', pageSize = 10, pageIndex = 1, order = [['updatedAt', 'DESC']] }) {
  const whereOpt = {
    limit: Number(pageSize),
    offset: Number((pageIndex - 1) * pageSize),
    order: [...order]
  }
  const ArticleList = await Article.findAndCountAll(whereOpt)
  const total = ArticleList.count
  return {
    list: formatArticle(ArticleList.rows.map(article => article.dataValues)),
    total,
    hasMore: total > pageSize * (pageIndex),
    pageSize,
    pageIndex
  }
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
  await createArticleContent({ articleId, content })
  // 不需要返回文章内容
  return formatArticle(articleInfo.dataValues)
}

// 创建文章内容
async function createArticleContent ({ articleId, content }) {
  const createRes = await Detail.create({
    content,
    articleId
  })
  return true
}
// 获取文章详情
async function getArticleContent ({ id }) {
  // 查询条件
  const whereOpt = {
    articleId: id
  }
  const result = await Detail.findOne({
    where: whereOpt
  })
  if (result === null) {
    return result
  }
  return formatArticle(result.dataValues)
}
// 更新文章内容
async function updateArticleContentS ({ articleId, content }) {
  const updateRes = await Detail.update({
    content
  }, {
    where: {
      articleId
    }
  })

  return updateRes[0] > 0
}

// 删除文章
async function deleteArticleS ({ id }) {
  const deleteRes = await Article.destroy({
    where: {
      id
    }
  })
  return deleteRes > 0
}

module.exports = {
  getArticlesS,
  getArticleInfoS,
  createArticleS,
  updateArticleContentS,
  deleteArticleS,
  getArticleContent
}
