import "./style.css";
import { learnList } from "../../data/learn"; 

function Learn() {
    return (
        <div className="Learn container margin-push">
            {learnList.map(learn => {
                return (
                    <div className="learning" key={learn.title}>
                        <h3>{learn.title}</h3>
                        <p>{learn.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Learn;
