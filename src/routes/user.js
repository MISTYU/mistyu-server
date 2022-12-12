const Router = require('koa-router')
const { isAdmin } = require('../controller/user')

const router = new Router()
router.prefix('/api/user')

// 是否是管理员
router.post('/isAdmin', async(ctx, next) => {
  const { password } = ctx.request.body
  ctx.body = await isAdmin(password)
})

module.exports = router
