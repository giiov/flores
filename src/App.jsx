import { useState } from "react";

// componentes
import EscolherFlor from "./components/escolherFlor/escolherFlor";
import VerBuque from "./components/verBuque/verBuque";

// estilos globais
import "./styles/global.css";

function App() {
  // flores escolhidas
  const [flores, setFlores] = useState([]);

  // vaso escolhido
  const [vaso, setVaso] = useState(null);

  // cartão escolhido
  const [cartao, setCartao] = useState(null);

  // mensagem escrita no cartão
  const [mensagem, setMensagem] = useState("");

  // etapa do usuário: montagem -> cartao -> finalizado
  const [etapa, setEtapa] = useState("montagem");

  return (
    <div className="app">
      <h1>Monte seu buquê 🌷</h1>

      {/* Painel de seleção de flores */}
      <EscolherFlor flores={flores} setFlores={setFlores} />

      {/* Área visual do buquê + vaso + cartão */}
      <VerBuque
        flores={flores}
        vaso={vaso}
        setVaso={setVaso}
        cartao={cartao}
        setCartao={setCartao}
        mensagem={mensagem}
        setMensagem={setMensagem}
        etapa={etapa}
        setEtapa={setEtapa}
      />
    </div>
  );
}

export default App;
