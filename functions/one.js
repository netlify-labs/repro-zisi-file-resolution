const other = require('../other/file')

exports.handler = function(event, context, callback) {
  console.log('other', other)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
