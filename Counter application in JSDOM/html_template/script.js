// get the html element by the id
const counter = document.getElementById("counterShow");
const incrementEl = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
// initial  counter value
let counterContent = 0;

// Set the initial state for the Vanilla js redux
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    if (state.value > 0) {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }
  } else {
    return state;
  }
}

// create store to the redux
const store = Redux.createStore(counterReducer);

// create render function
const render = () => {
  const state = store.getState();
  counter.innerText = state.value.toString();
};

// render UI initially
render();
// Rendered the subscribed element
store.subscribe(render);

// Reducer dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

// Reducer dispatch
decrementEL.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
