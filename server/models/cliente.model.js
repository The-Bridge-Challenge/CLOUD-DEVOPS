// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');
const usuarioModel = require('./users.model')

const cliente = db.define("cliente", {
    cups: {
        field: 'cups',
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    id_usuario:{
        field:'id_usuario',
        type: DataTypes.UUID,
    },
    nombre_cliente:{
        field:'nombre_cliente',
        type: DataTypes.STRING(50),
    },
    dirección:{
        field:'dirección',
        type: DataTypes.STRING(50),
    }
},
    {
        db,
        modelName: 'cliente',
        tableName: 'cliente',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
cliente.removeAttribute('id')

// 1:M
usuarioModel.hasMany(cliente, { foreignKey: 'id_usuario' });
cliente.belongsTo(usuarioModel, { foreignKey: 'id_usuario' });

cliente.sync();

module.exports = cliente;