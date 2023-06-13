import "./style.css";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.svg";

function Home() {
    return (
        <div className="Home" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay">
                <div style={{textAlign: "center"}}>
                    <img src={logo} alt="Logo Terragro" />
                    <h2>Terragro</h2> <br />
                    <h3>Suporte completo para agro no Brasil</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
