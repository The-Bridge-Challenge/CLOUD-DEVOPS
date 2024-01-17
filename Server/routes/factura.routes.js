const facturaRouter = require("express").Router();
const facturaController = require('../controllers/factura.controller')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');

// GET /api/sips/  body-> {cups} 
facturaRouter.post('/',facturaController.getFactura);


module.exports = facturaRouter;