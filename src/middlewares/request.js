const User = require('../models/User');

module.exports = async function checkIfUserIsReady (req, res, next) {

    let {iduser} = req.body
    let founduser = await User.findOne({ where: { id: iduser }})

    if(!founduser){
      return res.status(500).json({error: "Usuario nao existe."})
    }

    try {
      if (founduser.searchdriver) {
        founduser.update({searchdriver: false})
        return res.status(200).json({message: "middle"})        
      }
      else {
        res.status(404).json({error: "Corrida ja em andamento"})
      }
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: "Erro no servidor"})
    }
    return 
} 
   
  
