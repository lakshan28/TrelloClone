//export to  App.js
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import styled from "styled-components";
// TrelloActionButton (props= list)

const ListContainer = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          //  style={styles.container}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div
                {...provided.draggableProps}
                ref={provided.innerRef}
                //  {...provided.dragHandleProps}
              >
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    name={card.name}
                    textCard={card.textCard}
                    price={card.price}
                    id={card.id}
                  />
                ))}
                <TrelloActionButton listID={listID} />
                {provided.placeholder}
                {
                  // TrelloActionButton (props= list)
                }
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

/*
const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8
  }
};

*/

export default TrelloList;
