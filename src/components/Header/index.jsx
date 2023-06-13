import "./style.css";
import logoImage from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div>
                    <img src={logoImage} alt="Logo Terragro" />
                    <h1>Terragro</h1>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Produtos</Link>
                    <Link to="/about">Quem somos</Link>
                    <Link to="/learn">Fique por dentro</Link>
                    <Link to="/contact">Contato</Link>
                    <Link to="/companies">Parceiros</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
