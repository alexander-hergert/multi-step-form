export const reducer = (state, action) => {
  //CASE 1
  if (action.type === "VALUE_1") {
    const newState = { ...state };
    //CASE 1 logic
    return newState;
  } else if (action.type === "VALUE_2") {
    const newState = { ...state };
    //CASE 2 logic
    return newState;
  } else {
    throw new Error("Unsupported action type");
  }
};

export default reducer;
