
import './Presentation.scss';
import Detail from '../Detail/Detail';

export default function Presentation(props){

    const nameParts = props.host.name.split(' ')
    const firstname = nameParts[0]
    const lastname = nameParts.slice(1).join(' ')

    const tags = props.tags.map(name => (
        <Tag
            key={name}
            name={name}
        />
    ))

    const stars = []
    for (let i=0; i<props.rating; i++){
        stars.push(<div key={i} className="star-filled"></div>)
    }
    for (let i=props.rating; i<5; i++){
        stars.push(<div key={i} className="star-empty"></div>)
    }

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
                        <p>{firstname}<br/>{lastname}</p>
                        <img src={props.host.picture} width="64" height="64" />
                    </div>
                    <div className="stars">{stars}</div>
                </div>
            </div>
            <div className="details">
                <div className="detail-slot">
                    <Detail
                        title="Description"
                        items={props.description}
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
