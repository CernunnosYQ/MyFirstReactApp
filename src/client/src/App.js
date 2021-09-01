import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import About from './pages/About'
import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
