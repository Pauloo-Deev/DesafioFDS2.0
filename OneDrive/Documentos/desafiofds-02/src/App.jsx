import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [currentCep, setCurrentCep] = useState(0);
  const [currentEstado, setCurrentEstado] = useState();
  const [currentCidade, setCurrentCidade] = useState();
  const [currentBairro, setCurrentBairro] = useState();
  const [currentRua, setCurrentRua] = useState();
  const [currentCEP, setCurrentCEP] = useState();
  const [currentDDD, setCurrentDDD] = useState();

  const getCep = (e) => setCurrentCep(e.target.value.replace(/\D/g, ""));

  console.log(currentCep);

  async function checkCep() {
    const resp = await axios.get(
      `https://viacep.com.br/ws/${currentCep}/json/`
    );
    setCurrentEstado(resp.data.uf);
    setCurrentCidade(resp.data.localidade);
    setCurrentBairro(resp.data.bairro);
    setCurrentRua(resp.data.logradouro);
    setCurrentCEP(resp.data.cep);
    setCurrentDDD(resp.data.ddd);

    console.log(
      ` Estado: ${resp.data.uf}\n`,
      `Cidade: ${resp.data.localidade}\n`,
      `Bairro: ${resp.data.bairro}\n`,
      `Rua: ${resp.data.logradouro}\n`,
      `CEP: ${resp.data.cep}\n`,
      `DDD: ${resp.data.ddd}\n`
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
      <div className="dados">
        {currentEstado && (
          <>
            <span>Estado: {currentEstado}</span>
            <span>Cidade: {currentCidade}</span>
            <span>Bairro: {currentBairro}</span>
            <span>Rua: {currentRua}</span>
            <span>Cep: {currentCEP}</span>
            <span>DDD: {currentDDD}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
