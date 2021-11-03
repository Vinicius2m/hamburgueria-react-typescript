import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import {AuthProvider} from "./providers/auth"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer theme="colored" autoClose={2500} />
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
