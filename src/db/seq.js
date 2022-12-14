const { Sequelize } = require('sequelize')
const {
  HOST,
  DB_NAME,
  MYSQL_PASSWORD,
  ADMIN_NAME
} = require('../config/user')

const seq = new Sequelize(DB_NAME/* 数据库 */, ADMIN_NAME/* 用户名 */, MYSQL_PASSWORD/* 密码 */, {
  host: HOST,
  dialect: 'mysql', 
  pool: {
    max: 5, // 连接池中最大的链接数量
    min: 0,
    idle: 10000 // 如果一个连接池 10s 之内没有被使用，则释放
  }
})

module.exports = seq
