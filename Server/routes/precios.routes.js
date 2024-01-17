const preciosRouter = require("express").Router();
const precios = require('../controllers/precios.controller');

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');

// GET /api/precios/fijos  body-> {sistema, tarifa, cia, producto} return p1,p2........
preciosRouter.post('/fijos',precios.getPreciosFijos);

// GET /api/precios/indexados body-> {sistema, tarifa, cia, producto, mes, fee} return p1,p2........
preciosRouter.post('/indexados',precios.getPreciosIndexados)

module.exports = preciosRouter;