// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const usuario = db.define("usuario", {
    id_usuario: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    email: {
        field: 'email',
        unique: 'true',
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    contraseña:{ // esto tiene que estar en hash 
        field: 'contraseña',
        type: DataTypes.STRING(50)
    },
    rol: {
        field: 'rol',
        type: DataTypes.STRING(50)
    },
    
},
    {
        db,
        modelName: 'usuario',
        tableName: 'usuario',
        timestamps:false,
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
usuario.sync();

module.exports = usuario;