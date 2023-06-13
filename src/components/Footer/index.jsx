import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div>
                    <Link to="/">
                        <h2>Terragro</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/products">Produtos</Link>
                    <Link to="/about">Quem somos</Link>
                    <Link to="/learn">Fique por dentro</Link>
                    <Link to="/contact">Contato</Link>
                    <Link to="/companies">Parceiros</Link>
                </div>
                <div>
                    <Link to="/">
                        <i className="bi bi-whatsapp"></i> WhatsApp
                    </Link>
                    <Link to="/">
                        <i className="bi bi-instagram"></i> Instagram
                    </Link>
                    <Link to="/">
                        <i className="bi bi-facebook"></i> Facebook
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
