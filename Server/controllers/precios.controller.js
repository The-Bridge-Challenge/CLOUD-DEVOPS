const preciosFijoModel = require("../models/precios_fijo.model");
const preciosPotenciaModel = require("../models/precios_potencia.model");
const preciosEnergiaModel = require("../models/precios_energia.model");
const { validationResult } = require('express-validator');
const { DATE } = require("sequelize");

// GET /api/precios/fijos  body-> {sistema, tarifa, cia, producto} return p1,p2........
const getPreciosFijos = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    if (data) {
      const precios = await preciosFijoModel.findOne(
        {
          where: {
            sistema: data.sistema,
            cia: data.cia,
            producto: 'FIJO',
            producto_cia: data.producto,
            tarifa: data.tarifa,
            fee: '0'
          },
          attributes: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p1_e', 'p2_e', 'p3_e', 'p4_e', 'p5_e', 'p6_e']
        });
      if (precios) {
        res.status(200).json(precios);
      } else {
        res.status(500).json({ msj: "No figuran datos para tu consulta. Revisa tus selecciones y prueba de nuevo" });
      }
    } else {
      res.status(400).json({ msj: 'faltan parametros' });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

// GET /api/precios/indexados body-> {sistema, tarifa, cia, producto, mes, fee} return p1,p2........
const getPreciosIndexados = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    if (data) {

      const arrayFecha = data.mes.split('/')

      const fecha = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0] + ''

      console.log('fecha ', fecha);

      const searchParamsPotencia = {
        sistema: data.sistema,
        cia: data.cia,
        producto: 'INDEXADO',
        producto_cia: data.producto,
        tarifa: data.tarifa,
      }

      const searchParamsEnergia = {
        sistema: data.sistema,
        cia: data.cia,
        tarifa: data.tarifa,
        mes: new Date(fecha),
        fee: data.fee,
      }

      // console.log('parametros de busqueda potencia ', searchParamsPotencia);
      // console.log('parametros de busqueda energia  ', searchParamsEnergia);

      const preciosPotencia = await preciosPotenciaModel.findOne(
        {
          where: searchParamsPotencia,
          attributes: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
        });
      const preciosEnergia = await preciosEnergiaModel.findOne(
        {
          where: searchParamsEnergia,
          attributes: ['p1_e', 'p2_e', 'p3_e', 'p4_e', 'p5_e', 'p6_e']
        });
      // console.log('preciospotencia ', preciosPotencia);
      // console.log('preciosEnergia ', preciosEnergia);

      if (preciosPotencia && preciosEnergia) {
        const resuesta = [preciosPotencia, preciosEnergia]
        res.status(200).json(resuesta);
      } else {
        res.status(500).json({ msj: "No figuran datos para tu consulta. Revisa tus selecciones y prueba de nuevo" });
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
  getPreciosFijos,
  getPreciosIndexados,
};
