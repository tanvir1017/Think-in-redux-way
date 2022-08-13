## Redux core concept with the vanilla js

- First we have to create a reducer function, which is take two parameter as always. They are;

  - State [initial State]
  - action 🥳.

    ```
    In the parameter of action, it will be an object. Which should have contain a value called 'Type'. The action value type define that what will do the the reducer function, in short hand we assume that reducer function will conditionally work by action type ✔✌
    ```

- Then we have to create a store function which is take reducer function as the parameter

  ```
  👉 const store = Redux.createStore(counterReducer);
  ```

- After that, we have to dispatch the action by the eventListener or something else. Which will send an action.type to different behave for reducer function

  ```
   👉 increment.addEventListener("click", () => {
    store.dispatch({
    type: "increment",
    })});
  ```

  ```
  👉 decrement.addEventListener("click", () => {
     store.dispatch({
         type: "decrement",
   })});
  ```

- The render function will change the UI by the condition. Here is an example.

       create render function const render = () => {const state = store.getState();
        counter.innerText = state.value.toString()
      };

  ```
  the getState() function come from redux cdn
  ```

- After that we have to change the UI by render function manually, because we work in a vanilla js file with Redux Cdn.
- Then we have to subscribed the render function as like mentioned in the below

  - render();

  ```
  call it for default initialization
  ```

  - store.subscribe(render);

  ```
  In top of the line we found the subscribe from the redux(CDN) and it will work after any of the handle is clicked
  ```

# That's it the redux core concept 🤷‍♂️
