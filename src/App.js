
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Landing from './pages/Landing'
import Header from './components/Header'
import routes from './utils/constants/routes.json'
function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.landing}><Landing /></Route>
        <Route exact path="/" render={() => (
          <Redirect to={routes.landing} />
        )} />
      </Switch>
    </Router>

  );
}

export default App;
