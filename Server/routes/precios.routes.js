const preciosRouter = require("express").Router();
const precios = require('../controllers/precios.controller');

// GET /api/precios/all 100 primeros
preciosRouter.get('/all',precios.getAllprecios);

// GET /api/precios/ body={sistema: '',cia: '',producto: '',producto_cia: '',tarifa: '',fee: ''}
preciosRouter.get('/',precios.getPricesWithParams);

// GET /api/precios/fields
preciosRouter.get('/fields',precios.getFields)


module.exports = preciosRouter;