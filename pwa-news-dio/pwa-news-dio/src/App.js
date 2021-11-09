import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
