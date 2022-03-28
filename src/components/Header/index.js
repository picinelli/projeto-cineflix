import { useNavigate } from "react-router-dom";

import "./style.css";
import flechaVoltar from '../../assets/images/flecha-voltar.svg'


export default function Header() {

  const navigate = useNavigate()

  function BotaoVoltar() {
    if (window.location.pathname === "/") return <></>
    return <img src={flechaVoltar} onClick={() => navigate(-1)}></img>
  }

  return (
    <header className="Header">
      <BotaoVoltar />
      <p>CINEFLEX</p>
    </header>
  );
}
