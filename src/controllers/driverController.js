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
  async update(req, res) {
    
    
  },
  async delete(req, res) {
    const { id } = req.params
    await Driver.destroy({
      where: {
        id: id,
      },
    })
    return res.status(200).send({
      message: "Corrida cancelada",
    })
  }
}