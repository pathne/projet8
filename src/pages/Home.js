
import { Link } from "react-router-dom";

import Header from '../components/Header/Header';


export default function Home() {
    return (
        <div>
            <Header />
            <div>Home</div>
            <Link to="fiche-logement">fiche logement</Link>
            <Link to="about">A propos</Link>
        </div>
    );
}
