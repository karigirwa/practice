import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Register from './components/Register'
import Profile from './components/Profile'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/"  exact component={Register} />
          <Route path="/profile"  component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
