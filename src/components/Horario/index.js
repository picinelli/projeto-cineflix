import "./style.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Horarios from "../Horario/Horarios";

export default function Horario() {
  const { idFilme } = useParams();
  const [filmeHorario, setFilmeHorario] = useState(null);
  const [infoFilme, setInfoFilme] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setFilmeHorario(response.data.days);
      setInfoFilme(response.data);
    });
    promise.catch((err) => err.response);
  }, [idFilme]);

  //Texto de carregamento antes da promise
  if (filmeHorario === null || infoFilme === null) {
    return (
      <div className="conteudo-horarios">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="conteudo-horarios">
        <h1>Selecione o Horário</h1>

        {filmeHorario.map((horario) => {
          return (
            <Horarios
              key={horario.weekday + horario.date}
              diaSemana={horario.weekday}
              diaMes={horario.date}
              sessoes={horario.showtimes}
            />
          );
        })}
        
      </div>
      <footer>
        <div className="caixa_branca-footer">
          <img src={infoFilme.posterURL} alt={infoFilme.title}></img>
        </div>
        <div className="nome-filme">
          <p>{infoFilme.title}</p>
        </div>
      </footer>
    </>
  );
}
