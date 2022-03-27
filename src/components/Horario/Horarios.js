import { Link } from "react-router-dom";

export default function Horarios(props) {
  const { diaSemana, diaMes, sessoes } = props;

  return (
    <div className="opcoes-horarios">
      <div className="opcao">
        <h2 className="data-filme">
          {diaSemana} - {diaMes}
        </h2>
        <div className="container-lateralizar">
          {sessoes.map((sessao) => {
            return (
              <Sessao
                sessao={sessao.id}
                key={sessao.name + sessao.id}
                hora={sessao.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  function Sessao(props) {
    const { hora, sessao } = props;
    return (
      <Link to={`/sessao/${sessao}`}>
        <div className="horario-filme hvr-grow hvr-back-pulse">
          <p>{hora}</p>
        </div>
      </Link>
    );
  }
}
