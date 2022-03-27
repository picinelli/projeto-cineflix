import Filme from "../Main/Filme";

import "../Main/style.css";
import carregandoGIF from '../../assets/images/tenor.gif'

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Main() {
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/`
    );

    promise.then((response) => {
      setFilmes(response.data);
    });
    promise.catch((err) => err.response);
  }, []);

  //Texto de carregamento antes da promise
  if (filmes === null) {
    return (
      <div className="conteudo-filmes">
        <img className="gif" src={carregandoGIF} alt="carregandoGIF"></img>
      </div>
    );
  }

  return (
    <div className="conteudo-filmes">
      <h1>Selecione o filme</h1>
      <div className="opcoes-filmes">
        {filmes.map((filme) => {
          return (
            <Link key={filme.id} to={`/filme/${filme.id}`}>
              <Filme src={filme.posterURL} alt={filme.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
