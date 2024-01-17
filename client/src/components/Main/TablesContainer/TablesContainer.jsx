import React from "react";
import { useState } from 'react'
import TableInputFactura from "./TableInputFactura/TableInputFactura"
import SelectPropuesta from "./SelectPropuesta/SelectPropuesta";
import TablePropuesta from "./TablePropuesta/TablePropuesta";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";
import Nav from "../Nav/Nav";


import './TablesContainer.css'


const TablesContainer = () => {


  //_________________________ ESTADOS ENERGIA ______________________________________


  //ESTADO PATA METER EL CONSUMO ANUAL (INPUTS EN TABLA, DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA)
  const [inputConsumoAnual, setInputConsumoAnual] = useState({
    consumo_anual_p1: 0,
    consumo_anual_p2: 0,
    consumo_anual_p3: 0,
    consumo_anual_p4: 0,
    consumo_anual_p5: 0,
    consumo_anual_p6: 0
  });

  const [inputConsumo, setInputConsumo] = useState({
    consumo_factura_p1: 0,
    consumo_factura_p2: 0,
    consumo_factura_p3: 0,
    consumo_factura_p4: 0,
    consumo_factura_p5: 0,
    consumo_factura_p6: 0
  });
  //ESTADO PATA METER EL PRECIO ANUAL (INPUTS EN TABLA, DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA)
  const [inputPrecioAnual, setImputPrecioAnual] = useState({
    precio_anual_p1: 0.281599,
    precio_anual_p2: 0.268394,
    precio_anual_p3: 0.263138,
    precio_anual_p4: 0.242581,
    precio_anual_p5: 0.212685,
    precio_anual_p6: 0.234854
  });


  const [inputPrecioMes, setImputPrecioMes] = useState({
    precio_factura_p1: 0,
    precio_factura_p2: 0,
    precio_factura_p3: 0,
    precio_factura_p4: 0,
    precio_factura_p5: 0,
    precio_factura_p6: 0
  });


  //_________________________ ESTADOS POTENCIA ______________________________________

  const [inputPotenciaContratada, setPotenciaContratada] = useState({
    potencia_contratada_p1: 0,
    potencia_contratada_p2: 0,
    potencia_contratada_p3: 0,
    potencia_contratada_p4: 0,
    potencia_contratada_p5: 0,
    potencia_contratada_p6: 0,
  });

  const [inputPotenciaFacturada, setPotenciaFacturada] = useState({
    potencia_facturada_p1: 0,
    potencia_facturada_p2: 0,
    potencia_facturada_p3: 0,
    potencia_facturada_p4: 0,
    potencia_facturada_p5: 0,
    potencia_facturada_p6: 0

  });

  const [inputPrecioPotencia, setPrecioPotencia] = useState({
    precio_potencia_p1: 0,
    precio_potencia_p2: 0,
    precio_potencia_p3: 0,
    precio_potencia_p4: 0,
    precio_potencia_p5: 0,
    precio_potencia_p6: 0

  });


  //__________________ ESTADOS OTROS CAMPOS DE LA FACTURA/PROPUESTA______________________________

  const [restoDeCampos, setRestoDeCampos] = useState({
    dias_facturacion: 31,
    energia_reactiva: 0,
    impuesto_electrico: 0,
    alquiler_equipo: 0,
    iva: 5
  }

  );
  const [valorOtrosMes, setValorOtrosMes] = useState(0);
  const [valorOtrosAnual, setValorOtrosAnual] = useState(0);
  const [importeTotalFactura, setImporteTotalFactura] = useState(0);
  const [importeTotalAnual, setImporteTotalAnual] = useState(0);

  const [importeTotalFactura_prop, setImporteTotalFactura_prop] = useState(0);
  const [importeTotalAnual_prop, setImporteTotalAnual_prop] = useState(0);

  //__________________ ESTADOS DATOS FETCH PRECIOS________________

  const [preciosPropuesta, setPreciosPropuesta] = useState({
    p1_e: 0,
    p2_e: 0,
    p3_e: 0,
    p4_e: 0,
    p5_e: 0,
    p6_e: 0,

    p1_p: 0,
    p2_p: 0,
    p3_p: 0,
    p4_p: 0,
    p5_p: 0,
    p6_p: 0,
  })


  // ____________________ OTROS ESTADOS___________________
  const [mostrarComponentes, setMostrarComponentes] = useState({
    componente3: false,
    componente4: false,
    componente5: false,

  });

  const handleMostrarComponentes = () => {
    setMostrarComponentes({
      componente3: true,
      componente4: true,
      componente5: true
    });
  };

  const  [inputHome, setInputHome] = useState();

  return (
    <>
      <Nav />
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
        valorOtrosMes={valorOtrosMes}
        setValorOtrosMes={setValorOtrosMes}
        valorOtrosAnual={valorOtrosAnual}
        setValorOtrosAnual={setValorOtrosAnual}
        restoDeCampos={restoDeCampos}
        setRestoDeCampos={setRestoDeCampos}
        importeTotalFactura={importeTotalFactura}
        setImporteTotalFactura={setImporteTotalFactura}

        showTable2={handleMostrarComponentes}

        importeTotalAnual={importeTotalAnual}
        setImporteTotalAnual={setImporteTotalAnual}
        setInputHome={setInputHome}


      />
      {mostrarComponentes.componente3 && <SelectPropuesta
        importeTotalFactura={importeTotalFactura}
        importeTotalAnual={importeTotalAnual}
        setPreciosPropuesta={setPreciosPropuesta}
        importeTotalFactura_prop={importeTotalFactura_prop}
        importeTotalAnual_prop={importeTotalAnual_prop}
      />}


      {mostrarComponentes.componente4 && <TablePropuesta
        inputConsumoAnual={inputConsumoAnual}
        inputConsumo={inputConsumo}
        inputPotenciaContratada={inputPotenciaContratada}
        inputPotenciaFacturada={inputPotenciaFacturada}
        valorOtrosMes={valorOtrosMes}
        valorOtrosAnual={valorOtrosAnual}
        restoDeCampos={restoDeCampos}
        preciosPropuesta={preciosPropuesta}
        importeTotalFactura_prop={importeTotalFactura_prop}
        setImporteTotalFactura_prop={setImporteTotalFactura_prop}
        importeTotalAnual_prop={importeTotalAnual_prop}
        setImporteTotalAnual_prop={setImporteTotalAnual_prop}
      />}


      {mostrarComponentes.componente5 && <section id="download_section">
        <PDFDownloadLink document={<Pdf
          inputConsumoAnual={inputConsumoAnual}
          inputConsumo={inputConsumo} 
          inputPrecioAnual={inputPrecioAnual}
          inputPrecioMes={inputPrecioMes}
          inputPotenciaContratada={inputPotenciaContratada}
          inputPotenciaFacturada={inputPotenciaFacturada}
          inputPrecioPotencia={inputPrecioPotencia}
          valorOtrosMes={valorOtrosMes}
          valorOtrosAnual={valorOtrosAnual}
          restoDeCampos={restoDeCampos}
          importeTotalFactura={importeTotalFactura} 
          importeTotalAnual={importeTotalAnual}
          importeTotalFactura_prop={importeTotalFactura_prop}
          importeTotalAnual_prop={importeTotalAnual_prop}
          preciosPropuesta={preciosPropuesta}
          inputHome={inputHome}
        
        />} fileName="Propuesta Several">
          <button id="download_button">
            Descargar PDF
          </button>
        </PDFDownloadLink>
      </section>
}
      
    </>
  );
};

export default TablesContainer;
