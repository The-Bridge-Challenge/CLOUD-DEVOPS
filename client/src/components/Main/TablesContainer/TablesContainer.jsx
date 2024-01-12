import React from "react";
import { useState, useEffect } from 'react'
import TableInputFactura from "./TableInputFactura/TableInputFactura"
import TablePropuesta from "./TablePropuesta/TablePropuesta"

const TablesContainer = () => {

  const [inputConsumoAnual, setInputConsumoAnual] = useState({
    consumo_anual_p1 : 0,
    consumo_anual_p2 : 0,
    consumo_anual_p3 : 0,
    consumo_anual_p4 : 0,
    consumo_anual_p5 : 0,
    consumo_anual_p6 : 0
  });
 
  const [inputConsumo, setInputConsumo] = useState({
    consumo_factura_p1 : 0,
    consumo_factura_p2 : 0,
    consumo_factura_p3 : 0,
    consumo_factura_p4 : 0,
    consumo_factura_p5 : 0,
    consumo_factura_p6 : 0
  });
  //ESTADO PATA METER EL PRECIO ANUAL DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA
  const [inputPrecioAnual, setImputPrecioAnual] = useState({
    precio_anual_p1 : 0,
    precio_anual_p2 : 0,
    precio_anual_p3 : 0,
    precio_anual_p4 : 0,
    precio_anual_p5 : 0,
    precio_anual_p6 : 0
  });

  const [inputPrecioMes, setImputPrecioMes] = useState({
    precio_factura_p1 : 0,
    precio_factura_p2 : 0,
    precio_factura_p3 : 0,
    precio_factura_p4 : 0,
    precio_factura_p5 : 0,
    precio_factura_p6 : 0
  });


  const [inputPotenciaContratada, setPotenciaContratada] = useState({
    potencia_contratada_p1: 0,
    potencia_contratada_p2: 0,
    potencia_contratada_p3: 0,
    potencia_contratada_p4: 0,
    potencia_contratada_p5: 0,
    potencia_contratada_p6: 0,
  });
  
  const [inputPotenciaFacturada, setPotenciaFacturada] = useState({
    potencia_facturada_p1 : 0,
    potencia_facturada_p2 : 0,
    potencia_facturada_p3 : 0,
    potencia_facturada_p4 : 0,
    potencia_facturada_p5 : 0,
    potencia_facturada_p6 : 0
    
  });
  
  const [inputPrecioPotencia, setPrecioPotencia] = useState({
    precio_potencia_p1 : 0,
    precio_potencia_p2 : 0,
    precio_potencia_p3 : 0,
    precio_potencia_p4 : 0,
    precio_potencia_p5 : 0,
    precio_potencia_p6 : 0
    
  });
  


  return (
    <>
      <TableInputFactura
        inputConsumoAnual={inputConsumoAnual} 
        setInputConsumoAnual={setInputConsumoAnual}
        inputConsumo={inputConsumo}
        setInputConsumo={setInputConsumo}
        inputPrecioAnual={inputPrecioAnual}
        setImputPrecioAnual={setImputPrecioAnual}
        inputPrecioMes={inputPrecioMes}
        setImputPrecioMes={setImputPrecioMes}
        inputPotenciaContratada={inputPotenciaContratada}
        setPotenciaContratada={setPotenciaContratada}
        inputPotenciaFacturada={inputPotenciaFacturada}
        setPotenciaFacturada={setPotenciaFacturada}
        inputPrecioPotencia={inputPrecioPotencia}
        setPrecioPotencia={setPrecioPotencia}     
      />
      <TablePropuesta
        inputConsumoAnual={inputConsumoAnual} 
        inputConsumo={inputConsumo}
        inputPotenciaContratada={inputPotenciaContratada}
        inputPotenciaFacturada={inputPotenciaFacturada}
      />
      
    </>
  );
};

export default TablesContainer;
