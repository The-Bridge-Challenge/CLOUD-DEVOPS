// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const precio_potencia = db.define("precio_potencia", {
    sistema: {
        field: 'sistema',
        type: DataTypes.STRING(50),
    },
    cia:{
        field:'cia',
        type: DataTypes.STRING(50),
    },
    producto:{
        field:'producto',
        type: DataTypes.STRING(50),
    },
    producto_cia:{
        field:'producto_cia',
        type: DataTypes.STRING(50),
    },
    tarifa:{
        field:'tarifa',
        type: DataTypes.STRING(50),
    },
    p1:{
        field:'p1',
        type: DataTypes.DOUBLE,
    },
    p2:{
        field:'p2',
        type: DataTypes.DOUBLE,
    },
    p3:{
        field:'p3',
        type: DataTypes.DOUBLE,
    },
    p4:{
        field:'p4',
        type: DataTypes.DOUBLE,
    },
    p5:{
        field:'p5',
        type: DataTypes.DOUBLE,
    },    
    p6:{
        field:'p6',
        type: DataTypes.DOUBLE,
    },
},
    {
        db,
        modelName: 'precio_potencia',
        tableName: 'precio_potencia',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
precio_potencia.removeAttribute('id')
precio_potencia.sync();

module.exports = precio_potencia;