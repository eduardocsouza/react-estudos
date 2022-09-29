function RenderComponets({cor, marca, km, novo, carNovo}) {
  return (
    <div>        
        <h3>Marca: {marca}</h3>
        <p>Cor: {cor}</p>
        <p>KM: {km}</p>
        {carNovo ? <p>{novo}</p> : <p style={{fontStyle: 'italic'}}>{novo}</p>}
    </div>
  )
}

export default RenderComponets