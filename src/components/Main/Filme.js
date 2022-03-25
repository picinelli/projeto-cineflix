export default function Filme(props) {
  const {src, alt} = props;

  return (
    <div className="opcao-filme">
      <img src={src} alt={alt}></img>
    </div>
  );
}
