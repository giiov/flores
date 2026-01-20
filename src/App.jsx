import { useState } from "react";
import {Flower2 } from 'lucide-react';

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
      {etapa !== "finalizado" && <h1>Monte seu buquê <Flower2 size={30}  color="#9d81ba" /></h1>}

      {/* Painel de seleção de flores */}
      {etapa !== "finalizado" && (
        <EscolherFlor flores={flores} setFlores={setFlores} />
      )}

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
