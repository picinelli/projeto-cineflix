import Filme from "../Main/Filme";

import "../Main/style.css";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Main() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/`
    );

    promise.then((response) => {
      setFilmes(response.data);
    });
    promise.catch(err => err.response)
  }, []);

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
