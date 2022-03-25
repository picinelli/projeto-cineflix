import './style.css'

export default function Footer(props) {
  const {infoSessao} = props

  if (infoSessao === null) {
    return <></>
  }

  return (
    <footer className="footer-sessao">
        <div className="caixa_branca-footer">
          <img src={infoSessao.movie.posterURL} alt={infoSessao.movie.title}></img>
        </div>
        <div className="nome-filme">
          <p>{infoSessao.movie.title}</p>
          <p>{`${infoSessao.day.weekday} - ${infoSessao.name}`}</p>
        </div>
    </footer>
  )
}