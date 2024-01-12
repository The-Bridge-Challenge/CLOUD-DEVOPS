import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/home");
  };
  return (

    <section className="form_logo_container">
      <p className="create_p">Inicia sesión</p>
      <form className="form_label">
        <input
          type="email"
          className="input_form"
          placeholder="Email"
        ></input>
        <input
          type="password"
          className="input_form"
          placeholder="Contraseña"
        ></input>
      </form>
      <p>
        ¿No tienes cuenta? <a>Registrate</a>
      </p>
      <button className="form_button" onClick={handleButtonClick} type="submit">
        Continuar
      </button>
    </section>
  );
};

export default Login;
