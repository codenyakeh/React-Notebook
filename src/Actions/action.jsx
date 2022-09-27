export const newNotebook = (addNotes) => {
  return {
    type: "NEW_NOTEBOOK",
    payload: addNotes,
  };
};

export const editNote = (data) => {
  return {
    type: "EDIT_NOTE",
    payload: { data },
  };
};

export const deleteNotebook = (id) => {
  return {
    type: "DELETE_NOTEBOOK",
    payload: { id },
  };
};