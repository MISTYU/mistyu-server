const Router = require('koa-router')
const koaForm = require('formidable-upload-koa')
const { saveFile } = require('../controller/upload')

const router = new Router()
router.prefix('/api/upload')

// 上传图片
router.post('/imgs', koaForm(), async (ctx, next) => {
  const file = ctx.req.files['file']
  const { size, path, name, type } = file
  ctx.body = await saveFile({
    name,
    type,
    size,
    filePath: path
  })
})

module.exports = router
