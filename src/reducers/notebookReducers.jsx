import { v4 as uuid } from "uuid";

let initialState = {
  notebooks: [
    {
      Title: "Dahomey Army",
      Date: "17/11/2022",
      Description: "An All-Female millitary Regiment of the kingdom of Dahomey",
      id: uuid(),
    },
    {
      Title: "Black Panter",
      Date: "18/11/2022",
      Description: "Wakanda Forever",
      id: uuid(),
    },
    {
      Title: "Broda Shaggi",
      Date: "19/11/2022",
      Description: "Shaggi Goes To School",
      id: uuid(),
    },
  ],
};

let notebookReducers = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTEBOOK":
      return { ...state, notebooks: [...state.notebooks, action.payload] };

      case "DELETE_NOTEBOOK":
        const deletedNote = state.notebooks.filter((item) => item.id !== action.payload
        );
        return {
          ...state,
          notebooks: deletedNote,
        };

    case "EDIT_NOTE":
      const editNotes = state.notebooks.map((item) =>
        item.id === action.payload.data.id ? action.payload.data : item
      );
      return {
        ...state,
        notebooks: editNotes,
      };

    default:
      return state;
  }
};
export default notebookReducers;
