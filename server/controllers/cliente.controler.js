const clienteModel = require('../models/cliente.model')
const { validationResult } = require('express-validator');

const readCliente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const cupps = req.body.cups
      let user = await clienteModel.findOne({ where: { cups: cupps } });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ msg: "cliente no encontrado en la db" });
      }
    } catch (error) {
      console.log(`ERROR: ${error}`);
      res.status(400).json({ msj: `ERROR: ${error}` });
    }
  };

module.exports = {
    readCliente
};
