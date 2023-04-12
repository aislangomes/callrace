const {Router} = require("express")
const routes = Router()
const userController = require('./controllers/userController.js')
const driverController = require('./controllers/driverController.js')
const checkIfUserIsReady = require('./middlewares/request')

routes.get('/callrace', userController.index)
routes.post('/callrace', userController.store)
routes.delete('/callrace/:id', userController.delete)


routes.get('/finddriver', driverController.index)
routes.post('/finddriver', checkIfUserIsReady, driverController.store)
routes.delete('/finddriver/:id', driverController.delete)

module.exports = routes