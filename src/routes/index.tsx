import {Switch, Route} from "react-router"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/dashboard"></Route>
        </Switch>
    )
}

export default Routes
