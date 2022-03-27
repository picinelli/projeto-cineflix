import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const { setInfoUsuario, infoUsuario } = props;
  const navigate = useNavigate();

  function verificarDisponibilidade(e) {
    e.preventDefault();
    if (infoUsuario.assentos.length < 1) {
      return alert("Ops! Você esqueceu de selecionar seus assentos :D");
    }

    const promise = axios.post(
      `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,
      infoUsuario
    );

    promise.then((response) => {
      navigate("/sucesso", { state: infoUsuario });
    });
    promise.catch((err) =>
      alert("Ops, alguma coisa deu errado. Tente novamente!")
    );
  }

  function mascaraCPF(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2");
  }
  return (
    <form onSubmit={verificarDisponibilidade}>
      <div className="informacoes-comprador">
        <label>Nome do comprador:</label>
        <input
          value={infoUsuario.name}
          name="nome"
          className="input-nome"
          placeholder="Digite seu nome..."
          onChange={(e) => {
            setInfoUsuario({ ...infoUsuario, name: e.target.value });
          }}
          required
        ></input>
        <label>CPF do comprador:</label>
        <input
          value={infoUsuario.cpf}
          name="cpf"
          className="input-cpf"
          placeholder="Digite seu CPF..."
          onChange={(e) => {
            setInfoUsuario({ ...infoUsuario, cpf: mascaraCPF(e.target.value) });
          }}
          maxLength="14"
          required
        ></input>
      </div>
      <button type="submit" className="reservar-assento">
        <p>Reservar assento(s)</p>
      </button>
    </form>
  );
}
