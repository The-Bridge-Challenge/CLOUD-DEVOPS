const preciosRouter = require("express").Router();
const precios = require('../controllers/precios.controller');

// GET /api/precios/cias body->{sistema} retrun cias[]
preciosRouter.get('/cias',precios.getCias);

// GET /api/precios/fijos/productos body->{sistema,cia}  retrun productosCia[]
preciosRouter.get('/fijos/productos',precios.getProductosFijosCia)

module.exports = preciosRouter;