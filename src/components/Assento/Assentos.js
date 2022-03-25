export default function Assento(props) {
  const {id, isAvailable, name} = props

  if(isAvailable === false) {
    return (
      <div className="assento assento-indisponivel">
        <p>{name}</p>
      </div>
    )
  }

  return (
    <div className="assento">
      <p>{name}</p>
    </div>
  );
}
