const sibling = require('../sibling/file')

exports.handler = function(event, context, callback) {
  console.log('sibling', sibling)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
