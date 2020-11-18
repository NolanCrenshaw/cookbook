# Redux
**Contents**
- [Reducer](#reducer)
- [Thunks](#thunks)
- [createStore](#createstore)
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
  // TODO implement reducer
}

const store = createStore(fruitReducer);
```
