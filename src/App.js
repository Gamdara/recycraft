import StoreIndex from "./pages/StoreIndex";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import StoreSearch from "./pages/StoreSearch";
import ProductDetail from "./pages/ProductDetail";
import Api from "./pages/Api";
import { createContext, useState } from "react";
import ChartContext from "./chart-context";
// import Navbar from "./components/sections/Navbar";

function App() {
  const [chart, setChart] = useState([])
  

  return (
    <Router>
      <div className="app">        
        <ChartContext.Provider value={{chart,setChart}}>
          <Switch>
            <Route exact path="/">
              <StoreIndex />
            </Route>
            <Route path="/s/:type/:filter">
              <StoreSearch />
            </Route>
            <Route path="/p/:id">
              <ProductDetail />
            </Route>
            <Route path="/admin">
              <Api/>
            </Route>
          </Switch>
        </ChartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
