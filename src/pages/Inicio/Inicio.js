import { NavLink } from "react-router-dom";
import styles from "./Inicio.css";

//Imagens
import imgCircuito from "./Assets/circuito@2x.png";
import logoFacebook from "./Assets/facebook (1) 1.png";
import logoInstagram from "./Assets/instagram (1) 1.png";
import logoLinkedIn from "./Assets/linkedin 1.png";
import logoTwitch from "./Assets/twitch 1.png";

const Inicio = () => {
  return (
    <div className="home">
      <div className="bem-vindo">
        <h2>Bem vindo ao meu site</h2>
        <div>
          <h3>
            Aqui vou te apresentar tudo sobre minha trajetoria e minhas skills
            desenvolvidas como profissional de programação para aplicações web
          </h3>
        </div>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/contato"
        >
          <button>Entrar em Contato</button>
        </NavLink>
      </div>

      <div className="redes-sociais">
        <div className="redes-sociais-textos">
          <h3>Me siga nas redes</h3>
          <h2>Fique por dentro de tudo que acontece lá</h2>
        </div>
        <div className="redes-sociais-imagens">
          <ul>
            <li>
              <a href="#">
                <img src={logoFacebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoInstagram} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoLinkedIn} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoTwitch} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-cursos">
        <div className="container-cursos-descricao">
          <h2>Cursos</h2>
          <h3>
            Algumas das minhas formações no decorrer da minha carreira como
            desenvolvedor.
          </h3>
        </div>

        <div className="container-lista-cursos">
          <div className="cursos-item">
            <div className="cursos-item-img-descricao">
              <img src={logoFacebook} alt="" />
              <h2>Wordpress</h2>
            </div>
            <p>
              Conheça as linguagens HTML e CSS, os frameworks de Bootstrap e
              crie interfaces mais inteligentes e responsivas apresentando as
              informações da melhor maneira possível.
            </p>
          </div>
          <div className="cursos-item">
            <div className="cursos-item-img-descricao">
              <img src={logoFacebook} alt="" />
              <h2>Wordpress</h2>
            </div>
            <p>
              Conheça as linguagens HTML e CSS, os frameworks de Bootstrap e
              crie interfaces mais inteligentes e responsivas apresentando as
              informações da melhor maneira possível.
            </p>
          </div>
          <div className="cursos-item">
            <div className="cursos-item-img-descricao">
              <img src={logoFacebook} alt="" />
              <h2>Wordpress</h2>
            </div>
            <p>
              Conheça as linguagens HTML e CSS, os frameworks de Bootstrap e
              crie interfaces mais inteligentes e responsivas apresentando as
              informações da melhor maneira possível.
            </p>
          </div>
        </div>

        <h2>Alguns trabalhos</h2>
        <p>Clique e acesse alguns dos meus trabalhos realizados.</p>

        <div className="alguns-trabalhos">
          <div className="alguns-trabalhos-item">
            <img src={logoFacebook} alt="" />
            <img src={logoFacebook} alt="" />
            <img src={logoFacebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
