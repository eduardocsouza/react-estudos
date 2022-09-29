//Stylesheet
import './App.css'
import Condicional from './components/Condicional'

//Components
import Contador from './components/Contador'
import Lista from './components/Lista'
import PrevState from './components/PrevState'

function App() {
  

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
    </div>
  )
}

export default App
