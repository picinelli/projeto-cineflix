import "./style.css"

import Image from '../../assets/images/image 3.svg'

export default function Horario() {
  return (
    <>
    <div className="conteudo-horarios">
      <h1>Selecione o Horário</h1>
      <div className="opcoes-horarios">
        <div className="opcao">
          <h2 className="data-filme">Quinta-feira - 24/06/2021</h2>
          <div className="container-lateralizar">
            <div className="horario-filme">
              <p>15:00</p>
            </div>
            <div className="horario-filme">
              <p>19:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="caixa_branca-footer">
        <img src={Image} alt={Image}></img>
      </div>
      <div className="nome-filme">
        <p>Enola Holmes</p>
      </div>
    </footer>
    </>
  )
}