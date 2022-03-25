import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

import Assentos from "./Assentos";
import Footer from "./Footer";

export default function Assento() {
  const { idSessao } = useParams();
  const [listaAssentos, setListaAssentos] = useState([]);
  const [infoSessao, setInfoSessao] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setInfoSessao(response.data);
      setListaAssentos(response.data.seats);
    });

    promise.catch((err) => err.response);
  }, []);

  return (
    <>
      <div className="conteudo-assentos">
        <h1>Selecione o(s) assento(s)</h1>

        <div className="container-assentos">
          {listaAssentos.map((assento) => {
            const { name, id, isAvailable } = assento;
            return (
              <Assentos
                key={name + id}
                name={name}
                id={id}
                isAvailable={isAvailable}
              />
            );
          })}
        </div>

        <div className="legenda-opcoes">
          <div className="opcao_selecionado">
            <div className="opcao_selecionado-cor"></div>
            <p>Selecionado</p>
          </div>
          <div className="opcao_selecionado">
            <div className="opcao_disponivel-cor"></div>
            <p>Disponível</p>
          </div>
          <div className="opcao_selecionado">
            <div className="opcao_indisponivel-cor"></div>
            <p>Indisponível</p>
          </div>
        </div>

        <div className="container-informacoes">
          <div className="informacoes-comprador">
            <h2>Nome do comprador:</h2>
            <input
              className="input-nome"
              placeholder="Digite seu nome..."
            ></input>
            <h2>CPF do comprador:</h2>
            <input
              className="input-cpf"
              placeholder="Digite seu CPF..."
            ></input>
          </div>
          <div className="reservar-assento">
            <p>Reservar assento(s)</p>
          </div>
        </div>
      </div>

      <Footer infoSessao={infoSessao} />
    </>
  );
}
