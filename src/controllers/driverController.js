const Driver = require('../models/Driver');


module.exports = {
  async index (req, res) {
    const drivers = await Driver.findAll()
    if (drivers == "" || drivers == null){
      return res.status(200).send({message: "Nenhum motorista encontrado."})
    }
    return res.status(200).send({drivers})

  },
  async store (req, res) {
    const {namedriver, licenseplate, cartype, iduser} = req.body
    const driver = await Driver.create({namedriver, licenseplate, cartype, iduser})
    await driver.save()

    return res.status(200).send({
      message: "Corrida iniciada",
      driver
    })
    
  },

  async delete(req, res) {
    const { iddriver } = req.params
   
    const finddriver = Driver.findOne({where: {id: iddriver}})

    if(!finddriver){
      return res.status(404).json({error: "O motorista nao existe"})
    }

    await Driver.destroy({
      where: {
        id: iddriver,
      },
    })
    return res.status(200).send({
      message: "Corrida cancelada",
    })
  }
}