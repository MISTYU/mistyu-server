const { ErrorModel, SuccessModel } = require('../model/ResponseModel')
const { uploadSizeError } = require('../model/ErrorModel')
const fsExtra = require('fs-extra')
const path = require('path')

const DIST_FOLDER_PATH = path.join(__dirname, '..', '..', 'public')
const MAX_SIZE = 1024 * 1024 * 1024

async function saveFile ({ name, type, size, filePath }) {
  if (size > MAX_SIZE) {
    await fsExtra.remove(filePath)
    return new ErrorModel(uploadSizeError)
  }
  // 移动文件
  const fileName = Date.now() + '.' + name
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
  await fsExtra.move(filePath, distFilePath)

  // 返回信息
  return new SuccessModel({
    url: '/' + fileName
  })
}

module.exports = {
  saveFile
}
