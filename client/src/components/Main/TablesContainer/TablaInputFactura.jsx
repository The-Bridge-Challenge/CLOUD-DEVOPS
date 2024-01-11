import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [cups, setCups]= useState("");


//_______________________ ESTADOS ENERGIA __________________________________



  //ESTADO PATA METER EL CONSUMO ANUAL DE FORMA MANUAL SI NO HAY WEB SCRAPING DE CANDELA
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
  
  const [descuentoActual, setDescuentoActual] = useState(0);

  const [precioDescuentoActual, setPrecioDescuentoActual] = useState({
    p1 : 0,
    p2 : 0,
    p3 : 0,
    p4 : 0,
    p5 : 0,
    p6 : 0,
  });

  const [totalPagoFactura, setTotalPagoFactura] = useState({
    p1 : 0,
    p2 : 0,
    p3 : 0,
    p4 : 0,
    p5 : 0,
    p6 : 0,
  });

  const [totalPagoAnual, setTotalPagoAnual] = useState({
    p1 : 0,
    p2 : 0,
    p3 : 0,
    p4 : 0,
    p5 : 0,
    p6 : 0,
  });

//_______________________ ESTADOS POTENCIA __________________________________

const [inputPotenciaContratada, setPotenciaContratada] = useState({
  potencia_contratada_p1: 0,
  potencia_contratada_p2: 0,
  potencia_contratada_p3: 0,
  potencia_contratada_p4: 0,
  potencia_contratada_p5: 0,
  potencia_contratada_p6: 0,
})

const [inputPotenciaFacturada, setPotenciaFacturada] = useState({
  
})

//_______________________ FUNCIONES ENERGIA __________________________________

  

  const handleInputConsumo = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setInputConsumo({
      ...inputConsumo,
      [name]: value*1,
    }
    
    );
  };

  const handleInputConsumoAnual= (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setInputConsumoAnual({
      ...inputConsumoAnual,
      [name]: value*1,
    }
    
    );
  };

  const handleInputPrecioMes = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setImputPrecioMes({
      ...inputPrecioMes,
      [name]: value*1,
    });
  };

  const handleInputPrecioAnual = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setImputPrecioAnual({
      ...inputPrecioAnual,
      [name]: value*1,
    });
  };



  const handleInputDescuentoActual = (e) => {
    const valor  = e.target.value;

    // Actualizar el estado con el nuevo valor del input
    setDescuentoActual(valor/100);
  };


// SUMATORIOS DE TODOS LOS PERIODOS 

  useEffect(() => {
    setPrecioDescuentoActual({
      p1 : inputPrecioMes.precio_factura_p1 - inputPrecioMes.precio_factura_p1 * descuentoActual,
      p2 : inputPrecioMes.precio_factura_p2 - inputPrecioMes.precio_factura_p2 * descuentoActual,
      p3 : inputPrecioMes.precio_factura_p3 - inputPrecioMes.precio_factura_p3 * descuentoActual,
      p4 : inputPrecioMes.precio_factura_p4 - inputPrecioMes.precio_factura_p4 * descuentoActual,
      p5 : inputPrecioMes.precio_factura_p5 - inputPrecioMes.precio_factura_p5 * descuentoActual,
      p6 : inputPrecioMes.precio_factura_p6 - inputPrecioMes.precio_factura_p6 * descuentoActual,
    })
  }, [inputPrecioMes, descuentoActual]);

  useEffect(() => {
    setTotalPagoFactura({
      p1: inputConsumo.consumo_factura_p1 * precioDescuentoActual.p1,
      p2: inputConsumo.consumo_factura_p2 * precioDescuentoActual.p2,
      p3: inputConsumo.consumo_factura_p3 * precioDescuentoActual.p3,
      p4: inputConsumo.consumo_factura_p4 * precioDescuentoActual.p4,
      p5: inputConsumo.consumo_factura_p5 * precioDescuentoActual.p5,
      p6: inputConsumo.consumo_factura_p6 * precioDescuentoActual.p6,
    })

  }, [inputConsumo, precioDescuentoActual]);

  useEffect(() => {
    setTotalPagoAnual({
      p1: inputConsumoAnual.consumo_anual_p1 * (inputPrecioAnual.precio_anual_p1 - (inputPrecioAnual.precio_anual_p1*descuentoActual)),
      p2: inputConsumoAnual.consumo_anual_p2 * (inputPrecioAnual.precio_anual_p2 - (inputPrecioAnual.precio_anual_p2*descuentoActual)),
      p3: inputConsumoAnual.consumo_anual_p3 * (inputPrecioAnual.precio_anual_p3 - (inputPrecioAnual.precio_anual_p3*descuentoActual)),
      p4: inputConsumoAnual.consumo_anual_p4 * (inputPrecioAnual.precio_anual_p4 - (inputPrecioAnual.precio_anual_p4*descuentoActual)),
      p5: inputConsumoAnual.consumo_anual_p5 * (inputPrecioAnual.precio_anual_p5 - (inputPrecioAnual.precio_anual_p5*descuentoActual)),
      p6: inputConsumoAnual.consumo_anual_p6 * (inputPrecioAnual.precio_anual_p6 - (inputPrecioAnual.precio_anual_p6*descuentoActual)),
    })

  }, [inputConsumoAnual,  inputPrecioAnual, descuentoActual]);

  return (
    <>
      <section>

      </section>
      <section>
        <table border="1">
          <thead>
          {/* INPUTS ENERGIA */}
            <tr>
              <th>FRANJA</th>
              <th>CONSUMO ANUAL (kWh)</th>
              <th>CONSUMO FACTURA ACTUAL (kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)</th>
              <th>DESCUENTO(%)</th>
              <th>PRECIO CON DESCUENTO </th>
              <th>TOTAL PAGO EN FACTURA</th>
              <th>TOTAL PAGO ANUAL</th>

          {/* INPUTS POTENCIA */}

              <th>POTENCIA CONTRATADA (kW)</th>
              <th>POTENCIA FACTURADA (kW)</th>
              <th>PRECIOS POTENCIA (€/kW/día)</th>
              <th>DESCUENTO (%)</th>
              <th>PRECIO CON DESCUENTO</th>
              <th>TOTAL PAGO EN FACTURA	</th>
              <th>TOTAL PAGO ANUAL</th>
          
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td><input type="number" name="consumo_anual_p1" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p1" step="any" 
        onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p1" step="any" onChange={handleInputPrecioAnual}></input></td>
              <td><input type="number" name="precio_factura_p1" step="any" value={inputPrecioMes.p1}
        onChange={handleInputPrecioMes}></input></td>
              <td><input type="number" name="descuento_p1" step="any" onChange={handleInputDescuentoActual}></input></td>
              <td>{precioDescuentoActual.p1}</td>
              <td>{totalPagoFactura.p1} </td>
              <td>{totalPagoAnual.p1}</td>

              <td><input type="number" name="potencia_contratada_p1" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="potencia_facturada_p1" step="any" 
        onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_potencia_p1" step="any" onChange={handleInputPrecioAnual}></input></td>
              <td><input type="number" name="descuento_potencia" step="any" value={inputPrecioMes.p1}
        onChange={handleInputPrecioMes}></input></td>
              <td><input type="number" name="precio_potencia_descuento_p1" step="any" onChange={handleInputDescuentoActual}></input></td>
              <td>{precioPotenciaActual.p1}</td>
              <td>{totalPagoPotenciaFactura.p1} </td>
              <td>{totalPagoPotenciaAnual.p1}</td>
            </tr>
            <tr>
              <td>P2</td>
              <td><input type="number" name="consumo_anual_p2" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p2" step="any" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p2" step="any" onChange={handleInputPrecioAnual}></input></td>
              <td><input type="number" name="precio_factura_p2" step="any"  onChange={handleInputPrecioMes}></input></td>
              <td></td>
              <td>{precioDescuentoActual.p2}</td>
              <td>{totalPagoFactura.p2}</td>
              <td>{totalPagoAnual.p2}</td>
            </tr>
            <tr>
              <td>P3</td>
              <td><input type="number" name="consumo_anual_p3" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p3" step="any" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_anual_p3" step="any" onChange={handleInputPrecioAnual}></input></td>
              <td><input type="number" name="precio_factura_p3" step="any" onChange={handleInputPrecioMes}></input></td>
              <td></td>
              <td>{precioDescuentoActual.p3}</td>
              <td>{totalPagoFactura.p3}</td>
              <td>{totalPagoAnual.p3}</td>
            </tr>
            <tr>
              <td>P4</td>
              <td><input type="number" name="consumo_anual_p4" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p4" step="any" onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_medio_anual_p4" step="any"></input></td>
              <td><input type="number" name="precio_factura_p4" step="any"  value={inputPrecioMes.p4}
        onChange={handleInputPrecioMes}></input></td>
              <td></td>
              <td>{precioDescuentoActual.p4}</td>
              <td>{totalPagoFactura.p4}</td>
              <td>{totalPagoAnual.p4}</td>
            </tr>
            <tr>
              <td>P5</td>
              <td><input type="number" name="consumo_anual_p5" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p5" step="any" value={inputConsumo.p5}
        onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_medio_anual_p5" step="any"></input></td>
              <td><input type="number" name="precio_factura_p5" step="any"  value={inputPrecioMes.p5}
        onChange={handleInputPrecioMes}></input></td>
              <td></td>
              <td>{precioDescuentoActual.p5}</td>
              <td>{totalPagoFactura.p5}</td>
              <td>{totalPagoAnual.p5}</td>
            </tr>
            <tr>
              <td>P6</td>
              <td><input type="number" name="consumo_anual_p6" step="any" onChange={handleInputConsumoAnual}></input></td>
              <td><input type="number" name="consumo_factura_p6" step="any" value={inputConsumo.p6}
        onChange={handleInputConsumo}></input></td>
              <td><input type="number" name="precio_medio_anual_p6" step="any"></input></td>
              <td><input type="number" name="precio_factura_p6" step="any"  value={inputPrecioMes.p6}
        onChange={handleInputPrecioMes}></input></td>
              <td></td>
              <td>{precioDescuentoActual.p6}</td>
              <td>{totalPagoFactura.p6}</td>
              <td>{totalPagoAnual.p6}</td>
            </tr>
            <tr>
            <td>TOTAL</td>
              <td>{inputConsumoAnual.consumo_anual_p1+inputConsumoAnual.consumo_anual_p2+inputConsumoAnual.consumo_anual_p3+inputConsumoAnual.consumo_anual_p4+inputConsumoAnual.consumo_anual_p5+inputConsumoAnual.consumo_anual_p6}</td>
              <td>{inputConsumo.consumo_factura_p1 + inputConsumo.consumo_factura_p2 + inputConsumo.consumo_factura_p3+ inputConsumo.consumo_factura_p4+ inputConsumo.consumo_factura_p5+ inputConsumo.consumo_factura_p6}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{totalPagoFactura.p1+totalPagoFactura.p2+totalPagoFactura.p3+totalPagoFactura.p4+totalPagoFactura.p5+totalPagoFactura.p6}</td>
              <td>{totalPagoAnual.p1+totalPagoAnual.p2+totalPagoAnual.p3+totalPagoAnual.p4+totalPagoAnual.p5+totalPagoAnual.p6}</td>
            </tr>
           
          </tbody>
        </table>
      </section>
   
    </>
  )
}

export default App
