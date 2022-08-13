const actions = [
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "decrement", payload: 1 },
];

const initialState = {
  value: 0,
};
const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);

const getMax = (a, b) => Math.max(a, b);

const result = [1, 5, 7, 10, 0, 22, 37].reduce(getMax);

console.log(result);
