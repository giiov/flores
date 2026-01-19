import floresDisponiveis from "../../data/flores"
import "./escolherFlor.css"

function EscolherFlor({ flores, setFlores }) {
  function adicionarFlor(flor) {
    setFlores([...flores, flor])
  }

    return (
        <div className="escolher-flor">
            <h3>Escolha suas flores!</h3>


            <div className="lista-flores">
                {floresDisponiveis.map((flor) => (
                    <button
                        key={flor.id}
                        onClick={() => adicionarFlor(flor)}
                    >
                        {flor.emoji} {flor.nome}
                    </button>
                ))}
            </div>

            <p>Flores no buquê: {flores.length}</p>
        </div>
    )
}

export default EscolherFlor