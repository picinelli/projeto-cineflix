import { useState } from "react";

export default function Assento(props) {
  const { id, isAvailable, name, infoUsuario, setInfoUsuario } = props;
  const [selecionado, setSelecionado] = useState("assento");

  if (isAvailable === false) {
    return (
      <div className="assento assento-indisponivel">
        <p>{name}</p>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        for (let i = 0; i < infoUsuario.assentos.length; i++) {
          if (infoUsuario.assentos[i] === name) {
            infoUsuario.assentos.splice(i, 1)
            return setSelecionado("assento")
          };
        }

        setInfoUsuario({
          ...infoUsuario,
          ids: [...infoUsuario.ids, id],
          assentos: [...infoUsuario.assentos, name],
        });

        setSelecionado("assento selecionado");
      }}
      className={selecionado}
    >
      <p>{name}</p>
    </div>
  );
}
