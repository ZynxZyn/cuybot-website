import "./App.css";
import { LandingPage, DashboardPage } from "./Components/pages";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage}></Route>
        </Switch>
    );
};

export default App;
