import { useState } from "react";
import "./cartao.css";
import { ChevronLeft, ChevronRight, Heart, Send } from 'lucide-react';  

// imagens dos cartões
import cartao1 from "../../assets/cartoes/cartao1.png";
import cartao2 from "../../assets/cartoes/cartao2.png";
import cartao3 from "../../assets/cartoes/cartao3.png";

const cartoes = [cartao1, cartao2, cartao3];

function Cartao({ cartao, setCartao, mensagem, setMensagem, setEtapa }) {
  const [index, setIndex] = useState(0); // qual cartão está aparecendo
  const [virando, setVirando] = useState(false); // animação de virar

  function proximo() {
    setVirando(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cartoes.length);
      setVirando(false);
    }, 300);
  }

  function anterior() {
    setVirando(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? cartoes.length - 1 : prev - 1));
      setVirando(false);
    }, 300);
  }

  function escolherCartao() {
    setCartao(cartoes[index]);
  }

  return (
    <div className="cartao-container">
      <h2>Escolha um cartão!<Heart size={18} fill="#9d81ba" color="#9d81ba" /></h2>

      {/* CARROSSEL DO CARTÃO */}
      <div className="cartao-carrossel">
        <button onClick={anterior}>◀</button>

        <div
          className={`cartao-visual ${virando ? "virando" : ""}`}
          onClick={escolherCartao}
        >
          <img src={cartoes[index]} alt="Cartão" />
        </div>

        <button onClick={proximo}>▶</button>
      </div>

      {/* ÁREA DE MENSAGEM */}
      {cartao && (
        <div className="mensagem-area">
          <textarea
            id="mensagemCartao"
            name="mensagemCartao"
            placeholder="Escreva uma mensagem <3"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <button 
            disabled={!mensagem.trim()}
            onClick={() => setEtapa("finalizado")}>
            Finalizar buquê <Send size={18} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Cartao;
