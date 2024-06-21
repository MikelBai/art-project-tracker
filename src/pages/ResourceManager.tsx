import React from 'react';
import { DragDropContext, Droppable, DropResult, Draggable } from 'react-beautiful-dnd';

const ResourceManager = () => {
  const [resources, setResources] = React.useState([
    { id: '1', content: 'Resource 1' },
    { id: '2', content: 'Resource 2' },
    { id: '3', content: 'Resource 3' },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
  
    const items = Array.from(resources);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    setResources(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="resources">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {resources.map((resource, index) => (
              <Draggable key={resource.id} draggableId={resource.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-2 border mb-2"
                  >
                    {resource.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ResourceManager;
