const initialState = {
    upperCased: "",
    randomCased: ""
};

const formReducer = (inputState = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_CONVERT_CASE":
      return {
        upperCased: action.payloadUpperCase,
        randomCased: action.payloadRandomCase
      };
    case "RESET_FORM":
      return {
        upperCased: "",
        randomCased: ""
      };
    default:
      return inputState;
  }
};

export default formReducer;
