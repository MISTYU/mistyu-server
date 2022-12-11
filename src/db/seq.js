const { Sequelize } = require('sequelize')

const seq = new Sequelize('mistyu'/* 数据库 */, 'root'/* 用户名 */, 'root'/* 密码 */, {
  host: '118.190.216.132',
  dialect: 'mysql',
  pool: {
    max: 5, // 连接池中最大的链接数量
    min: 0,
    idle: 10000 // 如果一个连接池 10s 之内没有被使用，则释放
  }
})

module.exports = seq
