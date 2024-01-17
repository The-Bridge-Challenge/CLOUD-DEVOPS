const { validationResult } = require('express-validator');
const sipsModel = require('../models/sips.model');

// GET /api/sips  body-> {cups} return ca_p1....
const getSips = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    if (data) {
      const answer = await sipsModel.findOne(
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
  getSips,
};
