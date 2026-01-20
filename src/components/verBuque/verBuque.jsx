import "./verBuque.css";
import { Heart, Sparkles, Flower, Sprout, Sun, } from 'lucide-react';

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
              <p className="aviso-vazio">Seu buquê ainda está vazio <Sprout color="#9d81ba" size={24} strokeWidth={1.5} /></p>
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
          {etapa !== "finalizado" && (
            <div className="carrossel-vaso">
              <button onClick={anteriorVaso}>◀</button>
              <span>{vaso ? vaso.nome : "Escolha um vaso"}</span>
              <button onClick={proximoVaso}>▶</button>
            </div>
          )}
        </div>

        {/* BOTÃO PARA ESCOLHER O CARTÃO */}
        {flores.length > 0 && vaso && etapa === "montagem" && (
          <button className="btn-cartao" onClick={() => setEtapa("cartao")}>
            Escolher cartão <Sparkles color="#FFFAF5" size={24} strokeWidth={1.5} />
          </button>
        )}

        {/*ESCOLHER CARTÃO */}
        {etapa === "cartao" && (
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

        {/*FINALIZADO */}
        {etapa === "finalizado" && (
          <>
            <h2 className="titulo-final"><Sun size={20} fill="#9d81ba" color="#9d81ba" />Seu buquê está pronto!<Flower size={20} color="#9d81ba" /></h2>

            <div className="cartao-area">
              <div className="cartao-final">
                <img src={cartao} alt="Cartão escolhido" />
                <p className="mensagem-final">{mensagem}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VerBuque;
