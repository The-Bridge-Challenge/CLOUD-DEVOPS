const preciosFijoModel = require("../models/precios_fijo.model");
const preciosPotenciaModel = require("../models/precios_potencia.model");
const preciosEnergiaModel = require("../models/precios_energia.model");

//tes db conection  , not used ,  ignore it
const getPreciosFijos = async (req, res) => {
  try {
    let precios = await preciosFijoModel.findOne();
    res.status(200).json(precios);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// GET /api/precios/fijos  body-> {sistema,cia,producto_cia} return p1,p2........
const getPreciosFijosProductoCia = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      let precios = await preciosFijoModel.findOne(
        {
          where: {
            sistema: data.sistema,
            cia: data.cia,
            producto: 'FIJO',
            producto_cia: data.producto_cia,
            tarifa: '2.0TD',
            fee: '0'
          },
          attributes: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p1_e', 'p2_e', 'p3_e', 'p4_e', 'p5_e', 'p6_e']
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

// GET /api/precios/indexados body-> {sistema,cia,producto_cia} return p1,p2........
const getPreciosIndexadosProductoCia = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      let precios = await preciosPotenciaModel.findOne(
        {
          where: {
            sistema: data.sistema,
            cia: data.cia,
            producto: 'INDEXADO',
            producto_cia: data.producto_cia,
            tarifa: '2.0TD',
            fee: data.fee
          },
          attributes: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p1_e', 'p2_e', 'p3_e', 'p4_e', 'p5_e', 'p6_e']
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

// GET /api/precios/cias body->{sistema}  retrun cias[]
const getCias = async (req, res) => {
  try {
    const sistema = req.body.sistema
    const ciasFijo = await preciosFijoModel.findAll({
      where: { sistema: sistema },
      attributes: ['cia'],
      group: ['cia']
    })
    const ciasPotencia = await preciosPotenciaModel.findAll({
      where: { sistema: sistema },
      attributes: ['cia'],
      group: ['cia']
    })
    const ciasEnergia = await preciosEnergiaModel.findAll({
      where: { sistema: sistema },
      attributes: ['cia'],
      group: ['cia']
    })
    res.status(200).json({
      ciasFijo,
      ciasPotencia,
      ciasEnergia
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
}

// GET /api/precios/fijos/productos body->{sistema,cia}  retrun productosCia[]
const getProductosFijosCia = async (req, res) => {
  try {
    const { sistema, cia } = req.body
    const productosCia = await preciosFijoModel.findAll({
      where: { sistema: sistema, cia: cia, tarifa: '2.0TD' },
      attributes: ['producto_cia'],
      group: ['producto_cia']
    })
    res.status(200).json({
      productosCia
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
}

// GET /api/precios/indexados/productos body->{sistema,cia}  retrun productosCia[]
const getProductosIndexadosCia = async (req, res) => {
  try {
    const { sistema, cia } = req.body
    const productosCia = await preciosPotenciaModel.findAll({
      where: { sistema: sistema, cia: cia, tarifa: '2.0TD' },
      attributes: ['producto_cia'],
      group: ['producto_cia']
    })
    res.status(200).json({
      productosCia
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
}

// GET /api/precios/indexados/fee body->{sistema,cia}  retrun productosCia[]
const getFeeIndexadosUltimoMes = async (req, res) => {
  try {
    const { sistema, cia } = req.body
    const Fees = await preciosEnergiaModel.findAll({
      where: { sistema: sistema, cia: cia, tarifa: '2.0TD' },
      attributes: ['fee','mes'],
      group: ['fee'],
      order: ['mes']
    })
    res.status(200).json({
      Fees
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
}

module.exports = {
  getPreciosFijosProductoCia,
  getCias,
  getProductosFijosCia,
  getProductosIndexadosCia,
  getFeeIndexadosUltimoMes
};
