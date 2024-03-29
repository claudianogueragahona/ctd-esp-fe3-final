  import { useState } from "react";
  import "./Form.css"

  const Form = () => {
  

    const [formData, setFormData] = useState({
      name: { value: "", isValid: null },
      email: { value: "", isValid: null },
    });
    const [resultado, setResultado] = useState(false);

    const validateName = (name) => {
      return name.length >= 3;
    };

    const validateEmail = (email) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(email);
    };

    const handleName = (e) => {
      const name = e.target.value;
      setFormData({
        ...formData,
        name: { value: name, isValid: validateName(name) },
      });
    };

    const handleEmail= (e) => {
      const email = e.target.value;
      setFormData({
        ...formData,
        email: { value: email, isValid: validateEmail(email) },
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name.isValid && formData.email.isValid) {
        setResultado(true) ;
      }
    };

    return (
      <div className="contactForm">
        {!resultado && (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Nombre:  </label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa aquí tu nombre"
            value={formData.name.value}
            onChange={handleName}          
          />
          </div>
          {!formData.name.isValid && formData.name.isValid !== null && (
            <p>Debes ingresar un nombre mayor a 2 letas</p>
          )}
          <div className="form-group">
          <label htmlFor="email">email:  </label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa aquí tu email"
            value={formData.email.value}
            onChange={handleEmail}
          />
          </div>
          {!formData.email.isValid && formData.email.isValid !== null && (
            <p>Debes ingresar un correo electrónico válido</p>
          )}
          <br />
          <button
            type="submit"
            disabled={!formData.name.isValid || !formData.email.isValid}
          >
            Enviar
          </button>

        
        </form>
        </div>
        )}
        {resultado && (
          <p>
            Gracias {formData.name.value}, unos de nuestros ejecutivos te contactará a la brevedad!
          </p>
        )}
        
      </div>
    );
  };

  export default Form;
