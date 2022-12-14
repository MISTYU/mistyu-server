const seq = require('../seq')
const { STRING, TEXT, INTEGER } = require('../types')

// 创建 Article 表 / 文章列表
const Article = seq.define('article', {
  // id 会自动创建，并设为主键、自增
  title: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '文章标题',
  },
  desc: {
    type: STRING,
    comment: '文章描述'
  },
  tag: {
    type: STRING,
    allowNull: false,
    comment: '文章标签'
  },
  likes: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

// 创建 Detail / 文章详情
const Detail = seq.define('detail', {
  // id 会自动创建，并设为主键、自增
  content: {
    type: TEXT,
    allowNull: false,
    comment: '违章内容'
  },
  // 会自动创建创建时间和更新时间 createdAt
  // createTime: {
  //   type: STRING,
  //   allowNull: false
  // },
  // updateTime: {
  //   type: STRING,
  //   allowNull: false
  // },
  articleId: {
    type: INTEGER,
    allowNull: false,
    comment: '文章Id'
  }
})

Detail.belongsTo(Article, {
  // 创建外键 Detail.articleId => Article.id
  foreignKey: 'articleId'
})
Article.hasMany(Detail, {
  foreignKey: 'articleId'
})

module.exports = {
  Article,
  Detail
}
