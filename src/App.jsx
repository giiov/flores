import { useState } from "react"

// componentes
import EscolherFlor from "./components/escolherFlor/escolherFlor"
import EscolherVaso from "./components/escolherVaso/escolherVaso"
import Cartao from "./components/cartao/cartao"
import VerBuque from "./components/verBuque/verBuque"

// estilos globais
import "./styles/global.css"

function App() {
  // flores escolhidas
  const [flores, setFlores] = useState([])

  //vaso escolhido
  const [vaso, setVaso] = useState(null)

  //mensagem do cartão
  const [mensagem, setMensagem] = useState("")

  return (
    <div className="app">
      <h1>Monte seu buquê 🌷</h1>

      <EscolherFlor flores={flores} setFlores={setFlores} />

      <EscolherVaso vaso={vaso} setVaso={setVaso} />

      <Cartao mensagem={mensagem} setMensagem={setMensagem} />

      <VerBuque
        flores={flores}
        vaso={vaso}
        mensagem={mensagem}
      />
    </div>
  )
}

export default App
