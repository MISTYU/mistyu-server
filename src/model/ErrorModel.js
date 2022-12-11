module.exports = {
  IsAdminError: {
    code: 10001,
    message: '密码错误'
  },
  IsHasArticleError: {
    code: 10002,
    message: '文章已存在'
  },
  CreateArticleError: {
    code: 10003,
    message: '文章创建失败'
  },
  ArticleParamsError: {
    code: 10004,
    message: '参数错误'
  },
  uploadSizeError: {
    code: 10005,
    message: '上传文件应该小于1MB'
  },
  queryArticlesError: {
    code: 10006,
    message: '查询文章列表错误'
  }
}
