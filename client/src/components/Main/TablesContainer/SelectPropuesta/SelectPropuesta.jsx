import React from 'react';
import { useState, useEffect } from 'react';
import "./SelectPropuesta.css"

const SelectPropuesta = (
  {
    importeTotalFactura,
    importeTotalAnual,
    setPreciosPropuesta,
    importeTotalFactura_prop,
    importeTotalAnual_prop
  }
) => {
  const [mostrarTabla, setMostrarTabla] = useState(true);

  const [productos, setProductos] = useState([]);

  const [fee, setFee] = useState([])

  const [seleccion, setSeleccion] = useState({
    sistema: "",
    tarifa: "",
    cia: "",
    metodo: "",
    producto: "",
    mes: "",
    fee: ""
  })



  const opcionesProductos = {
    ACCIONA: {
      FIJO: {
        productos: [
          'CIERZO', 'LEVANTE', 'LEVANTE+', 'PONIENTE', 'PONIENTE+', 'TRAMONTANA',
          'TRAMONTANA+', 'PROFESIONAL', 'ADI SENCILLA', 'ADI CLARA', 'ECO ADI',
          'PROFESIONAL', 'LOVE PLANA 24H', 'PLANA 24H', 'RESIDENCIAL PROMOCIONAL SVE',
          'ADI CLARA<10KW', 'RESIDENCIAL ESPECIAL'],
      },
      INDEXADO: {
        productos: ['CIERZO', 'LEVANTE', 'LEVANTE+', 'PONIENTE', 'PONIENTE+', 'TRAMONTANA',
          'TRAMONTANA+'],
        fee: ['Cierzo', 'Levante', 'Levante+', 'Poniente', 'Poniente+', 'Tramontana', 'Tramontana+']
      }
    },
    ADI: {
      FIJO: {
        productos: ['PROFESIONAL', 'ADI SENCILLA', 'ADI CLARA', 'ECO ADI', 'LOVE PLANA 24H', 'PLANA 24H', 'RESIDENCIAL PROMOCIONAL SVE', 'ADI CLARA<10KW'
          , 'RESIDENCIAL ESPECIAL']
      }
    },
    AEQ: {
      FIJO: {
        productos: ['ARMONIA', 'EQUILIBRIO', 'SIMETRIA'],
        fee: [1.5, 3, 4, 5, 6, 8, 10, 15, 20, 25, 30]
      },
      INDEXADO: {
        productos: ['ARMONIA', 'EQUILIBRIO', 'SIMETRIA'],
        fee: [1.5, 3, 4, 5, 6, 8, 10, 15, 20, 25, 30]
      }
    },
    CANDELA: {
      INDEXADO: {
        productos: ['AMPERE', 'FARAD', 'HENRY', 'LUMEN', 'LUX'],
        fee: ['01 / Bi0,035', '02 / Bi0,03', '02 / Bi0,025', '04 / Bi0,02', '05 / Bi0,018', '06 / Bi0,015', '07 / Bi0,012', '08 / Bi0,1']
      }
    },
    ELIA: {
      FIJO: {
        productos: [
          'BALANCE OF ENERGY 0', 'BALANCE OF ENERGY 1', 'BALANCE OF ENERGY 2',
          'BALANCE OF ENERGY 3', 'SIMPLEX', 'TU DECIDES 0', 'TU DECIDES 1',
          'TU DECIDES 2', 'TU DECIDES 3', 'TU ELIGES 0', 'TU ELIGES 1',
          'TU ELIGES 2', 'TU ELIGES 3', 'TU MEDIOAMBIENTE 0', 'TU MEDIOAMBIENTE 1',
          'TU MEDIOAMBIENTE 2', 'TU MEDIOAMBIENTE 3', 'BALANCE OF ENERGY 0',
          'BALANCE OF ENERGY 1', 'BALANCE OF ENERGY 2', 'BALANCE OF ENERGY 3',
        ],

      },

      INDEXADO: {
        fee: ['TDE0', 'TDE1', 'TDE2', 'TDE3', 'TEE0', 'TEE1', 'TEE2', 'TEE3']
      }
    },
    ENDESA: {
      FIJO: {
        productos: ['TEMPO HAPPY', 'TEMPO OPEN', 'TEMPO OPEN 15≤30kW', 'TEMPO OPEN 30≤50kW',
          'TEMPO OPEN 50≤100kW', 'TEMPO OPEN >100kW', 'TEMPO LIBRE', 'TEMPO 3 PERIODOS',
          'TEMPO HAPPY'],
      },
    },
    ENELUZ: {
      FIJO: {
        productos: ['EXCELLENT+ 1P', 'EXCELLENT+ 3P', 'EXCELLENT+'],
      },
      INDEXADO: {
        productos: ['BASIC', 'EXCELLENT', 'PREMIUM'],
      }
    },
    EVOLVE: {
      FIJO: {
        productos: ['GOLD', 'GOLD', 'SILVER']
      },
    },
    FACTOR: {
      FIJO: {
        productos: [
          'DOMESTICO_EXTRA1P', 'DOMESTICO_EXTRA3P', 'DOMESTICO_MINI', 'DOMESTICO_Precio WEB3P',
          'DOMESTICO_PRIME', 'NEGOCIO_AHORRO', 'NEGOCIO_AHORRO1P', 'NEGOCIO_EXTRA',
          'NEGOCIO_EXTRA1P', 'NEGOCIO_EXTRAPLUS', 'NEGOCIO_EXTRAPLUS1P', 'NEGOCIO_EXTRATOP',
          'NEGOCIO_EXTRATOP1P', 'NEGOCIO_MINI1P', 'NEGOCIO_PROFESIONAL', 'NEGOCIO_PROFESIONAL1P',
        ],
      },
      INDEXADO: {
        productos: ['DOMESTICO_EXTRA1P', 'DOMESTICO_EXTRA3P', 'DOMESTICO_MINI', 'DOMESTICO_Precio WEB3P',
          'DOMESTICO_PRIME', 'NEGOCIO_AHORRO', 'NEGOCIO_AHORRO1P', 'NEGOCIO_EXTRA',
          'NEGOCIO_EXTRA1P', 'NEGOCIO_EXTRAPLUS', 'NEGOCIO_EXTRAPLUS1P', 'NEGOCIO_EXTRATOP',
          'NEGOCIO_EXTRATOP1P', 'NEGOCIO_MINI1P', 'NEGOCIO_PROFESIONAL', 'NEGOCIO_PROFESIONAL1P',],
        fee: [4.00, 6.00, 7.50, 8.50, 9.50, 11.50, 13.50, 15.50, 17.50, 19.50, 21.50, 23.50, 25.50, 29.50]
      }
    },
    GANA: {
      FIJO: {
        productos: ['ONLINE TG', 'PRECIO ESTABLE TG', 'TARIFA 24 HORAS', 'TARIFA TRAMOS HORARIOS']
      },
      INDEXADO: {
        productos: ['SIN MAS'],
      }
    },
    IGNIS: {
      INDEXADO: {
        productos: ['MARE KIT 1', 'MARE KIT 2', 'MARE KIT 3', 'MARE PLUS 1', 'MARE PLUS 2', 'MARE PLUS 3', 'MARE ZEN 1', 'MARE ZEN 2', 'MARE ZEN 3',],
        fee: ['10 MARE ZEN 2', '15 MARE ZEN 1', '20 MARE PLUS 3', '25 MARE PLUS 2', '30 MARE PLUS 1', '4 MARE KIT 2', '4 MARE KIT 1', '8 MARE KIT 3', '2.5 MARE KIT 3']
      }
    },
    IBERDROLA: {
      FIJO: {
        productos: [
          '2.0<10kW PLAN ESTABLE', '2.0<10kW Plan Exclusivo 15%TE/TP 1p',
          '2.0<10kW Plan Exclusivo 15%TE/TP 3p', '2.0>10kW Plan Estable',
          '2.0>10kW Plan Exclusivo 15%TE/TP 1p', '2.0>10kW Plan Exclusivo 15%TE/TP 3p',
          '2.0>10kW Plan Exclusivo 26/30%TE 1p', '2.0>10kW Plan Exclusivo 26/30%TE 3p',
          'PEH/API 2.0<10kW PLAN ESTABLE', 'PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 1p',
          'PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 3p', 'PEH/API 2.0>10kW Plan Estable',
          'PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 1p', 'PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 3p',
          '3.0 Plan Estable', '3.0 Plan Exclusivo 15%TE', '3.0 Plan Exclusivo 26/30%TE',
          'PEH/API 3.0 Plan Estable',
        ]
      }
    },
    MAX: {
      INDEXADO: {
        productos: ['MAYOR A', 'MAYOR B', 'MAYOR C'],
        fee: [3.00, 6.00, 8.00, 10.00, 12.00, 15.00, 18.00, 20.00, 25.00, 30.00, 35.00, 40.00]
      }
    },
    NATURGY: {
      FIJO: {
        productos: [
          'RESIDENCIAL POR USO LUZ LOYAL', 'RESIDENCIAL NOCHE LUZ', 'RESIDENCIAL POR USO LUZ', 'PLAN FIJO LUZ 3.0', 'PLAN FIJO LUZ 3.0 ONE', 'PLAN FIJO LUZ 3.0 SUPRA', 'PLAN FIJO LUZ 6.1 ONE', 'PLAN FIJO LUZ 6.1 SUPRA',
        ]
      },
    },
    PLENITUDE: {
      FIJO: {
        productos: [
          'FACIL MILAN', 'FACIL ROMA', 'FACIL VENECIA', 'MILAN', 'NAPOLES', 'ROMA', 'VENECIA'
        ]
      },
      INDEXADO: {
        productos: ['MILAN', 'NAPOLES', 'ROMA', 'VENECIA'],
      }
    },
    TOTAL: {
      FIJO: {
        productos: [
          'CLASICA LIBRE >5001', 'CLASICA LIBRE 0-1500', 'CLASICA LIBRE 1501-3000',
          'CLASICA LIBRE 3001-5000', 'CLASICA SNP', 'CLASICA SNP TE3',
          'CLASICA LIBRE >100001', 'CLASICA LIBRE 0-10000', 'CLASICA LIBRE 10001-30000',
          'CLASICA LIBRE 30001-50000', 'CLASICA LIBRE 50001-100000', 'CLASICA LIBRE >50.001',
          'CLASICA LIBRE 0-50.000', 'CLASICA ETOP', 'CLASICA ETOP UNICA', 'CLASICA',
          'CLASICA TE1', 'CLASICA TE2', 'CLASICA TE3', 'CLASICA TE4', 'CLASICA TE5',
          'CLASICA LIBRE UNICA >5001', 'CLASICA LIBRE UNICA 0-1500',
          'CLASICA LIBRE UNICA 1501-3000', 'CLASICA LIBRE UNICA 3001-5000',
          'CLASICA TE1 UNICA', 'CLASICA TE2 UNICA', 'CLASICA TE3 UNICA', 'CLASICA TE4 UNICA',
          'CLASICA TE5 UNICA',
        ]
      },
    },
    mesesIndexados: [
      '01/11/2023', '01/10/2023', '01/09/2023', '01/08/2023',
      '01/06/2023', '01/05/2023', '01/04/2023', '01/03/2023', '01/02/2023', '01/01/2023'
    ],
  };

  useEffect(() => {
    // Actualizar las opciones de productos cuando cambian la CIA o el Método
    updateProductos();
    updateFee();
  }, [seleccion.cia, seleccion.metodo]);

  const handleInputSeleccion = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setSeleccion({
      ...seleccion,
      [name]: value,
    }

    );
  };

  const updateProductos = () => {
    if (opcionesProductos[seleccion.cia] && opcionesProductos[seleccion.cia][seleccion.metodo]) {
      setProductos(opcionesProductos[seleccion.cia][seleccion.metodo].productos);

    } else {
      setProductos([]);
    }
  };

  const updateFee = () => {
    if (opcionesProductos[seleccion.cia] && opcionesProductos[seleccion.cia][seleccion.metodo] && opcionesProductos[seleccion.cia][seleccion.metodo].fee) {
      setFee(opcionesProductos[seleccion.cia][seleccion.metodo].fee);
    } else {
      setFee([]);
    }
  };

  //_________________ LLAMADAS A API PRECIOS ____________________
  const handlePropuesta = () => {
    const fetchPrecios = async () => {

      // LLAMADA FIJO
      if (seleccion.metodo === "FIJO") {
        const parametrosFetch = {
          sistema: seleccion.sistema,
          tarifa: seleccion.tarifa,
          cia: seleccion.cia,
          producto: seleccion.producto
        }

        const response = await fetch("https://cloudbuilds-server-folgybvrpq-ew.a.run.app/api/precios/fijos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parametrosFetch)
        });
        let precios = await response.json()

        setPreciosPropuesta({
          p1_e: (precios.p1_e).toFixed(6)*1,
          p2_e: (precios.p2_e).toFixed(6)*1,
          p3_e: (precios.p3_e).toFixed(6)*1,
          p4_e: (precios.p4_e).toFixed(6)*1,
          p5_e: (precios.p5_e).toFixed(6)*1,
          p6_e: (precios.p6_e).toFixed(6)*1,

          p1_p: (precios.p1).toFixed(6)*1,
          p2_p: (precios.p2).toFixed(6)*1,
          p3_p: (precios.p3).toFixed(6)*1,
          p4_p: (precios.p4).toFixed(6)*1,
          p5_p: (precios.p5).toFixed(6)*1,
          p6_p: (precios.p6).toFixed(6)*1,
        })
      };
      //_______________LLAMADA INDEXADO__________
      if (seleccion.metodo === "INDEXADO") {
        const parametrosFetch = {
          sistema: seleccion.sistema,
          tarifa: seleccion.tarifa,
          cia: seleccion.cia,
          producto: seleccion.producto,
          mes: seleccion.mes,
          fee: seleccion.fee
        }

        console.log('parametros', parametrosFetch);

        const response = await fetch("https://cloudbuilds-server-folgybvrpq-ew.a.run.app/api/precios/indexados", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parametrosFetch)
        });
        let precios = await response.json()
        console.log(precios)
        setPreciosPropuesta({
          p1_e: precios[1].p1_e,
          p2_e: precios[1].p2_e,
          p3_e: precios[1].p3_e,
          p4_e: precios[1].p4_e,
          p5_e: precios[1].p5_e,
          p6_e: precios[1].p6_e,

          p1_p: precios[0].p1,
          p2_p: precios[0].p2,
          p3_p: precios[0].p3,
          p4_p: precios[0].p4,
          p5_p: precios[0].p5,
          p6_p: precios[0].p6,
        })
      }


    };
    fetchPrecios();
    setSeleccion({
      sistema: "",
      tarifa: "",
      cia: "",
      metodo: "",
      producto: "",
      mes: "",
      fee: ""
    });
    setTimeout(() => {
      setMostrarTabla(false);

      // Después de 0.3 segundos, vuelve a mostrar la tabla
      setTimeout(() => {
        setMostrarTabla(true);
      }, 100);
    }, 100);
  }



  return (
    <>

      <section className='company'>
        <h4>PROPUESTA SEVERAL</h4>
      </section>

      <section id='select_section'>

        <article>
          {mostrarTabla && (
            <table>
              <thead>
                <tr>
                  <th className='tr_inputs '>TIPO DE SISTEMA</th>
                  <th className='tr_inputs '>TARIFA</th>
                  <th className='tr_inputs'>CIA</th>
                  <th className='tr_inputs'>METODO</th>
                  <th className='tr_inputs'>PRODUCTO CIA (POT)</th>
                  <th className='tr_inputs'>MES DE FACTURACION (INDEXADO)</th>
                  <th className='tr_inputs'>FEE (ENERGIA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td_radius'>
                    <select name="sistema" onChange={handleInputSeleccion}>
                      <option> </option>
                      <option value="PENINSULA">PENINSULA</option>
                      <option value="CANARIAS">CANARIAS</option>
                      <option value="BALEARES">BALEARES</option>
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="tarifa" onChange={handleInputSeleccion}>
                      <option> </option>
                      <option value="2.0TD">2.0TD</option>
                      <option value="3.0TD">3.0TD</option>
                      <option value="6.1TD">6.1TD</option>
                      <option value="6.2TD">6.2TD</option>
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="cia" onChange={handleInputSeleccion}>
                      <option> </option>
                      <option value="ACCIONA">ACCIONA</option>
                      <option value="ADI">ADI</option>
                      <option value="AEQ">AEQ</option>
                      <option value="CANDELA">CANDELA</option>
                      <option value="ELEIA">ELEIA</option>
                      <option value="ENDESA">ENDESA</option>
                      <option value="EVOLVE">EVOLVE</option>
                      <option value="FACTOR">FACTOR</option>
                      <option value="GANA">GANA</option>
                      <option value="IBERDROLA">IBERDROLA</option>
                      <option value="IGNIS">IGNIS</option>
                      <option value="MAX">MAX</option>
                      <option value="NATURGY">NATURGY</option>
                      <option value="PLENITUDE">PLENITUDE</option>
                      <option value="TOTAL">TOTAL</option>
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="metodo" onChange={handleInputSeleccion}>
                      <option> </option>
                      <option value="FIJO">FIJO</option>
                      <option value="INDEXADO">INDEXADO</option>
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="producto" onChange={handleInputSeleccion}>
                      <option> </option>
                      {/* Opciones para PRODUCTO CIA (POT) basadas en las elecciones de CIA y METODO */}
                      {productos.map((producto, index) => (
                        <option key={index} value={producto}>{producto}</option>
                      ))}
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="mes" onChange={handleInputSeleccion}>
                      <option> </option>
                      {/* Opciones para MES DE FACTURACION (INDEXADO) */}
                      {seleccion.metodo == "INDEXADO" && fee.length > 0 ? opcionesProductos.mesesIndexados.map((mes, index) => (
                        <option key={index} value={mes}>{mes}</option>
                      )) : ""};
                    </select>
                  </td>
                  <td className='td_radius'>
                    <select name="fee" onChange={handleInputSeleccion}>
                      <option> </option>
                      {/* Opciones para PRODUCTO CIA (POT) basadas en las elecciones de CIA y METODO */}
                      {fee.map((fee, index) => (
                        <option key={index} value={fee}>{fee}</option>
                      ))}
                    </select>

                  </td>
                </tr>
              </tbody>
            </table>)}
        </article>

        <article>

          <button id='confirmation_button' onClick={handlePropuesta}>Confirmar</button>


        </article>

        <article>
          <table>
            <thead>
              <th className='tr_inputs bigger'>AHORRO FACTURA ACTUAL</th>
            </thead>
            <tbody>
              <td className='td_radius saving'>{importeTotalFactura - importeTotalFactura_prop} €</td>
            </tbody>
          </table>
        </article>

        <article>
          <table>
            <thead>
              <th className='tr_inputs bigger'>AHORRO ANUAL</th>
            </thead>
            <tbody>
              <td className='td_radius saving'>{importeTotalAnual - importeTotalAnual_prop} €</td>
            </tbody>
          </table>
        </article>

      </section>
    </>
  );
};

export default SelectPropuesta;
