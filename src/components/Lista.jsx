//React import
import {useState} from 'react'

function Lista() {
    const [lista] = useState(['maria', 'joao', 'josé']);
  return (
    <div>
        <h1>Lista</h1>
        <ul>
            {lista.map((v, i) => (
                <li key={i}>{v}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lista