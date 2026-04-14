// src/components/Header.jsx
function Header() {
  return (
    <header>
      <img src="/minha-foto.jpg" className="foto-perfil" alt="Áfia Araújo" /> 
      <h1>Áfia Araújo</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;