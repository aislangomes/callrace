const User = require('../models/User');



module.exports = async function checkIfUserIsReady (req, res, next) {
 
  let {iduser} = req.body
  let findeduser = await User.findOne({ where: { id: iduser } })

  if (iduser == findeduser.id && findeduser.searchdriver) {
    findeduser.update({searchdriver: false})
    res.status(200).json({message: "Corrida iniciada."})
    next()    
  } 
  else {
      return res.status(404).json({message: "Usuario não encontrado."})
  }
}