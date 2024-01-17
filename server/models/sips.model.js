// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const sips = db.define("sips", {
       id_sips:{
        field:'id_sips',
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cups: {
        field: 'cups',
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    tarifa:{
        field:'tarifa',
        type: DataTypes.STRING(50),
    },
    consumo_anual:{
        field:'consumo_anual',
        type: DataTypes.STRING(50),
    },
    municipio:{
        field:'municipio',
        type: DataTypes.STRING(50),
    },
    provincia:{
        field:'provincia',
        type: DataTypes.STRING(50),
    },
    codigo_postal:{
        field:'codigo_postal',
        type: DataTypes.STRING(50),
    },
    distribuidora_actual:{
        field:'distribuidora_actual',
        type: DataTypes.STRING(50),
    },
    ca_p1:{
        field:'ca_p1',
        type: DataTypes.DOUBLE,
    },
    ca_p2:{
        field:'ca_p2',
        type: DataTypes.DOUBLE,
    },
    ca_p3:{
        field:'ca_p3',
        type: DataTypes.DOUBLE,
    },
    ca_p4:{
        field:'ca_p4',
        type: DataTypes.DOUBLE,
    },
    ca_p5:{
        field:'ca_p5',
        type: DataTypes.DOUBLE,
    },    
    ca_p6:{
        field:'ca_p6',
        type: DataTypes.DOUBLE,
    },

},
    {
        db,
        modelName: 'sips',
        tableName: 'sips',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
sips.removeAttribute('id')
sips.sync();

module.exports = sips;