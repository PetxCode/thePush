import React from "react";
import HomeScreen from "./components/HomeScreen";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={HomeScreen} />
        <Route path="/sign" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
