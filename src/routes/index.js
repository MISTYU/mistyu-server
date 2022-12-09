const Router = require('koa-router')
const router = new Router()

// test
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!'
  // next()
})

// 文章列表
router.get('/articles', async (ctx, next) => {
  ctx.body = 'articles'
})

module.exports = router