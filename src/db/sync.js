const seq = require('./seq')

require('./model/index')

// 测试链接
seq.authenticate().then(() => {
  console.log('ok')
}).catch(err => {
  console.log(err, 'err')
})

seq.sync({ force: true /* 如果存在就重置表 */ }).then(() => {
  console.log('sync')
  process.exit()
})
