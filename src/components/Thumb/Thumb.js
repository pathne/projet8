
import './Thumb.scss';

import { Link } from "react-router-dom";

export default function Thumb(props){
    /*<img src={props.cover} alt="cover"/>*/
    return (
        <Link to="/" className="thumb">
            <article>

                <h3>{props.title}</h3>
            </article>
        </Link>
    );
}
