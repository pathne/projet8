
import './Carrousel.scss';
import { useState } from 'react';

export default function Carrousel(props){

    const [index, setIndex] = useState(0)

    const pictures = props.pictures

    const goLeft = (e) => {
        setIndex(((index - 1) + pictures.length) % pictures.length);
    }

    const goRight = (e) => {
        setIndex((index + 1) % pictures.length);
    }

    return (
        <section className="carrousel">
            <img src={props.pictures[index]} alt="image" />
            <div className="arrow-left" onClick={goLeft}></div>
            <div className="arrow-right" onClick={goRight}></div>
            <div className="index-count">{(index + 1)+'/'+pictures.length}</div>
        </section>
    );
}
