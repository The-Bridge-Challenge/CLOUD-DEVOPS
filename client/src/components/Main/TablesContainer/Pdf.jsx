import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";


const Pdf = ({
  inputConsumoAnual,
  inputConsumo,
  inputPrecioAnual,
  inputPrecioMes,
  inputPotenciaContratada,
  inputPotenciaFacturada,
  inputPrecioPotencia,
  valorOtrosMes,
  valorOtrosAnual,
  restoDeCampos,
  importeTotalFactura,
  importeTotalFactura_prop,
  importeTotalAnual_prop,
  preciosPropuesta,
  inputHome,
  importeTotalAnual

}) => {



 
  const inputHomeArray = [inputHome];
  
  
  
  
  // Datos para la tabla
  const tableData = [
    
    
    ['','P1','P2','P3','P4','P5','P6'],

    ['Precio energía (mes de factura)',`${inputPrecioMes.precio_factura_p1}`,`${inputPrecioMes.precio_factura_p2}`,`${inputPrecioMes.precio_factura_p3}`,`${inputPrecioMes.precio_factura_p4}`,`${inputPrecioMes.precio_factura_p5}`,`${inputPrecioMes.precio_factura_p6}`],

    
    ['Precios energía media anual (€/kWh)',`${inputPrecioAnual.precio_anual_p1}`,`${inputPrecioAnual.precio_anual_p2}`,`${inputPrecioAnual.precio_anual_p3}`,`${inputPrecioAnual.precio_anual_p4}`,`${inputPrecioAnual.precio_anual_p5}`,`${inputPrecioAnual.precio_anual_p6}`,],
    
    ['Precios potencia (€/kW/día)',`${inputPrecioPotencia.precio_potencia_p1}`,`${inputPrecioPotencia.precio_potencia_p2}`,`${inputPrecioPotencia.precio_potencia_p3}`,`${inputPrecioPotencia.precio_potencia_p4}`,`${inputPrecioPotencia.precio_potencia_p5}`,`${inputPrecioPotencia.precio_potencia_p6}`,],
    
    ['Consumo anual (kWh)',`${inputConsumoAnual.consumo_anual_p1}`,`${inputConsumoAnual.consumo_anual_p2}`,`${inputConsumoAnual.consumo_anual_p3}`,`${inputConsumoAnual.consumo_anual_p4}`,`${inputConsumoAnual.consumo_anual_p5}`,`${inputConsumoAnual.consumo_anual_p6}`],

    ['Consumo factura actual (kWh)',`${inputConsumo.consumo_factura_p1}`,`${inputConsumo.consumo_factura_p2}`,`${inputConsumo.consumo_factura_p3}`,`${inputConsumo.consumo_factura_p4}`,`${inputConsumo.consumo_factura_p5}`,`${inputConsumo.consumo_factura_p6}`,],


    ['Potencia facturada (kWh)',`${inputPotenciaFacturada.potencia_facturada_p1}`,`${inputPotenciaFacturada.potencia_facturada_p2}`,`${inputPotenciaFacturada.potencia_facturada_p3}`,`${inputPotenciaFacturada.potencia_facturada_p4}`,`${inputPotenciaFacturada.potencia_facturada_p5}`,`${inputPotenciaFacturada.potencia_facturada_p6}`,],


    ['Potencia contratada (kWh)',`${inputPotenciaContratada.potencia_contratada_p1}`,`${inputPotenciaContratada.potencia_contratada_p2}`,`${inputPotenciaContratada.potencia_contratada_p3}`,`${inputPotenciaContratada.potencia_contratada_p4}`,`${inputPotenciaContratada.potencia_contratada_p5}`,`${inputPotenciaContratada.potencia_contratada_p6}`,],


  ]
  
  const tableData2 = [
    
    ['','P1','P2','P3','P4','P5','P6'],
    
    ['Precio energía (mes de factura)',`${preciosPropuesta.p1_e}`,`${preciosPropuesta.p2_e}`,`${preciosPropuesta.p3_e}`,`${preciosPropuesta.p4_e}`,`${preciosPropuesta.p5_e}`,`${preciosPropuesta.p6_e}`],
    ['Precios energía media anual (€/kWh)',`${inputPrecioAnual.precio_anual_p1}`,`${inputPrecioAnual.precio_anual_p2}`,`${inputPrecioAnual.precio_anual_p3}`,`${inputPrecioAnual.precio_anual_p4}`,`${inputPrecioAnual.precio_anual_p5}`,`${inputPrecioAnual.precio_anual_p6}`],
    ['Precios potencia (€/kW/día)',`${preciosPropuesta.p1_p}`,`${preciosPropuesta.p2_p}`,`${preciosPropuesta.p3_p}`,`${preciosPropuesta.p4_p}`,`${preciosPropuesta.p5_p}`, `${preciosPropuesta.p6_p}`],
    

  ]

  const tableData3 = [
    
    ['','Factura actual','Anual estimado'],
    ['',`${importeTotalFactura - importeTotalFactura_prop}`,`${importeTotalAnual - importeTotalAnual_prop}`]
    

  ]

  

  // Estilos para la tabla
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FDFCFC',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      
    },
    table: {
      display: 'table',
      width: 'auto',
      borderWidth: 0.5,
      borderLeftWidth: 0.5,
      borderTopWidth: 1,
      marginTop:20,
      borderRadius:8
     
    },
    tableRow: { margin: 'auto', flexDirection: 'row' },
    tableCol: {
      width: '15%',
      borderStyle: 'solid',
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    cell: { margin: 6, fontSize: 8 },
    title:{
      margin:10,
      color:'#C10000',
      textAlign: 'center',
      marginBottom:30
     
    },
    title2:{
      margin:10,
      color:'#C10000',
      textAlign: 'center',
      fontSize:10,
     
    },
    text:{
      fontSize:10,
      flexDirection: 'row',

    },
    personalData:{
      flexDirection: 'row',

    }
    
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

        <View>
          <Text style={styles.title}>Oferta de contratación de suministro eléctrico</Text>
        </View>

    
          <View style={styles.personalData}>
            
            {inputHomeArray.map((obj, index) => (
              <View key={index} >
               <Text style={styles.text}>Nombre/Razón: {obj.name}</Text>
               <Text style={styles.text}>Dirección:{obj.address}</Text>
               <Text style={styles.text}>CUPS{obj.cups}</Text>
               <Text style={styles.text}>Empresa actual:{obj.company}</Text>

              
              </View>
            ))}
          </View>

        
          
          <View style={styles.table}>
          <Text style={styles.title2}>Datos factura actual</Text>
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, colIndex) => (
                  <View key={colIndex} style={styles.tableCol}>
                    <Text style={styles.cell}>{cell}</Text>
                  </View>
                ))}
              </View>
            ))}
            
          </View>
          
          <View style={styles.table}>
          <Text style={styles.title2}>Propuesta Several</Text>
            {tableData2.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, colIndex) => (
                  <View key={colIndex} style={styles.tableCol}>
                    <Text style={styles.cell}>{cell}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.table}>
          <Text style={styles.title2}>Ahorro</Text>
            {tableData3.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, colIndex) => (
                  <View key={colIndex} style={styles.tableCol}>
                    <Text style={styles.cell}>{cell}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
        
      </Page>
    </Document>
  );
};

export default Pdf;