const {Router} = require("express")
const routes = Router()
const userController = require('./controllers/userController.js')

routes.get('/callrace', userController.index)
routes.post('/callrace', userController.store)
routes.delete('/callrace/:id', userController.delete)

module.exports = routes