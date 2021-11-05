import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Providers from "./providers"

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer theme="colored" autoClose={2500} />
        <BrowserRouter>
            <Providers>
                <App />
            </Providers>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
