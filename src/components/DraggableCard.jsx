


import { useState, useEffect } from 'react';

import { useRef } from 'react';


import Draggable from 'react-draggable'; 

import './DraggableCard.css';

export default function DraggableCard({onStopSaveCard, card, id, value, handleBodyContentChange, handleTitleContentChange, handleSetTitleContent, handleDeleteCard}) {

    const nodeRef = useRef(null);       
    const inputRef = useRef(null);
    const [position, setPosition] = useState({ x: card.x, y: card.y }); // Default initial position
    const [titleEditMode, setTitleEditMode] = useState(false);

    const handleStop = (e, data) => {
        const newPosition = { id: id, x: data.x, y: data.y };
        setPosition(newPosition);
        onStopSaveCard(newPosition);
    };

    function handleSetTitleContent() {
        setTitleEditMode(prev => !prev);
        inputRef.current.focus();
    }


    function handleKeyDown(event) {
        if (event.key == 'Enter') {
            setTitleEditMode(false);
            // Perform desired action, e.g., submit form, search
            event.preventDefault(); // Prevent default form submission if within a form
        }
    }
    return (

    <Draggable nodeRef={nodeRef} onStop={handleStop} position={position} bounds={{
            left: 0,
            top: 0,
            bottom: 2000,
            right: 1600
            }}  >
      <div className="draggable-card" ref={nodeRef} >
        <header>

            <div className='controls'>
                <span className='delete'  onClick={() => handleDeleteCard(card)}>x</span>  
                <span className='minimise'></span> 
            </div>
            <textarea id={`title_${id}`} className="card-title" value={card.title} ref={inputRef} type="text" onChange={(event) => handleTitleContentChange(event, card)} onKeyDown={handleKeyDown}    />
        </header>
        <div>
            <textarea id={`content_${id}`}  className='card-content' 
        value={value} onChange={(event) => handleBodyContentChange(event, card)}/>
        </div>
      </div>
    </Draggable>
    )
}