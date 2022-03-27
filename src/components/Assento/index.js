import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.css";

import Assentos from "./Assentos";
import Footer from "./Footer";

export default function Assento() {
  const { idSessao } = useParams();
  const [listaAssentos, setListaAssentos] = useState([]);
  const [infoSessao, setInfoSessao] = useState(null);
  const navigate = useNavigate()
  const [infoUsuario, setInfoUsuario] = useState({
    ids: [],
    name: "",
    cpf: "",
    assentos: []
  })

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setInfoSessao(response.data);
      setListaAssentos(response.data.seats);
    });

    promise.catch((err) => err.response);
  }, [idSessao]);

  function verificarDisponibilidade(e) {
    e.preventDefault();
    const promise = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, infoUsuario)

    promise.then((response) => {
      navigate('/sucesso', {state: infoUsuario});
    })
    promise.catch(err => alert('Ops, alguma coisa deu errado. Tente novamente!'))

  }

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
          <form onSubmit={verificarDisponibilidade}>
            <div className="informacoes-comprador">
              <label>Nome do comprador:</label>
              <input
                value={infoUsuario.name}
                name="nome"
                className="input-nome"
                placeholder="Digite seu nome..."
                onChange={(e) => {setInfoUsuario({...infoUsuario, name: e.target.value});}}
                required
              ></input>
              <label>CPF do comprador:</label>
              <input
                value={infoUsuario.cpf}
                name="cpf"
                className="input-cpf"
                placeholder="Digite seu CPF..."
                onChange={(e) => {setInfoUsuario({...infoUsuario, cpf: e.target.value})}}
                required
              ></input>
            </div>
            <button type="submit" className="reservar-assento">
              <p>Reservar assento(s)</p>
            </button>
          </form>
        </div>
      </div>

      <Footer infoSessao={infoSessao} />
    </>
  );
}
