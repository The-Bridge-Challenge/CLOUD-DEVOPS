const userRouter = require("express").Router();
const userController = require('../controllers/users.controller')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');

// POST
userRouter.post("/",getAccessToken, decodeToken, adminRoutes, userController.createUser);

// GET client asesor route demo
userRouter.get("/", getAccessToken, decodeToken, clientRoutes, userController.readUser);

// DELETE
userRouter.delete("/", getAccessToken, decodeToken, adminRoutes, userController.deleteUser);

//client asesor route demo
userRouter.get('/all',userController.getAllUsers);

module.exports = userRouter;