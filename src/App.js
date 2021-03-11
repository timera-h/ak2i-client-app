import React from "react";
import { Switch, Route } from "react-router-dom";

// VIEWS
import Home from "./Pages/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
