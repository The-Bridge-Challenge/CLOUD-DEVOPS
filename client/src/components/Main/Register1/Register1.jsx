import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register1.css"




const Register1 = () => {
  const navigate = useNavigate();

  const handleClick = (event) =>{
    event.preventDefault();
    navigate("/signup/user")
  }

  return <section className="form_logo_container">

     <Logo/>
     
    
    <article className="form_section">
      <p className="create_p">Crea una cuenta</p>
      <form className="form_label" onSubmit={handleClick}>
        <input className="input_form" type="text" placeholder="Nombre" name="name"></input>
        <input className="input_form" type="text" placeholder="Apellido" name="lastName"></input>  
        <button className="form_button"  type="click" >Continuar</button>
      </form>


    </article>


  </section>;
};

export default Register1;
