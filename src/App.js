import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import "inter-ui/inter.css";
import GlobalStyle, { MediumSpacer } from './globalStyles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Article } from './pages';

import {
  Footer,
  DIGIDEN,
  ANAQUEL,
  ROOMX,
  MARKADO,
  GRIDY,
  EARTH,
  LOMA,
  DESIGN,
  TH,
  ROCA,
  MODS
} from './components';
import { OverContainer } from './globalStyles';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <MediumSpacer justMobile={true} />
      <OverContainer>

        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route path='/design' render={(props) => <DESIGN {...props} />} />
          <Route path='/digiden' render={(props) => <DIGIDEN {...props} />} />
          <Route path='/loma' render={(props) => <LOMA {...props} />} />
          <Route path='/earth' render={(props) => <EARTH {...props} />} />
          <Route path='/gridy' render={(props) => <GRIDY {...props} />} />
          <Route path='/markado' render={(props) => <MARKADO {...props} />} />
          <Route path='/anaquel' render={(props) => <ANAQUEL {...props} />} />
          
          <Route path='/room-x' render={(props) => <ROOMX {...props} />} />
          <Route path='/treehouse' render={(props) => <TH {...props} />} />
          <Route path='/roca' render={(props) => <ROCA {...props} />} />
          <Route path='/mods' render={(props) => <MODS {...props} />} />

          <Route path='/articles' render={(props) => <Article {...props} />} />
        </Switch>

        <Footer />
      </OverContainer>
    </Router>
  );
}

export default App;
