import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"; //Como el archivo se llama index no es necesario indicarlo
//como /index

//Si no de utiliza thunk para peticiones asíncronas, no se requiere applyMiddleware
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

/*El código anterior cambió para que la app funcione aunque no se instale Redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
*/

export default store;
