import "./style.css";
import { companies } from "../../data/companies";

function Companies() {
    return (
        <div className="Companies container margin-push">
            <h3>
                Nossa missão é fornecer soluções eficientes e confiáveis para agricultores, pecuaristas e entusiastas do campo. Conheças a empresas que confiam no nosso trabalho.
            </h3>
            <div className="companies-list">
                {companies.map(company => {
                    return (
                        <img src={company.logo} alt={company.title} key={company.title} title={company.title} />
                    );
                })}
            </div>
        </div>
    );
}

export default Companies;
