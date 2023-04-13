const User = require('../models/User');


module.exports = {
  async index (req, res) {
    const users = await User.findAll()
    if (users == "" || users == null){
      return res.status(200).send({message: "Nenhuma busca iniciada"})
    }
    return res.status(200).send({users})
  },
  async store (req, res) {
    const {streetstart, streetend, paymentmethod} = req.body
    const user = await User.create({streetstart, streetend, paymentmethod})
    await user.save()

    return res.status(200).send({
      message: "Buscando corrida",
      user
    })
    
  },

  async delete(req, res) {
    const { iduser } = req.params
    const userCancel = await User.findOne({where: {id: iduser}})

    if(!userCancel){
      return res.status(404).send({
        message: "Usuario não existe!",
      })
    }
    await User.destroy({
      where: {
        id: iduser,
      },
    })
    return res.status(200).send({
      message: "Usuario cancelou a corrida!",
    })
  },
}