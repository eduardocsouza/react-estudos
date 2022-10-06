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
import StateLift from './components/StateLift'
import ShowStateLift from './components/ShowStateLift'

function App() {  

  const [car] = useState([
    {id: 1, cor: 'Branco', marca: 'Sandero', km: 0, novo: 'novo', carNovo: true},
    {id: 2, cor: 'Preto', marca: 'KA', km: 1500, novo: 'usado', carNovo: false},
    {id: 3, cor: 'Azul', marca: 'Fox', km: 0, novo: 'novo', carNovo: true}
  ]);

  const [title, setTitle] = useState('');

  function handleTitle(msg){
    setTitle(msg);
  }

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
        <div key={car.id}>
          <RenderComponets            
            cor={car.cor} 
            marca={car.marca} 
            km={car.km} 
            novo={car.novo} 
            carNovo={car.carNovo}/>
          <br/>
        </div>
                
      ))}
      <ShowStateLift msg={title}  />
      <StateLift handle={handleTitle} />  
    </div>
  )
}

export default App
