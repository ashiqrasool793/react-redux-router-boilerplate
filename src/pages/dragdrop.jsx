import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  @media (max-width: 788px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

const BigBox = styled.div`
  border-radius: 20px;
  min-height: 300px;
  min-width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 10px 5px;
  flex-direction: column;
`;

const SmallBox = styled.div`
  border-radius: 20px;
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: white;
  margin: 0 0 10px 0;
`;

const itemsFromBackend = [
  { id: uuid(), content: "First" },
  { id: uuid(), content: "Second" },
  { id: uuid(), content: "Third" },
  { id: uuid(), content: "Fourth" },
  { id: uuid(), content: "Fifth" },
  { id: uuid(), content: "Sixth" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Box 1",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "Box 2",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const DragDrop = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <Wrapper>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => {
                return (
                  <BigBox
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "pink"
                        : "lightgrey",
                    }}
                  >
                    <h3>{column.name}</h3>
                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <SmallBox
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  backgroundColor: snapshot.isDragging
                                    ? "black"
                                    : "maroon",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {item.content}
                              </SmallBox>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </BigBox>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </Wrapper>
  );
};

export default DragDrop;
