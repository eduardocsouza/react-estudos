//React import
import {useState} from 'react'

function Contador() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={() => setCount(count +1)}>Cont:</button><span> {count}</span>
    </div>
  )
}

export default Contador