import { useLocation, Link } from "react-router-dom";

import "./style.css";

export default function Sucesso() {
  const state = useLocation();
  const { name, cpf, assentos, infoSessao } = state.state;

  return (
    <div className="Sucesso">
      {console.log(state)}
      <h1>Pedido feito com sucesso!</h1>
      <div className="container">
        <div className="infofilme">
          <h2>Filme e sessão</h2>
          <p>{infoSessao.movie.title}</p>
          <p>
            {infoSessao.day.date} {infoSessao.name}
          </p>
        </div>
        <div className="infoingresso">
          <h2>Ingressos</h2>
          {assentos.map((assento) => {
            return <p key={assento}>Assento {assento}</p>;
          })}
        </div>
        <div className="infocliente">
          <h2>Comprador</h2>
          <p>Nome: {name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </div>
      <Link to={`/`}>
        <div className="voltar-home">
          <p>Voltar pra Home</p>
        </div>
      </Link>
    </div>
  );
}
