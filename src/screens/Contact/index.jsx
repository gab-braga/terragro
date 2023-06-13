import "./style.css";

function Contact() {
    return (
        <div className="Contact container margin-push">
            <h3>
                Obrigado por visitar a Terragro! Estamos ansiosos para ajudá-lo(a) e responder a todas as suas dúvidas e solicitações. Se você está interessado(a) em nossos produtos e serviços ou tem alguma consulta específica, entre em contato conosco.
            </h3>
            <form>
                <label>
                    E-mail
                    <input type="email" name="email" />
                </label>
                <label>
                    Escreva sua mensagem
                    <textarea name="message"></textarea>
                </label>
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
