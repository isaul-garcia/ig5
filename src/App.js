import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import "inter-ui/inter.css";
import GlobalStyle, { FooterContainer } from './globalStyles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, HireMe } from './pages';

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
  MODS,
  SOMEWARE
} from './components';
import { BlogHello, BlogSomeware } from './blogs';

//TODO ::
//
//Rearrange for home, from gloabl
//CLEAN CODE >> consolidate hooks text wrappers, containers, etc.
//
//Anaquel (wip)
//gridy (not public)
//
//extend about into a page
//español
//
//drawings scans + graphic collage page
//smaller images on architecture projects
//neocities el hoyo

function App() {
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

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

      <Switch>
        <Route exact path='/' render={(props) => <Home scrolled={isScroll}{...props} />} />
        <Route path='/design' render={(props) => <DESIGN {...props} />} />
        <Route path='/digiden' render={(props) => <DIGIDEN {...props} />} />
        <Route path='/loma' render={(props) => <LOMA {...props} />} />
        <Route path='/earth' render={(props) => <EARTH {...props} />} />
        <Route path='/gridy' render={(props) => <GRIDY {...props} />} />
        <Route path='/markado' render={(props) => <MARKADO {...props} />} />
        <Route path='/anaquel' render={(props) => <ANAQUEL {...props} />} />
        <Route path='/someware' render={(props) => <SOMEWARE {...props} />} />

        <Route path='/room-x' render={(props) => <ROOMX {...props} />} />
        <Route path='/treehouse' render={(props) => <TH {...props} />} />
        <Route path='/roca' render={(props) => <ROCA {...props} />} />
        <Route path='/mods' render={(props) => <MODS {...props} />} />

        <Route path='/blog/hello-internet' render={(props) => <BlogHello {...props} />} />
        <Route path='/blog/someware' render={(props) => <BlogSomeware {...props} />} />

        <Route path='/hire-me' render={(props) => <HireMe {...props} />} />
      </Switch>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Router>
  );
}

export default App;
