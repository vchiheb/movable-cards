import { useDrop } from 'react-dnd';
import { ItemTypes } from './DraggableBox'; // Import ItemTypes from where you defined it

export default function DropTarget() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      alert(`Dropped: ${item.name}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const backgroundColor = isOver ? 'lightgreen' : 'lightgray';

  return (
    <div
      ref={drop}
      style={{
        backgroundColor,
        padding: '20px',
        border: '2px dashed gray',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
}   