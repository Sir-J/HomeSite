var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('data.json')
var middlewares = jsonServer.defaults({
	"static": "./HomeSite"
})

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', function (req, res) {
  var db = router.db // lowdb instance  
  console.log(req.body.login);
  var tasks = db
    .get('users')
    .filter(function (user) {
      //var re = new RegExp(req.body.login)
		return user.login === req.body.login;
    })    
	.value();
	
	console.log(tasks)
	res.jsonp(tasks)
})


server.use(router)

// server.use(function (req, res) {
  // res.status(404).send({
    // "error": "can't find what you are looking for"
  // })
// })

server.listen(3000, function () {
  console.log('JSON Server is running')
})