
import './Detail.scss';
import { useState } from 'react';

export default function Detail(props){

    const [state, setState] = useState({
        arrow: null,
        container: null,
        height: 0,
        collapsed: true
    })

    const toggleCollapse = (e)=>{
        let newState = {
            arrow: state.arrow,
            container: state.container,
            height: state.height,
            collapsed: !state.collapsed
        };
        if (newState.collapsed){
            newState.arrow.style.transform = 'rotate(0deg)'
            newState.container.style.maxHeight = '0px'
        }
        else{
            newState.arrow.style.transform = 'rotate(-180deg)'
            newState.container.style.maxHeight = (newState.height + 20) + 'px'
        }
        setState(newState)
    }

    return (
        <div className="detail">
            <div className="detail-title" onClick={toggleCollapse}>
                <h3>{props.title}</h3>
                <div className='arrow-up' ref={el => {
                    state.arrow = el
                }}></div>
            </div>
            <div className="detail-content" ref={el => {
                if (el){
                    state.container = el
                    if (state.height === 0){
                        state.height = el.getBoundingClientRect().height
                        el.style.maxHeight = '0px'
                    }
                }
            }}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
