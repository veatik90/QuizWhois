import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Gallery } from "./components/gallery"
import { CategoryPage } from './components/CategoryPage'
  const App: React.FunctionComponent = () =>
  (
    <Router>
      <div className="container">
        <Switch>
          <Route component={CategoryPage} path="/" exact />
          <Route component={Gallery} path="/gallery" />
        </Switch>
      </div>
    </Router>
  )

function Home() {
  return <h2>Home</h2>
}

export default App
