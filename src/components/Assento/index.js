import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

import Assentos from "./Assentos";
import Footer from "./Footer";
import Form from "./Form";

export default function Assento() {
  const { idSessao } = useParams();
  const [listaAssentos, setListaAssentos] = useState([]);
  const [infoSessao, setInfoSessao] = useState(null);
  const [infoUsuario, setInfoUsuario] = useState({
    ids: [],
    name: "",
    cpf: "",
    assentos: [],
    infoSessao: {},
  });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setInfoSessao(response.data);
      setInfoUsuario({ ...infoUsuario, infoSessao: response.data });
      setListaAssentos(response.data.seats);
    });

    promise.catch((err) => console.log(err));
  }, [idSessao]);

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
                setInfoUsuario={setInfoUsuario}
                infoUsuario={infoUsuario}
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
          <Form infoUsuario={infoUsuario} setInfoUsuario={setInfoUsuario} />
        </div>
      </div>

      <Footer infoSessao={infoSessao} />
    </>
  );
}
