
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DndCard from './DND/DndCard';
import Example from './DND/example';
import DropTarget from './DND/DropTarget';

export default function ReactDnd() {


    return (
        <>
    <DndProvider backend={HTML5Backend}>
        
        <DndCard name="Box A" />
        <DropTarget />
            </DndProvider>

        
            <DndProvider backend={HTML5Backend}>
                <div>
          
          <Example />
                </div>
            </DndProvider>
        </>
    )
}