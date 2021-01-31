import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header} from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
