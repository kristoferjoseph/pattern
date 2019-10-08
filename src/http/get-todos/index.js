const data = require('@begin/data')

exports.handler = async function todos (req) {
  let todos = await data.get({
    table: 'todos'
  })
  // Return oldest todo first
  todos.sort((a, b) => a.created > b.created)
  return {
    statusCode: 201,
    headers: {'content-type': 'application/json; charset=utf8'},
    body: JSON.stringify({
      todos
    })
  }
}
