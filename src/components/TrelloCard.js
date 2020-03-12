//export to TrelloList
import React from "react";
import Card from "@material-ui/core/Card";
import { Draggable } from "react-beautiful-dnd";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem"
  },
  subCard: {
    color: "red",
    backgroundColor: "#EAFAF1"
  },
  title: {
    // color: "#707070",
    fontSize: "1rem"
  },
  cardTask: {
    backgroundColor: "#FFFFFF",
    width: "250px",
    margin: "1rem"
  },
  cardName: {
    color: "#707070",
    fontWeight: "550"
  },
  cardEmail: {
    fontSize: "0.8rem",
    color: "#707070"
  },
  cardButton: {
    backgroundColor: "#30726C",
    fontSize: "0.6rem",
    color: "#fff"
  },
  cardPrice: {
    color: "#707070",
    fontWeight: "550"
  }
});

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const TrelloCard = ({ text, name, id, index, textCard, price }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.cardTask}>
            <CardContent>
              <Typography className={classes.cardName}>{name}</Typography>
              <Typography className={classes.cardEmail}>{text}</Typography>
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button className={classes.cardButton}>{textCard}</Button>
              <Typography className={classes.cardPrice}>$ {price}</Typography>
            </CardActions>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};
const styles = {
  cardContainer: {
    marginBottom: 8
  }
};

export default TrelloCard;
