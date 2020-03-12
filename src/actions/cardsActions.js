//export to action.js/index.js

import { CONSTANTS } from "../actions";
// export to reducer/listReducer
// export to  components/TrelloAction.js
export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
    //payload = text= (state.text) type karana text eka
  };
};
