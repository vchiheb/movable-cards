

import { useState, useEffect } from 'react';

import DraggableCard from './DraggableCard';

import './ReactDraggable.css';

export default function ReactDraggable() {
    const [draggablesState, setDraggablesState] = useState([]);

    useEffect(() => {
        const savedPositions = JSON.parse(localStorage.getItem('draggablesState'));
        if (savedPositions) {
             setDraggablesState(savedPositions);
        }
       
    }, []); // Run once on component mount

    function getMaxId(array) {
        let max = 0;
        if (array.length > 0) {
            max = array[array.length - 1].id + 1;
        }       
        return max;
    }


    function handleAddCard() {
        setDraggablesState( prevState => {
            let id = getMaxId(prevState);
            let newDraggable = {    
                id: id,
                x: 0,
                y: 0,
                body: 'description',
                title: 'title'
            }
            
            localStorage.setItem('draggablesState', JSON.stringify([...prevState, newDraggable]));
            
            return [...prevState, newDraggable]
        })

    }

    function handleSavePosition(newPosition) {
        draggablesState.find( draggable => {
           if ( draggable.id === newPosition.id) {
            draggable.x = newPosition.x;
            draggable.y = newPosition.y
           }
        });
        localStorage.setItem('draggablesState', JSON.stringify([...draggablesState]));
    }

    function handleBodyContentChange(event, newCard) {
        setDraggablesState(prevState => {
        let newState;
        newState = prevState.map( ( card, index) => {
           if ( newCard.id === card.id) {
                card.body = event.target.value;
            }
            
            return card;

        })
        localStorage.setItem('draggablesState', JSON.stringify([...newState]));
        return newState;
        });
    }

    function handleTitleContentChange(event, newCard) {
        setDraggablesState(prevState => {
        let newState;
        newState = prevState.map( ( card, index) => {
           if ( newCard.id === index) {
                card.title = event.target.value;
            }
            
            return card;
        })
        localStorage.setItem('draggablesState', JSON.stringify([...newState]));
        return newState;
        });
    }

    function handleDeleteCard(card) {
        setDraggablesState(prevState => {
            let newState = prevState.filter(item => item.id != card.id);
            localStorage.setItem('draggablesState', JSON.stringify([...newState]));
            return newState;
        });
    }

    return (
    <>
        <button onClick={handleAddCard}>Add Card</button>
        <div className="container-draggables">
        {
            draggablesState && draggablesState.map((draggableCard, index) => 
            <DraggableCard key={draggableCard.id} id={draggableCard.id} card={draggableCard} onStopSaveCard={handleSavePosition} handleBodyContentChange={handleBodyContentChange} value={draggableCard.body} handleTitleContentChange={handleTitleContentChange} handleDeleteCard={handleDeleteCard}/>)
        }
        </div>
        <main>
        </main>
    </>
    )
}