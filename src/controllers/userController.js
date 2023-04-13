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
      status: 1,
      message: "Buscando corrida",
      user
    })
    
  },
  async update(req, res) {
    
    
  },
  async delete(req, res) {
    const { id } = req.params
    await User.destroy({
      where: {
        id: id,
      },
    })
    return res.status(200).send({
      status: 1,
      message: "Usuario deletado com sucesso!",
    })
  },
}