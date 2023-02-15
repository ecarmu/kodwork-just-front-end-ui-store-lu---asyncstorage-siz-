import React from "react";
import App from "./Router";
import AuthProvider from "./context/AuthProvider";

const Wrapper = () => {


    return (
        <AuthProvider>
            <App/>
        </AuthProvider>
    )
}

export default Wrapper