import './App.css'
import Header from './components/Header'
import CardProjeto from './components/CardProjeto'
const meusProjetos = [
  { 
    id: 1,
    nome: "Single: Pássaro Ferido", 
    descricao: "Lançamento musical autoral. Projeto de branding e música.",
    link: "#" 
  },
  { 
    id: 2,
    nome: "Sistema de Chamada Digital", 
    descricao: "Arquitetura de software e diagramas UML para unidade de saúde.",
    link: "#"
  },
  { 
    id: 3,
    nome: "Selo da Canção", 
    descricao: "Interface de usuário (UI) desenvolvida para plataforma de música.",
    link: "#"
  }
];

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou <strong>Áfia Araújo</strong>, musicista e estudante de Sistemas para Internet. 
                    Acredito que a tecnologia e a arte andam juntas: enquanto a música conecta pessoas, 
                    o desenvolvimento web constrói as pontes para que isso aconteça. 
                    Atualmente, foco em criar experiências digitais fluidas, unindo criatividade e código.
          </p>
        </section>
        <section id="projetos">
          <h2>Meus Projetos</h2>

          <div id="lista-projetos">
            {meusProjetos.map((proj) => (
              <CardProjeto key={proj.id} projeto={proj} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 - Áfia Araújo | Desenvolvido com React</p>
      </footer>
    </div>
  );
}

export default App;