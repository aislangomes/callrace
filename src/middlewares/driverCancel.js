const User = require('../models/User');
const Driver = require('../models/Driver')

module.exports = async function driverCancel (req, res, next) {

    let {iddriver} = req.params
    let userDriver = await Driver.findOne({where: {id: iddriver}})

    if(!userDriver){
      return res.status(404).json({error: "Motorista nao existe."})
    }

    let founduser = await User.findOne({ where: { id: userDriver.iduser }})

    if(!founduser){
        return res.status(404).json({error: "Motorista nao existe."})
    }

    try {
      if (founduser.searchdriver === false) {
        founduser.update({searchdriver: true})     
      }
      else {
        return res.status(404).json({error: "Corrida ja foi cancelada"})
      }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Erro no servidor"})
    }
    next()
} 
   
  
