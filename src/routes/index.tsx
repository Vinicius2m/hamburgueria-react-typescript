import {Switch, Route} from "react-router"
import Login from "../pages/Login"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route exact path="/register"></Route>

            <Route exact path="/dashboard"></Route>
        </Switch>
    )
}

export default Routes
