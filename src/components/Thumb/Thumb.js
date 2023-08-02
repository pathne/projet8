
import './Thumb.scss';

import { Link } from "react-router-dom";

export default function Thumb(props){
    /**/
    return (
        <Link to={"/fiche-logement/"+props.uid} className="thumb">
            <article>
                <img src={props.cover} alt="cover"/>
                <div></div>
                <h3>{props.title}</h3>
            </article>
        </Link>
    );
}
