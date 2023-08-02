
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
        state.collapsed = !state.collapsed
        if (state.collapsed){
            state.arrow.style.transform = 'rotate(0deg)'
            state.container.style.maxHeight = '0px'
        }
        else{
            state.arrow.style.transform = 'rotate(-180deg)'
            state.container.style.maxHeight = (state.height + 20) + 'px'
        }
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
                    state.height = el.getBoundingClientRect().height
                    el.style.maxHeight = '0px'
                }
            }}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
