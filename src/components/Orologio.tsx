import { useState } from "react"

type OrologioProps = {

}

const Orologio = (props: OrologioProps) => {
  const [secondi, setSecondi] = useState(0)

  
  // setInterval(() => {
  //   setSecondi(s => s + 1)
  // }, 1000)


  return (
    <div>{secondi} secondi</div>
  )
}

export default Orologio