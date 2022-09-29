//imports react
import {useState} from 'react'

//import imagens
import reactLogo from '../assets/react.svg'

function Condicional() {
    const [random, setRandom] = useState(false);

    const handleRandom = () =>{
        setRandom(!random)
    }
  return (
    <div>
        <h1>Condicional</h1>
        <figure>
            <img src={random ? './vite.svg' : reactLogo} alt="logo" />
        </figure>
        <button onClick={handleRandom}>Mudar imagem</button>
    </div>
  )
}

export default Condicional