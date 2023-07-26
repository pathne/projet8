
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>Home</div>
            <Link to="fiche-logement">fiche logement</Link>
            <Link to="about">A propos</Link>
        </div>
    );
}
