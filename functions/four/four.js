const widgetHere = require('./widget')
const widgetClash = require('../widget')
const widgetParent = require('../../sibling/widget')

exports.handler = function(event, context, callback) {
  console.log('sibling', widgetParent)
  console.log('widgetClash', widgetClash)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
