
import { useDrag } from 'react-dnd';

const ItemTypes = {
  BOX: 'box',
};

export default function DndCard({name}) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: 'lightblue',
        marginBottom: '5px',
      }}
    >
      {name}
    </div>
  );
}
