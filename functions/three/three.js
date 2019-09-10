const child = require('./child/file')

exports.handler = function(event, context, callback) {
  console.log('child', child)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
