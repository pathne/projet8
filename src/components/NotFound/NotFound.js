
import './NotFound.scss';

import { Link } from "react-router-dom";

export default function NotFound(props){

    return (
        <section className="not-found">
            <h1>404</h1>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    );
}
