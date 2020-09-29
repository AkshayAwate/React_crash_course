import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './views/Product';


function App() {
  return (
    <div>
       <Router>     
          <Header />
         
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
            </Switch>
          </div>
          
          <Footer/>
       </Router>
     
    </div>
  );
}

export default App;
