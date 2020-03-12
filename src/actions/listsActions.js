//export to action.js/index.js

import { CONSTANTS } from "../actions";
// export to reducer/listReducer
// export to  components/TrelloAction.js
export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
    //payload = title= (state.text) type karana text eka
  };
};

// export to App.js
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
