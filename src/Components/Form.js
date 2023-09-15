import { useState } from "react";

function Form() {
  function enviar(e) {
    e.preventDefault();
    console.log("Nome: "+name)
    console.log("Password: "+password)
    return console.log("Enviou os seus dados");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>{name} - {password}</h1>
      <form onSubmit={enviar}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua Palavra-Passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
