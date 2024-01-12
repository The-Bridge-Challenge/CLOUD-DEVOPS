import React from "react";

const FormHome = () => {
  return (
<>
<h1>Empieza una nueva propuesta</h1>
<br/>
<form className="form_home">
        <input
          type="text"
          className="input_form"
          placeholder="Nombre/Razón"
        ></input>
        <input
          type="text"
          className="input_form"
          placeholder="Dirección"
        ></input>
        <input
          type="text"
          className="input_form"
          placeholder="Cups"
        ></input>
      </form>
      <button type="submit">Continuar</button>
</>


  );
};

export default FormHome;
