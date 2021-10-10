import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
