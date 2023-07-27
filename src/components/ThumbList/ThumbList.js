
import './ThumbList.scss'
import Thumb from '../Thumb/Thumb'
import data from './data'

export default function ThumbList(){

    const items = data.map(item => (
        <Thumb
            key={item.id}
            title={item.title}
        />
    ));

    return (
        <section className="section">
            <div>
                {items}
            </div>
        </section>
    );
}
