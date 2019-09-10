const parent = require('../parent')

exports.handler = function(event, context, callback) {
  console.log('parent', parent)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
