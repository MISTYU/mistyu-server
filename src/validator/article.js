const validate = require('./validate')

// article 格式校验
const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    tag: {
      type: 'string'
    },
    desc: {
      type: 'string'
    },
    content: {
      type: 'string'
    }
  },
  required: ['title', 'tag', 'content']
}

function articleValidate (data = {}) {
  return validate(schema, data)
}

module.exports = {
  articleValidate
}
