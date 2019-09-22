import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"
import "./App.css"

const Home = () => {
  return <div>HOME</div>
}

const About = () => {
  return <div>About</div>
}

const Topic = ({ match }) => (
  <div>
    {match.params.topicId}
  </div>
)


const Thingo = ({ match }) => {
  return (
    <>
      <div>Thingo</div>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Compoents
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => (
        <h1>Please select a topic</h1>
      )} />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        React Router v4
        <ul>
          <li>
            <Link to="/">HOMEY</Link>
          </li>
          <li>
            <Link to="/about">ABOUTY</Link>
          </li>
          <li>
            <Link to="/thingo">THINGOY</Link>
          </li>
        </ul>
      </div>

      <br />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/thingo" component={Thingo} />
    </Router>
  )
}

export default App
