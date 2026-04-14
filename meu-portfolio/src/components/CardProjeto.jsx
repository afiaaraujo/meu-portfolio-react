// src/components/CardProjeto.jsx

function CardProjeto({ projeto }) {
  return (
    <div className="card-projeto">
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="botao-link">
        Acessar Projeto
      </a>
    </div>
  );
}

export default CardProjeto; // Isso permite que o App.jsx "enxergue" esse arquivo