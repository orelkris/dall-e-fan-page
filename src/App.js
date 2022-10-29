import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Recommendations from './components/pages/Recommendations';
import Popup from './components/Popup';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header-container">
          <div className="app__header-background"></div>
          <Header />
          <Navigation />
        </div>
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/dall-e-fan-page/">
            <div className="content__container">
              <Main />
              <Sidebar />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recommendations">
            <Recommendations />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
