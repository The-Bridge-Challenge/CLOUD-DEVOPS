const { validationResult } = require('express-validator');
const facturaModel = require('../models/factura.model');

// GET /api/factura
const getFactura = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    if (data) {
      const answer = await facturaModel.findOne(
        {
          where: {cups:data.cups}
        });
      if (answer) {
        res.status(200).json(answer);
      } else {
        res.status(500).json({ msj: "No figuran datos para tu consulta." });
      }
    } else {
      res.status(400).json({ msj: 'faltan parametros' });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

module.exports = {
    getFactura,
};