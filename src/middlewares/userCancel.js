const Driver = require('../models/Driver')

module.exports = async function userCancel (req, res, next) {

  let {iduser} = req.params
  
  let founddriver = await Driver.findOne({ where: { iduser }})
  
  if(founddriver){
    Driver.destroy({
      where:{
        iduser
      }
    })
  }

  next()
} 
 

