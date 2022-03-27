import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/";
import Assento from "../Assento";
import Horario from "../Horario";
import Sucesso from "../Sucesso";
import Main from "../Main";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filme/:idFilme" element={<Horario />} />
          <Route path="/sessao/:idSessao" element={<Assento />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
