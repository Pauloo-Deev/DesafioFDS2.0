import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [currentCep, setCurrentCep] = useState(0);

  const getCep = (e) => setCurrentCep(e.target.value.replace(/\D/g, ""));

  console.log(currentCep);

  async function checkCep() {
    const resp = await axios.get(
      `https://viacep.com.br/ws/${currentCep}/json/`
    );
    console.log(
      ` Estado: ${resp.data.uf}\n`,
      `Cidade: ${resp.data.localidade}\n`,
      `Bairro: ${resp.data.bairro}\n`,
      `Rua: ${resp.data.logradouro}\n`,
      `CEP: ${resp.data.cep}\n`,
      `DDD: ${resp.data.ddd}\n`,
    );
  }

  return (
    <div className="App">
      <form>
        <div className="label-input">
          <label htmlFor="cep">Digite o CEP desejado: </label>
          <input type="text" onChange={getCep} id="cep" name="cep" />
        </div>
        <button type="button" onClick={checkCep}>
          Consultar
        </button>
      </form>
    </div>
  );
}

export default App;
