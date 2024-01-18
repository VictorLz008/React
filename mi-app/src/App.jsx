import { useState } from 'react';
import './Miapp.css'

const App = ()=>{
  const [Contador, setContador] = useState(0)

  return (
  <>
    <h1>Hola</h1>
    <p>Victor Lopez</p>   
    <h3>Contador: {Contador}</h3>
    <button id="btn-p" className="btns" onClick={()=>setContador(Contador+1)}>Puchale Play</button>
    <button id="btn-d" className="btns" onClick={()=>setContador(Contador-1)}>Decrementa</button>
    <button id="btn-i" className="btns" onClick={()=>setContador(0)}>inicia</button>
  </>)
}

export default App;