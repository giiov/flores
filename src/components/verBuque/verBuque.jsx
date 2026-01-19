import "./verBuque.css";

function VerBuque({ flores, vaso }) {
  return (
    <div className="ver-buque">
      <h2>Buquê Pronto</h2>

      <div className="flores-buque">
        {flores.length === 0 && <p>Seu buquê ainda está vazio</p>}

        {flores.map((flor, index) => (
          <img
            key={index}
            src={flor.imagem}
            alt={flor.nome}
            className="flor-buque"
            style={{
              left: "50%",
              bottom: "0px",

              // deslocamento pequeno e limitado
              transform: `
      translateX(-50%)
      translateX(${((index % 5) - 2) * 10}px)
      translateY(${Math.floor(index / 5) * -6}px)
      rotate(${((index % 3) - 1) * 3}deg)
    `,

              zIndex: index,
            }}
          />
        ))}

        {vaso && (
          <img src={vaso.imagem} alt={vaso.nome} className="vaso-buque" />
        )}
      </div>
    </div>
  );
}

export default VerBuque;
