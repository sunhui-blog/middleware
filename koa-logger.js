module.exports = async (ctx, next) => {
  const start = new Date().getTime()
  // 中间件异步处理
  await next()
  const end = new Date().getTime()
  // 打印出耗时还有长度
  console.log(ctx.request.url, end - start, ctx.body.length, 'log')
}
