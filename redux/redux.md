# Redux
**Contents**
- [Reducer](#reducer)
- [Thunks](#thunks)
- [Actions](#actions)
- [createStore](#createstore)
- [Store Methods](#store-methods)
- [dispatch()](#dispatch())
- [subscribe()](#subsribe())
---
### Reducer

Ex: "Redux handles actions using reducers."

A reducer is a function that is called each time an action is dispatched. The reducer receives an action and the current state as arguments and returns an updated state.

Redux reducers are required to be pure functions of the dispatched action and the current state. This makes their behavior very predictable and allows their effects to potentially be reversed.

---
### Thunks
Ex: "Thunks are a convenient format for taking asynchronous actions in Redux."

The traditional approach to middleware closely parallels the format of reducers. The actions being dispatched are POJOs with types and various middleware files are waiting to receive them. These files check the type of the action using a case statement just like reducers.

Thunks are an alternative approach. A thunk is a general concept in computer science referring to a function whose primary purpose is simply to call another function. In Redux a thunk action creator returns a function rather than an object. When they are dispatched, thunk actions are intercepted by a piece of middleware that simply checks if each action is a function. If it is, that function is called with the state and dispatch as arguments, otherwise it is passed on down the chain. Thunks are most commonly used to make asynchronous API requests.

---
### Actions
An ```action``` is a plain object that has a ```type``` and an optional ```payload```.
```js
const addOrange = {
  type: 'ADD_FRUIT',
  fruit: 'orange',
};
```
---
### createStore
```createStore``` takes up to three arguments and returns a Redux store.
```js
createStore(reducer, [preloadedState], [enhancer]);
```
```reducer``` *(required)* Function that receives store's current state and incoming action. Returns next state.

```preloadedState``` Object representing application state that existed before store was created.

```enhancer``` Function that can modify store.
```js
import { createStore } from 'redux';

const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.fruit];
    default:
      return state;
  }
};

const store = createStore(fruitReducer);
```
---
### Store methods
```getState()``` Returns current state.

```dispatch(action)``` Passes action to reducer.

```subscribe(callback)``` Registers callback to trigger on store updates. Returns a function that can 'unsubscribe' the callback when invoked.

---
### dispatch()
```store.dispatch()``` will pass current state and action to the ```reducer```. The ```reducer``` will take ```state``` and ```action```, and return the next ```state```.

*using the code blocks from above:*
```js
console.log(store.getState()); // []

store.dispatch(addOrange);

console.log(store.getState()); // [ 'orange' ]
```
---
### subscribe()
Each ```store.dispatch()``` invoked will trigger all subscriber callbacks.

```store.subscribe()``` outputs an unsubscribe function.
```js
const display = () => {
  console.log(store.getState());
};

const unsubscribeDisplay = store.subscribe(display);

store.dispatch(addOrange); // [ 'orange', 'orange' ]

// display will no longer be invoked after store.dispatch()
unsubscribeDisplay();

store.dispatch(addOrange); // no output
```
