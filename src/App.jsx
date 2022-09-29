//React imports
import { useState } from 'react'

//Stylesheet
import './App.css'

//Components
import Contador from './components/Contador'
import Condicional from './components/Condicional'
import Lista from './components/Lista'
import PrevState from './components/PrevState'
import Prosp from './components/Prosp'
import RenderComponets from './components/RenderComponets'

function App() {  

  const [car] = useState([
    {cor: 'Branco', marca: 'Sandero', km: 0, novo: 'novo', carNovo: true},
    {cor: 'Preto', marca: 'KA', km: 1500, novo: 'usado', carNovo: false},
    {cor: 'Azul', marca: 'Fox', km: 0, novo: 'novo', carNovo: true}
  ])

  return (
    <div className="App">
      <h1>Estudos React</h1>
      <Contador/>
      <hr />
      <br />
      <Lista/>
      <hr />
      <br />
      <PrevState/>
      <hr />
      <br />
      <Condicional/>
      <hr />
      <br />
      <Prosp titulo='Testando props'/>
      <hr />
      <br />
      <h1>Renderizando Componetes com props</h1>
      <br />
      {car.map((car) => (
        <>
          <RenderComponets cor={car.cor} marca={car.marca} km={car.km} novo={car.novo} carNovo={car.carNovo}/>
          <br/>
        </>
                
      ))}      
    </div>
  )
}

export default App
