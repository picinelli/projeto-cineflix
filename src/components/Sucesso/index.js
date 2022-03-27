import {useLocation} from 'react-router-dom'

import "./style.css"

export default function Sucesso() {
  const state = useLocation()
  const {name, cpf, assentos} = state.state

  return (
    <div className="Sucesso">
      {console.log(state)}
      <h1>Pedido feito com sucesso!</h1>
      <div className="container">
        <div className="infofilme">
          <h2>Filme e sessão</h2>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div className="infoingresso">
          <h2>Ingressos</h2>
          {assentos.map(assento => {
            return <p key={assento}>Assento {assento}</p>
          })}
        </div>
        <div className="infocliente">
          <h2>Comprador</h2>
          <p>Nome: {name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </div>
    </div>
  )
}