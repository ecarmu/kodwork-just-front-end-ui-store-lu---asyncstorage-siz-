import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import initialState from "./store"

function AuthProvider({children}){
    const store = createStore(reducer, initialState);
    return(
        <Provider store = {store}>
            {children}
        </Provider>
    )
}

export default AuthProvider