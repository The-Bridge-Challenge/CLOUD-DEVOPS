// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const precio_energia = db.define("precio_energia", {
    sistema: {
        field: 'sistema',
        type: DataTypes.STRING(50),
    },
    cia:{
        field:'cia',
        type: DataTypes.STRING(50),
    },
    mes:{
        field:'mes',
        type: DataTypes.DATE
    },
    tarifa:{
        field:'tarifa',
        type: DataTypes.STRING(50),
    },
    fee:{
        field:'fee',
        type: DataTypes.STRING(50),
    },
    p1_e:{
        field:'p1_e',
        type: DataTypes.DOUBLE,
    },
    p2_e:{
        field:'p2_e',
        type: DataTypes.DOUBLE,
    },
    p3_e:{
        field:'p3_e',
        type: DataTypes.DOUBLE,
    },
    p4_e:{
        field:'p4_e',
        type: DataTypes.DOUBLE,
    },
    p5_e:{
        field:'p5_e',
        type: DataTypes.DOUBLE,
    },    
    p6_e:{
        field:'p6_e',
        type: DataTypes.DOUBLE,
    },
},
    {
        db,
        modelName: 'precio_energia',
        tableName: 'precio_energia',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
precio_energia.removeAttribute('id')
precio_energia.sync();

module.exports = precio_energia;