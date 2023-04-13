const {Router} = require("express")
const routes = Router()

//controllers
const userController = require('./controllers/userController.js')
const driverController = require('./controllers/driverController.js')

//middlewares
const checkIfUserIsReady = require('./middlewares/request.js')
const driverCancel = require('./middlewares/driverCancel.js')
const userCancel = require('./middlewares/userCancel.js')

//routes from user
routes.get('/callrace', userController.index)
routes.post('/callrace', userController.store)
routes.delete('/callrace/:iduser', userCancel, userController.delete)

//routes from driver
routes.get('/finddriver', driverController.index)
routes.post('/finddriver', checkIfUserIsReady, driverController.store)
routes.delete('/finddriver/:iddriver', driverCancel, driverController.delete)

module.exports = routes