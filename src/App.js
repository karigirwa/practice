import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./components/Home";
import User from "./components/User";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Register} />
          <Route path="/users/:id" exact component={User} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
