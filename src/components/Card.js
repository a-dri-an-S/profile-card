import User from "./User";
import UserMetrics from "./UserMetrics";

import backgroundImg from "../assets/bg-pattern-card.svg"

const Card = () => {
    return (
        <section className="card">
            <img className="card-bg-img" src={backgroundImg} alt="blue-bg"/>
            <User />
            <UserMetrics />
        </section>
    );
}

export default Card;