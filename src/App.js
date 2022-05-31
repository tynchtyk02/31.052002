import React, {useState} from 'react'
import q from '../src/img/756504609782470.jpg'
import w from '../src/img/Без названия.jpg'
const App = () => {
let [img,image] = useState(q)
  return (
    <div>
     <div>
     <img src={q} width={40}/>
      <img src={w}/>
     </div>
      <img src={img}/>
      <div>
        <button onClick={()=>image(q)}>knopka</button>
        <button onClick={()=>image(w)}>knopka2</button>
      </div>
    </div>
  )
}

export default App