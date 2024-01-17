// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const precio_fijo = db.define("precio_fijo", {
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
    fee:{
        field:'fee',
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
    }
},
    {
        db,
        modelName: 'precio_fijo',
        tableName: 'precio_fijo',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
precio_fijo.removeAttribute('id')
precio_fijo.sync();

module.exports = precio_fijo;