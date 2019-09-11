const parent = require('../parent')
const doubleParent = require('../../double-parent')
exports.handler = function(event, context, callback) {
  console.log('parent', parent)
  // console.log('doubleParent', doubleParent)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
