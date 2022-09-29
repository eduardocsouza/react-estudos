import {useState} from 'react'

function PrevState() {

    const [lista, setLista] = useState([
        {id: 1, nome: 'jose'},
        {id: 2, nome: 'maria'},
        {id: 3, nome: 'joão'}
    ]);

    const handleDelete = () =>{
        const numRandom = Math.floor(Math.random() * 4);
        return setLista((prevLista) => prevLista.filter((v) => numRandom !== v.id));
    }

  return (
    <div>
        <h1>Lista PrevState</h1>
        <ul>
            {lista.map((v) => (
                <li key={v.id}>{v.nome}</li>
            ))}
        </ul>
        <button onClick={handleDelete}>Delete item</button>
    </div>
  )
}

export default PrevState