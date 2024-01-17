const sipsRouter = require("express").Router();
const sipsController = require('../controllers/sips.controller')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');

// GET /api/sips/  body-> {cups} return ca_p1
sipsRouter.post('/',sipsController.getSips);


module.exports = sipsRouter;