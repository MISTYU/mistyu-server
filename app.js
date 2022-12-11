const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const { user, upload, articles} = require('./src/routes')

const app = new Koa()

// onerror(app) // error handler

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(__dirname + '/public'))
// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })
// 请求日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(articles.routes(), articles.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
