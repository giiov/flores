import { useState } from "react";
import vasos from "../../data/vasos"
import "./escolherVaso.css"

function EscolherVaso({vaso, setVaso}) {
  const [indice, setIndice] = useState(0)

  function anterior() {
    const novoIndice = indice === 0 ? vasos.length - 1 : indice - 1 
    setIndice(novoIndice)
    setVaso(vasos[novoIndice])
  }

  function proximo() {
    const novoIndice = indice === vasos.length - 1 ? 0 : indice +1
    setIndice(novoIndice)
    setVaso(vasos[novoIndice])
  }

  return (
    <div className="escolher-vaso">
      <h2>Escolha um vaso!</h2>

      <div className="carrossel">
        <button onClick={anterior}>◀</button>

        <img src={vasos[indice].imagem} alt={vasos[indice].nome} className="vaso-img" />

        <button onClick={proximo}>▶</button>
        
      </div>
    </div>
  )
}

export default EscolherVaso