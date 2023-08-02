
import './Detail.scss';
import { useState } from 'react';

class Animate {
    constructor(animationDuration){
        this.height = 0
        this.container = null
        this.arrow = null
        this.collapsed = true
        this.k = 0
        this.tPrev = 0
        this.animationDuration = animationDuration * 1000
    }

    setHeight(el){
        if (el && this.height === 0){
            this.height = el.getBoundingClientRect().height + 20
        }
    }

    setContainer(el){
        this.container = el
    }

    setArrow(el){
        this.arrow = el
    }

    toggle(){
        this.collapsed = !this.collapsed
        const k = this.collapsed?0:1
        this.arrow.style.transform = 'rotate('+(k * -180)+'deg)'
        this.container.style.maxHeight = (k * this.height)+'px'
    }
}


export default function Detail(props){

    const [animate, setAnimate] = useState(new Animate(0.3))

    const toggleCollapse = (e)=>{
        animate.toggle()
    }

    let content
    if (typeof props.items === 'string'){
        content = (
            <p ref={el => {
                animate.setHeight(el)
            }}>
                {props.items}
            </p>
        )
    }
    else{
        const itemElements = props.items.map(text => <li key={Math.random()}>{text}</li>)
        content = (
            <ul ref={el => {
                animate.setHeight(el)
            }}>
                {itemElements}
            </ul>
        )
    }

    return (
        <div className="detail">
            <div className="detail-title" onClick={toggleCollapse}>
                <h3>{props.title}</h3>
                <div className='arrow-up' ref={el => {
                    animate.setArrow(el)
                }}></div>
            </div>
            <div className="detail-content" ref={el => {
                animate.setContainer(el)
            }}>
                {content}
            </div>
        </div>
    );
}
