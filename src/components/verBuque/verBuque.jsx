import "./verBuque.css";

// componentes
import Cartao from "../cartao/cartao";
import vasos from "../../data/vasos";
import { useState } from "react";

function VerBuque({
  flores,
  vaso,
  setVaso,
  cartao,
  setCartao,
  mensagem,
  setMensagem,
  etapa,
  setEtapa,
}) {
  // Índice para carrossel de vasos
  const [indiceVaso, setIndiceVaso] = useState(0);

  function proximoVaso() {
    const novoIndice = (indiceVaso + 1) % vasos.length;
    setIndiceVaso(novoIndice);
    setVaso(vasos[novoIndice]);
  }

  function anteriorVaso() {
    const novoIndice = indiceVaso === 0 ? vasos.length - 1 : indiceVaso - 1;
    setIndiceVaso(novoIndice);
    setVaso(vasos[novoIndice]);
  }

  return (
    <div className="ver-buque">
      {/* Área principal: buquê + cartão */}
      <div className="buque-area">
        {/* Buquê visual */}
        <div className="buque-visual">
          {/*Flores sobrepostas dentro do vaso */}
          <div className="flores-camada">
            {flores.length === 0 && (
              <p className="aviso-vazio">Seu buquê ainda está vazio 🌱</p>
            )}

            {flores.map((flor, index) => (
              <img
                key={index}
                src={flor.imagem}
                alt={flor.nome}
                className="flor-buque"
                style={{
                  left: "50%",
                  bottom: "20px",
                  transform: `
    translateX(-50%)
    translateX(${((index % 5) - 2) * 20}px)
    translateY(${Math.floor(index / 5) * -15}px)
    rotate(${((index % 3) - 1) * 7}deg)
  `,
                  zIndex: index + 1,
                }}
              />
            ))}
          </div>

          {/* Vaso */}
          {vaso && (
            <img src={vaso.imagem} alt={vaso.nome} className="vaso-buque" />
          )}

          {/* Carrossel do vaso */}
          <div className="carrossel-vaso">
            <button onClick={anteriorVaso}>◀</button>
            <span>{vaso ? vaso.nome : "Escolha um vaso"}</span>
            <button onClick={proximoVaso}>▶</button>
          </div>
        </div>

        {/* BOTÃO PARA ESCOLHER O CARTÃO */}
        {flores.length > 0 && vaso && etapa === "montagem" && (
          <button className="btn-cartao" onClick={() => setEtapa("cartao")}>
            Escolher cartão 💌
          </button>
        )}

        {/* Cartão ao lado */}
        {etapa !== "montagem" && (
          <div className="cartao-area">
            <Cartao
              cartao={cartao}
              setCartao={setCartao}
              mensagem={mensagem}
              setMensagem={setMensagem}
              setEtapa={setEtapa}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VerBuque;
