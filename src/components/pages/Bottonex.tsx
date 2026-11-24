
type BottonexProps = {
  bobo: boolean
  handleBobo: () => void
}

const Bottonex = ({ bobo, handleBobo }: BottonexProps) => {
  return (
    <div>
      <p>{String(bobo)}</p>
      <button onClick={handleBobo}>Bobo</button>
    </div>
  )
}

export default Bottonex