import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import "inter-ui/inter.css";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Design } from './pages';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
  }, []);

  const [scrolledDown, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={(props) => <Home scrolledDown={scrolledDown} {...props} />} />
        <Route path="/design" render={(props) => <Design scrolledDown={true} {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
