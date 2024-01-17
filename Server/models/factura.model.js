const { DataTypes } = require('sequelize');
const Sips = require('./sips.model');
const Cliente = require('./cliente.model');

// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const factura = db.define('factura', {
  id_factura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_sips: {
    type: DataTypes.INTEGER,
  },
  cups: {
    type: DataTypes.STRING(30),
  },
  fecha_factura: {
    type: DataTypes.DATE,
  },
  importe_total_factura: {
    type: DataTypes.DOUBLE,
  },
  dias_facturacion: {
    type: DataTypes.INTEGER,
  },
  energia_reactiva: {
    type: DataTypes.DOUBLE,
  },
  impuesto_electrico: {
    type: DataTypes.DOUBLE,
  },
  alquiler_equipo: {
    type: DataTypes.DOUBLE,
  },
  otros_costes: {
    type: DataTypes.DOUBLE,
  },
  descuento: {
    type: DataTypes.DOUBLE,
  },
},
{
    db,
    modelName: 'factura',
    tableName: 'factura',
    timestamps:false,
}
);

factura.removeAttribute('id')

// Definir las claves foráneas
factura.belongsTo(Sips, { foreignKey: 'id_sips'});
factura.belongsTo(Cliente, { foreignKey: 'cups'});

factura.sync();

module.exports = factura;