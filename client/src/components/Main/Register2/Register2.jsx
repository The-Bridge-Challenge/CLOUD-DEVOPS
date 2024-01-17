import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";




const Register1 = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [isMatch, setIsMatch] = useState(false);

 

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event. target.password.value;

  //   // configuramos la info que se envía, en formato objeto para bbdd sql?
  //   const postData = {
  //     email:email,
  //     password:password
  //   }
  //   const response = await axios.post("RUTA", postData);

  //   navigate("/login")

  // }

  // onSubmit={handleSubmit}  PONER EN LA ETIQUETA FORM
 

  // usaremos el use effect para comparar las contraseñas cada vez que haya  un cambio en alguna de ellas, de ahí que los parámetro de comparación sean esos. Es importante usar el use effect porque sin ello solo se dispara una vez el on change, de esta forma siempre se compara.
  // cuando el estado de isMatch sea true se pondrá en verde la línea 
  useEffect(() => {
    setIsMatch(password1 === password2);
  }, [password1, password2]);

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    if (name === 'password1') {
      setPassword1(value);
    } else if (name === 'password2') {
      setPassword2(value);
    }
  };

  return ( <section className="form_logo_container">
    <Logo/>
    <form className="form_label">  
      <input className="input_form" type="email" placeholder="Email" name="email" />

      <input
        className="input_form"
        type="password"
        placeholder="Contraseña"
        name="password1"
        onChange={handlePasswordChange}
      />

      <input
        className={isMatch ? 'input_form_match' : 'input_form'}
        type="password"
        placeholder="Confirmar contraseña"
        name="password2"
        onChange={handlePasswordChange}
      />

      <button className="form_button" type="submit">
        Registrarse
      </button>
    </form>
    </section>
  );
};

export default Register1;
