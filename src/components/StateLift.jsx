
function StateLift({handle}) {
  return (
    <div>
        <button onClick={() => handle('Olá State Lift!!')}>State Lift</button>
    </div>
  )
}

export default StateLift