
import './Presentation.scss';
import Detail from '../Detail/Detail';

export default function Presentation(props){

    const nameSplit = props.host.name.split(' ').map(name => (<span>{name}</span>))
    nameSplit.splice(1, 0, (<br />));

    const tags = props.tags.map(name => (
        <Tag
            key={name}
            name={name}
        />
    ))

    const stars = []
    for (let i=0; i<props.rating; i++){
        stars.push(<div className="star-filled"></div>)
    }
    for (let i=props.rating; i<5; i++){
        stars.push(<div className="star-empty"></div>)
    }

    let descriptions = props.description.split('.').map(s => s+'.')
    descriptions.pop()

    return (
        <section className="presentation">
            <div className="info">
                <div className="text-tags">
                    <h1>{props.title}</h1>
                    <p>{props.location}</p>
                    <div>{tags}</div>
                </div>
                <div className="who-stars">
                    <div className="who">
                        <p>{nameSplit}</p>
                        <img src={props.host.picture} width="64" height="64" />
                    </div>
                    <div className="stars">{stars}</div>
                </div>
            </div>
            <div className="details">
                <div className="detail-slot">
                    <Detail
                        title="Description"
                        items={descriptions}
                    />
                </div>
                <div className="detail-slot">
                    <Detail
                        title="Équipements"
                        items={props.equipments}
                    />
                </div>
            </div>
        </section>
    );
}

function Tag(props){
    return (
        <div className="tag">{props.name}</div>
    );
}
