import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import "inter-ui/inter.css"
import GlobalStyle, { OverallContainer } from './globalStyles'
import { HashRouter as Router } from 'react-router-dom'
import {
  Footer,
  Navbar,
} from './components'
import AnimatedRoutes from './AnimatedRoutes'
import FadeIn from './components/Animations/FadeIn'

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Slabo 27px', 'Crimson Text']
      }
    });
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <OverallContainer>
        <AnimatedRoutes />
        <FadeIn>
          <Footer/>
        </FadeIn>
      </OverallContainer>
    </Router>
  );
}

export default App;
