const sibling = require('../sibling/file')
const lodash = require('lodash')

exports.handler = function(event, context, callback) {
  console.log('sibling', sibling)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
