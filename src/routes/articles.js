const Router = require('koa-router')
const { createArticleC, getArticlesC, getArticleContentC } = require('../controller/articles')
const { genValidator } = require('../middleawres/validator')
const { articleValidate } = require('../validator/article')

const router = new Router()

// test
router.get('/', async (ctx, next) => {
  ctx.body = {
    code: 1,
    status: 'success',
    data: {}
  }
  // next()
})

// 文章列表
router.get('/articles', async (ctx, next) => {
  const Articles = await getArticlesC(ctx.query)
  ctx.body = Articles
})
// 文章详情
router.get('/article/:id', async (ctx, next) => {
  const Article = await getArticleContentC(ctx.params)
  ctx.body = Article
})
// 创建文章
router.post('/article', genValidator(articleValidate), async (ctx, next) => {
  const articleInfo = await createArticleC(ctx.request.body)
  ctx.body = articleInfo
})
// 删除文章
router.delete('/article/:id', async (ctx, next) => {
  ctx.body = 'delete'
})
// 文章查询
router.get('/articles/query', async(ctx, next) => {
  ctx.body = ctx.query.keyword
})
// 更新文章
router.patch('/article/:id', async (ctx, next) => {
  ctx.body = 'patch'
})

module.exports = router
