import "../Main/style.css"
import Imagem from "../../assets/images/image 3.svg"

import {Link} from 'react-router-dom'

export default function Main() {
  return (
    <div className="conteudo-filmes">
      <h1>Selecione o filme</h1>
      <div className="opcoes-filmes">
        <Link to={"/filme"}>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
        </Link>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
        <div className="opcao-filme">
          <img src={Imagem} alt={Imagem}></img>
        </div>
      </div>
    </div>
  )
}