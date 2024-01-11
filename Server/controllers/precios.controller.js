const preciosModel = require("../models/precios.model");

const getAllprecios = async (req, res) => {
  try {
    let precios = await preciosModel.findOne();
    res.status(200).json(precios);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// GET /api/precios/ body={sistema: '',cia: '',producto: '',producto_cia: '',tarifa: '',fee: ''}
const getPricesWithParams = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      let precios = await preciosModel.findOne(
        {
          where: {
            sistema: data.sistema,
            cia: data.cia,
            producto: data.producto,
            producto_cia: data.producto_cia,
            tarifa: data.tarifa,
            fee: data.fee
          },
          attributes: ['p1', 'p2','p3','p4','p5','p6','p1_e','p2_e','p3_e','p4_e','p5_e','p6_e']
        });
      res.status(200).json(precios);
    } else {
      res.status(400).json({ msj: 'bad parameters' });
    }

  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

const getFields = async(req,res)=>{
  try {
    const sistemas = await preciosModel.findAll({
      attributes:['sistema'],
      group:['sistema']})
    const cia = await preciosModel.findAll({
        attributes:['cia'],
        group:['cia']})
    res.status(200).json({sistemas,cia});
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
}

module.exports = {
  getPricesWithParams,
  getAllprecios,
  getFields,
};
