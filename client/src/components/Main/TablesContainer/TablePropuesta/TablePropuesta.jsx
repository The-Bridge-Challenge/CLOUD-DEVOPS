import React from "react";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../Pdf";
import "./TablePropuesta.css";

const TablePropuesta = ({
  inputConsumoAnual,
  inputConsumo,
  inputPotenciaContratada,
  inputPotenciaFacturada,
  valorOtrosMes,
  valorOtrosAnual,
  restoDeCampos,
  preciosPropuesta,
  importeTotalFactura_prop,
  setImporteTotalFactura_prop,
  importeTotalAnual_prop,
  setImporteTotalAnual_prop,
}) => {
  //_______________________ ESTADOS ENERGIA __________________________________

  const [inputPrecioAnual_prop, setImputPrecioAnual_prop] = useState({
    precio_anual_p1: 0.281599,
    precio_anual_p2: 0.268394,
    precio_anual_p3: 0.263138,
    precio_anual_p4: 0.242581,
    precio_anual_p5: 0.212685,
    precio_anual_p6: 0.234854,
  });

  const [descuento_prop, setDescuento_prop] = useState(0);

  const [precioDescuento_prop, setPrecioDescuento_prop] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  const [totalPagoFactura_prop, setTotalPagoFactura_prop] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  const [totalPagoAnual_prop, setTotalPagoAnual_prop] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
  });

  //_______________________ ESTADOS  POTENCIA __________________________________

  const [inputPotenciaContratada_prop, setPotenciaContratada_prop] = useState({
    potencia_contratada_p1: 0,
    potencia_contratada_p2: 0,
    potencia_contratada_p3: 0,
    potencia_contratada_p4: 0,
    potencia_contratada_p5: 0,
    potencia_contratada_p6: 0,
  });

  const [precioPotenciaDescuento_prop, setPrecioPotenciaDescuento_prop] =
    useState({
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
      p6: 0,
    });

  const [totalPagoFacturaPotencia_prop, setTotalPagoFacturaPotencia_prop] =
    useState({
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
      p6: 0,
    });

  const [totalPagoAnualPotencia_prop, setTotalPagoAnualPotencia_prop] =
    useState({
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
      p6: 0,
    });

  //_______________________ ESTADOS  PARA OTROS CAMPOS DE LA FACTURA ______________

  const [impuestoElectrico_prop, setImpuestoElectrico_prop] = useState(0);

  //_______________________ FUNCIONES ENERGIA __________________________________

  const handleInputPrecioAnual_prop = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setImputPrecioAnual_prop({
      ...inputPrecioAnual_prop,
      [name]: value * 1,
    });
  };

  const handleInputDescuento_prop = (e) => {
    const valor = e.target.value;

    // Actualizar el estado con el nuevo valor del input
    setDescuento_prop(valor * 1);
  };

  //_______________________ FUNCIONES POTENCIA __________________________________

  const handleInputPotenciaContratada_prop = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setPotenciaContratada_prop({
      ...inputPotenciaContratada_prop,
      [name]: value * 1,
    });
  };

  useEffect(() => {
    setPotenciaContratada_prop({
      potencia_contratada_p1: inputPotenciaContratada.potencia_contratada_p1,
      potencia_contratada_p2: inputPotenciaContratada.potencia_contratada_p2,
      potencia_contratada_p3: inputPotenciaContratada.potencia_contratada_p3,
      potencia_contratada_p4: inputPotenciaContratada.potencia_contratada_p4,
      potencia_contratada_p5: inputPotenciaContratada.potencia_contratada_p5,
      potencia_contratada_p6: inputPotenciaContratada.potencia_contratada_p6,
    });
  }, [inputPotenciaContratada]);

  //_______________________ FUNCIONES OTROS CAMPOS DE LA FACTURA __________________________________
  useEffect(() => {
    setImporteTotalFactura_prop(
      (totalPagoFactura_prop.p1 +
        totalPagoFactura_prop.p2 +
        totalPagoFactura_prop.p3 +
        totalPagoFactura_prop.p4 +
        totalPagoFactura_prop.p5 +
        totalPagoFactura_prop.p6 +
        totalPagoFacturaPotencia_prop.p1 +
        totalPagoFacturaPotencia_prop.p2 +
        totalPagoFacturaPotencia_prop.p3 +
        totalPagoFacturaPotencia_prop.p4 +
        totalPagoFacturaPotencia_prop.p5 +
        totalPagoFacturaPotencia_prop.p6 +
        restoDeCampos.energia_reactiva +
        impuestoElectrico_prop +
        restoDeCampos.alquiler_equipo +
        valorOtrosMes
      ) * (1 + (restoDeCampos.iva / 100)).toFixed(2)*1
    )
  }, [totalPagoFactura_prop, totalPagoFacturaPotencia_prop, valorOtrosMes, restoDeCampos, impuestoElectrico_prop]);

  useEffect(() => {
    setImporteTotalAnual_prop(
      (((totalPagoAnual_prop.p1 +
        totalPagoAnual_prop.p2 +
        totalPagoAnual_prop.p3 +
        totalPagoAnual_prop.p4 +
        totalPagoAnual_prop.p5 +
        totalPagoAnual_prop.p6 +
        totalPagoAnualPotencia_prop.p1 +
        totalPagoAnualPotencia_prop.p2 +
        totalPagoAnualPotencia_prop.p3 +
        totalPagoAnualPotencia_prop.p4 +
        totalPagoAnualPotencia_prop.p5 +
        totalPagoAnualPotencia_prop.p6) *
        1.005 +
        (restoDeCampos.alquiler_equipo / restoDeCampos.dias_facturacion) * 365 +
        valorOtrosAnual) *
      (1 + (restoDeCampos.iva / 100))).toFixed(2)*1
    )
  }, [totalPagoAnual_prop, totalPagoAnualPotencia_prop, restoDeCampos, valorOtrosAnual]);

  // SUMATORIOS

  //__________ SUMATORIOS ENERGIA___________________

  useEffect(() => {
    setPrecioDescuento_prop({
      p1: (preciosPropuesta.p1_e - preciosPropuesta.p1_e * (descuento_prop / 100)).toFixed(6)*1,
      p2: (preciosPropuesta.p2_e - preciosPropuesta.p2_e * (descuento_prop / 100)).toFixed(6)*1,
      p3: (preciosPropuesta.p3_e - preciosPropuesta.p3_e * (descuento_prop / 100)).toFixed(6)*1,
      p4: (preciosPropuesta.p4_e - preciosPropuesta.p4_e * (descuento_prop / 100)).toFixed(6)*1,
      p5: (preciosPropuesta.p5_e - preciosPropuesta.p5_e * (descuento_prop / 100)).toFixed(6)*1,
      p6: (preciosPropuesta.p6_e - preciosPropuesta.p6_e * (descuento_prop / 100)).toFixed(6)*1,
    })
  }, [preciosPropuesta, descuento_prop]);

  useEffect(() => {
    setTotalPagoFactura_prop({
      p1: (inputConsumo.consumo_factura_p1 * precioDescuento_prop.p1).toFixed(2)*1,
      p2: (inputConsumo.consumo_factura_p2 * precioDescuento_prop.p2).toFixed(2)*1,
      p3: (inputConsumo.consumo_factura_p3 * precioDescuento_prop.p3).toFixed(2)*1,
      p4: (inputConsumo.consumo_factura_p4 * precioDescuento_prop.p4).toFixed(2)*1,
      p5: (inputConsumo.consumo_factura_p5 * precioDescuento_prop.p5).toFixed(2)*1,
      p6: (inputConsumo.consumo_factura_p6 * precioDescuento_prop.p6).toFixed(2)*1,
    })

  }, [inputConsumo, precioDescuento_prop]);

  useEffect(() => {
    setTotalPagoAnual_prop({
      p1: (inputConsumoAnual.consumo_anual_p1 * (inputPrecioAnual_prop.precio_anual_p1 - (inputPrecioAnual_prop.precio_anual_p1 * (descuento_prop / 100)))).toFixed(2)*1,
      p2: (inputConsumoAnual.consumo_anual_p2 * (inputPrecioAnual_prop.precio_anual_p2 - (inputPrecioAnual_prop.precio_anual_p2 * (descuento_prop / 100)))).toFixed(2)*1,
      p3: (inputConsumoAnual.consumo_anual_p3 * (inputPrecioAnual_prop.precio_anual_p3 - (inputPrecioAnual_prop.precio_anual_p3 * (descuento_prop / 100)))).toFixed(2)*1,
      p4: (inputConsumoAnual.consumo_anual_p4 * (inputPrecioAnual_prop.precio_anual_p4 - (inputPrecioAnual_prop.precio_anual_p4 * (descuento_prop / 100)))).toFixed(2)*1,
      p5: (inputConsumoAnual.consumo_anual_p5 * (inputPrecioAnual_prop.precio_anual_p5 - (inputPrecioAnual_prop.precio_anual_p5 * (descuento_prop / 100)))).toFixed(2)*1,
      p6: (inputConsumoAnual.consumo_anual_p6 * (inputPrecioAnual_prop.precio_anual_p6 - (inputPrecioAnual_prop.precio_anual_p6 * (descuento_prop / 100)))).toFixed(2)*1,
    })

  }, [inputConsumoAnual, inputPrecioAnual_prop, descuento_prop]);

  //__________ SUMATORIOS POTENCIA___________________

  useEffect(() => {
    setPrecioPotenciaDescuento_prop({
      p1: (preciosPropuesta.p1_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
      p2: (preciosPropuesta.p2_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
      p3: (preciosPropuesta.p3_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
      p4: (preciosPropuesta.p4_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
      p5: (preciosPropuesta.p5_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
      p6: (preciosPropuesta.p6_p * (1 - (descuento_prop / 100))).toFixed(6)*1,
    })
  }, [preciosPropuesta, descuento_prop]);

  useEffect(() => {
    setTotalPagoFacturaPotencia_prop({
      p1: (inputPotenciaContratada_prop.potencia_contratada_p1 * precioPotenciaDescuento_prop.p1 * restoDeCampos.dias_facturacion).toFixed(2)*1,
      p2: (inputPotenciaContratada_prop.potencia_contratada_p2 * precioPotenciaDescuento_prop.p2 * restoDeCampos.dias_facturacion).toFixed(2)*1,
      p3: (inputPotenciaContratada_prop.potencia_contratada_p3 * precioPotenciaDescuento_prop.p3 * restoDeCampos.dias_facturacion).toFixed(2)*1,
      p4: (inputPotenciaContratada_prop.potencia_contratada_p4 * precioPotenciaDescuento_prop.p4 * restoDeCampos.dias_facturacion).toFixed(2)*1,
      p5: (inputPotenciaContratada_prop.potencia_contratada_p5 * precioPotenciaDescuento_prop.p5 * restoDeCampos.dias_facturacion).toFixed(2)*1,
      p6: (inputPotenciaContratada_prop.potencia_contratada_p6 * precioPotenciaDescuento_prop.p6 * restoDeCampos.dias_facturacion).toFixed(2)*1
    })
  }, [inputPotenciaContratada_prop, precioPotenciaDescuento_prop, restoDeCampos.dias_facturacion]);

  useEffect(() => {
    setTotalPagoAnualPotencia_prop({
      p1: (inputPotenciaContratada_prop.potencia_contratada_p1 * precioPotenciaDescuento_prop.p1 * 365).toFixed(2)*1,
      p2: (inputPotenciaContratada_prop.potencia_contratada_p2 * precioPotenciaDescuento_prop.p2 * 365).toFixed(2)*1,
      p3: (inputPotenciaContratada_prop.potencia_contratada_p3 * precioPotenciaDescuento_prop.p3 * 365).toFixed(2)*1,
      p4: (inputPotenciaContratada_prop.potencia_contratada_p4 * precioPotenciaDescuento_prop.p4 * 365).toFixed(2)*1,
      p5: (inputPotenciaContratada_prop.potencia_contratada_p5 * precioPotenciaDescuento_prop.p5 * 365).toFixed(2)*1,
      p6: (inputPotenciaContratada_prop.potencia_contratada_p6 * precioPotenciaDescuento_prop.p6 * 365).toFixed(2)*1
    })
  }, [inputPotenciaContratada_prop, precioPotenciaDescuento_prop]);

  //________________________ SUMATORIOS OTROS CAMPOS DE LA FACTURA______________________________
  useEffect(() => {
    setImpuestoElectrico_prop(
      (totalPagoFactura_prop.p1 +
        totalPagoFactura_prop.p2 +
        totalPagoFactura_prop.p3 +
        totalPagoFactura_prop.p4 +
        totalPagoFactura_prop.p5 +
        totalPagoFactura_prop.p6 +
        totalPagoFacturaPotencia_prop.p1 +
        totalPagoFacturaPotencia_prop.p2 +
        totalPagoFacturaPotencia_prop.p3 +
        totalPagoFacturaPotencia_prop.p4 +
        totalPagoFacturaPotencia_prop.p5 +
        totalPagoFacturaPotencia_prop.p6) *
        0.005
    );
  }, [totalPagoFactura_prop, totalPagoFacturaPotencia_prop]);

  return (
    <>
      <section>
        <table id="second_table">
          <thead>
            <tr>
              <th></th>
              <th className="article_title" colSpan={8}>
                Energía
              </th>
              <th className="article_title" colSpan={7}>
                Potencia
              </th>
            </tr>

            <tr>
              <th className="tr_inputs">FRANJA</th>
              <th className="tr_inputs">CONSUMO ANUAL (kWh)</th>
              <th className="tr_inputs">CONSUMO FACTURA ACTUAL (kWh)</th>
              <th className="tr_inputs">
                PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)
              </th>
              <th className="tr_inputs">
                PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)
              </th>
              <th className="tr_inputs">DESCUENTO(%)</th>
              <th className="tr_inputs">PRECIO CON DESCUENTO </th>
              <th className="tr_inputs">TOTAL PAGO EN FACTURA</th>
              <th className="tr_inputs">TOTAL PAGO ANUAL</th>

              <th className="tr_inputs">POTENCIA CONTRATADA (kW)</th>
              <th className="tr_inputs">POTENCIA FACTURADA (kW)</th>
              <th className="tr_inputs">PRECIOS POTENCIA (€/kW/día)</th>
              <th className="tr_inputs">DESCUENTO (%)</th>
              <th className="tr_inputs">PRECIO CON DESCUENTO</th>
              <th className="tr_inputs">TOTAL PAGO EN FACTURA </th>
              <th className="tr_inputs">TOTAL PAGO ANUAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td>{inputConsumoAnual.consumo_anual_p1}</td>
              <td>{inputConsumo.consumo_factura_p1}</td>
              <td>
                <input
                  type="number"
                  name="precio_anual_p1"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p1}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td> {preciosPropuesta.p1_e} €</td>
              <td className="input_descuento">
                <input
                  type="number"
                  name="descuento_prop"
                  step="any"
                  min="0"
                  placeholder={descuento_prop}
                  onChange={handleInputDescuento_prop}
                ></input>
              </td>
              <td>{precioDescuento_prop.p1} €</td>
              <td>{totalPagoFactura_prop.p1} €</td>
              <td>{totalPagoAnual_prop.p1} €</td>

              <td>
                <input
                  type="number"
                  name="potencia_contratada_p1"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p1
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td>{inputPotenciaContratada_prop.potencia_contratada_p1}</td>
              <td>{preciosPropuesta.p1_p} €</td>
              <td className="input_descuento">
                <input
                  type="number"
                  name="descuento_prop"
                  step="any"
                  min="0"
                  placeholder={descuento_prop}
                  onChange={handleInputDescuento_prop}
                ></input>
              </td>
              <td>{precioPotenciaDescuento_prop.p1} €</td>
              <td>{totalPagoFacturaPotencia_prop.p1} €</td>
              <td>{totalPagoAnualPotencia_prop.p1} €</td>
            </tr>

            <tr>
              <td>P2</td>
              <td>{inputConsumoAnual.consumo_anual_p2}</td>
              <td>{inputConsumo.consumo_factura_p2}</td>
              <td>
                <input
                  type="number"
                  name="precio_anual_p2"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p2}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td>{preciosPropuesta.p2_e} €</td>
              <td className="input_descuento"></td>
              <td>{precioDescuento_prop.p2} €</td>
              <td>{totalPagoFactura_prop.p2} €</td>
              <td>{totalPagoAnual_prop.p2} €</td>

              <td>
                <input
                  type="number"
                  name="potencia_contratada_p2"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p2
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td>{inputPotenciaContratada_prop.potencia_contratada_p2}</td>
              <td>{preciosPropuesta.p2_p} €</td>
              <td className="input_descuento"></td>
              <td>{precioPotenciaDescuento_prop.p2} €</td>
              <td>{totalPagoFacturaPotencia_prop.p2} €</td>
              <td>{totalPagoAnualPotencia_prop.p2} €</td>
            </tr>

            <tr>
              <td>P3</td>
              <td>{inputConsumoAnual.consumo_anual_p3}</td>
              <td>{inputConsumo.consumo_factura_p3}</td>
              <td>
                <input
                  type="number"
                  name="precio_anual_p3"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p3}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td>{preciosPropuesta.p3_e} €</td>
              <td className="input_descuento"></td>
              <td>{precioDescuento_prop.p3} €</td>
              <td>{totalPagoFactura_prop.p3} €</td>
              <td>{totalPagoAnual_prop.p3} €</td>

              <td>
                <input
                  type="number"
                  name="potencia_contratada_p3"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p3
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td>{inputPotenciaContratada_prop.potencia_contratada_p3}</td>
              <td>{preciosPropuesta.p3_p} €</td>
              <td className="input_descuento"></td>
              <td>{precioPotenciaDescuento_prop.p3} €</td>
              <td>{totalPagoFacturaPotencia_prop.p3} €</td>
              <td>{totalPagoAnualPotencia_prop.p3} €</td>
            </tr>

            <tr>
              <td>P4</td>
              <td>{inputConsumoAnual.consumo_anual_p4}</td>
              <td>{inputConsumo.consumo_factura_p4}</td>
              <td>
                <input
                  type="number"
                  name="precio_anual_p4"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p4}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td>{preciosPropuesta.p4_e} €</td>
              <td className="input_descuento"></td>
              <td>{precioDescuento_prop.p4} €</td>
              <td>{totalPagoFactura_prop.p4} €</td>
              <td>{totalPagoAnual_prop.p4} €</td>

              <td>
                <input
                  type="number"
                  name="potencia_contratada_p4"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p4
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td>{inputPotenciaContratada_prop.potencia_contratada_p4}</td>
              <td>{preciosPropuesta.p4_p} €</td>
              <td className="input_descuento"></td>
              <td>{precioPotenciaDescuento_prop.p4} €</td>
              <td>{totalPagoFacturaPotencia_prop.p4} €</td>
              <td>{totalPagoAnualPotencia_prop.p4} €</td>
            </tr>

            <tr>
              <td>P5</td>
              <td>{inputConsumoAnual.consumo_anual_p5}</td>
              <td>{inputConsumo.consumo_factura_p5}</td>
              <td>
                <input
                  type="number"
                  name="precio_anual_p5"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p5}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td>{preciosPropuesta.p5_e} €</td>
              <td className="input_descuento"></td>
              <td>{precioDescuento_prop.p5} €</td>
              <td>{totalPagoFactura_prop.p5} €</td>
              <td>{totalPagoAnual_prop.p5} €</td>

              <td>
                <input
                  type="number"
                  name="potencia_contratada_p5"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p5
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td>{inputPotenciaContratada_prop.potencia_contratada_p5}</td>
              <td>{preciosPropuesta.p5_p} €</td>
              <td className="input_descuento"></td>
              <td>{precioPotenciaDescuento_prop.p5} €</td>
              <td>{totalPagoFacturaPotencia_prop.p5} €</td>
              <td>{totalPagoAnualPotencia_prop.p5} €</td>
            </tr>

            <tr>
              <td className="td_radius">p6</td>
              <td className="td_radius">
                {inputConsumoAnual.consumo_anual_p6}
              </td>
              <td className="td_radius">{inputConsumo.consumo_factura_p6}</td>
              <td className="td_radius">
                <input
                  type="number"
                  name="precio_anual_p6"
                  step="any"
                  min="0"
                  placeholder={inputPrecioAnual_prop.precio_anual_p6}
                  onChange={handleInputPrecioAnual_prop}
                ></input>{" "}
                €
              </td>
              <td className="td_radius">{preciosPropuesta.p6_e} €</td>
              <td className="td_radius"></td>
              <td className="td_radius">{precioDescuento_prop.p6} €</td>
              <td className="td_radius">{totalPagoFactura_prop.p6} €</td>
              <td className="td_radius">{totalPagoAnual_prop.p6} €</td>

              <td className="td_radius">
                <input
                  type="number"
                  name="potencia_contratada_p6"
                  step="any"
                  min="0"
                  placeholder={
                    inputPotenciaContratada_prop.potencia_contratada_p6
                  }
                  onChange={handleInputPotenciaContratada_prop}
                ></input>
              </td>
              <td className="td_radius">
                {inputPotenciaContratada_prop.potencia_contratada_p6}
              </td>
              <td className="td_radius">{preciosPropuesta.p6_p} €</td>
              <td className="td_radius"></td>
              <td className="td_radius">{precioPotenciaDescuento_prop.p6} €</td>
              <td className="td_radius">
                {totalPagoFacturaPotencia_prop.p6} €
              </td>
              <td className="td_radius">{totalPagoAnualPotencia_prop.p6} €</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="total_title">TOTAL</td>
              <td className="total_input">
                {inputConsumoAnual.consumo_anual_p1 +
                  inputConsumoAnual.consumo_anual_p2 +
                  inputConsumoAnual.consumo_anual_p3 +
                  inputConsumoAnual.consumo_anual_p4 +
                  inputConsumoAnual.consumo_anual_p5 +
                  inputConsumoAnual.consumo_anual_p6}
              </td>
              <td className="total_input">
                {inputConsumo.consumo_factura_p1 +
                  inputConsumo.consumo_factura_p2 +
                  inputConsumo.consumo_factura_p3 +
                  inputConsumo.consumo_factura_p4 +
                  inputConsumo.consumo_factura_p5 +
                  inputConsumo.consumo_factura_p6}
              </td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="total_input">
                {totalPagoFactura_prop.p1 +
                  totalPagoFactura_prop.p2 +
                  totalPagoFactura_prop.p3 +
                  totalPagoFactura_prop.p4 +
                  totalPagoFactura_prop.p5 +
                  totalPagoFactura_prop.p6}{" "}
                €
              </td>
              <td className="total_input">
                {totalPagoAnual_prop.p1 +
                  totalPagoAnual_prop.p2 +
                  totalPagoAnual_prop.p3 +
                  totalPagoAnual_prop.p4 +
                  totalPagoAnual_prop.p5 +
                  totalPagoAnual_prop.p6}{" "}
                €
              </td>

              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="total_input">
                {totalPagoFacturaPotencia_prop.p1 +
                  totalPagoFacturaPotencia_prop.p2 +
                  totalPagoFacturaPotencia_prop.p3 +
                  totalPagoFacturaPotencia_prop.p4 +
                  totalPagoFacturaPotencia_prop.p5 +
                  totalPagoFacturaPotencia_prop.p6}{" "}
                €
              </td>
              <td className="total_input">
                {totalPagoAnualPotencia_prop.p1 +
                  totalPagoAnualPotencia_prop.p2 +
                  totalPagoAnualPotencia_prop.p3 +
                  totalPagoAnualPotencia_prop.p4 +
                  totalPagoAnualPotencia_prop.p5 +
                  totalPagoAnualPotencia_prop.p6}{" "}
                €
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className="flex_end_section">
        <article>
          <table>
            <tbody>
              <tr>
                <th className="table3_pink">IMPUESTO ELÉCTRICO</th>
                <td className='td_table3'>{(impuestoElectrico_prop).toFixed(2)*1} €</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>
          <table>
            <tbody>
              <tr>
                <th className="table3_pink">OTROS </th>
                <td className='td_table3'>{(valorOtrosMes).toFixed(2)*1} €</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>
          <table>
            <tbody>
              <tr>
                <th className='other_table_total_title'>IMPORTE TOTAL FACTURA</th>
                <td className='td_table3'>{(importeTotalFactura_prop).toFixed(2)*1} €</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className="flex_end_section">
        <article>
          <table>
            <tbody>
              <tr>
                <th className="table3_pink">OTROS ANUAL</th>
                <td className='td_table3'>{(valorOtrosAnual).toFixed(2)*1} €</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>
          <table>
            <tbody>
              <tr>
                <th className='other_table_total_title'>TOTAL ANUAL ESTIMADO</th>
                <td className='td_table3'>{(importeTotalAnual_prop).toFixed(2)*1} €</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

    </>
  );
};

export default TablePropuesta;
