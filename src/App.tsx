import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
