import StoreIndex from "./pages/StoreIndex";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/">
            <StoreIndex />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
