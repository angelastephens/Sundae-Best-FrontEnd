import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import SundaeIndexContainer from "./containers/SundaeIndexContainer";
import SundaeFormContainer from "./containers/SundaeFormContainer";
import SundaeDetailsContainer from "./containers/SundaeDetailsContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <SundaeIndexContainer />
          </Route>
          <Route path='/sundae/new' component={SundaeFormContainer} />
          <Route path='/sundaes/:id' component={SundaeDetailsContainer} />
        </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
