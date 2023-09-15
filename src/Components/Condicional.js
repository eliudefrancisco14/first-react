import { useState } from "react";

function Condicional() {
  function enviou(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function apagou() {
    setUserEmail("");
  }

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Digite um email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ex: eliudefrancisco@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button onClick={enviou}>Enviar</button>
        </div>
      </form>

      {userEmail && (
        <div>
          <p>O e-mail introduzido é: {email}</p>
          <button onClick={apagou}>Limpar</button>
        </div>
      )}
    </div>
  );
}

export default Condicional;
