const Koa = require('koa')
const app = new Koa()
const koaLog = require('./koa-logger')

function delay () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

app.use(koaLog)

app.use(async (ctx, next) => {
  ctx.body = '1'

  // 下一个中间件
  await next()

  ctx.body = ctx.body + '2'
})

app.use(async (ctx, next) => {
  ctx.body += '3'

  // 下一个中间件
  await next()

  ctx.body = ctx.body + '4'
})

app.use(async (ctx, next) => {
  ctx.body += '5'

  await delay()

  // 下一个中间件
  await next()

  ctx.body = ctx.body + '6'
})

// 启动应用
app.listen('9000')
