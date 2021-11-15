import React, { useEffect } from 'react'
import ReactGa from 'react-ga'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import About from './About.js'
import Bio from './Bio.js'
import Footer from './Footer.js'
import ScrollToTop from './ScrollToTop.js'
import { padding } from './CommonStyles.js'

// Components
import Title from './Title.js'
import Grid from './Grid.js'

// Projects
import Holon from '../projects/Holon.js'
import BombayBeach from '../projects/BombayBeach.js'
import ThreeEcologies from '../projects/ThreeEcologies.js'
import EthereumFarm from '../projects/EthereumFarm.js'
import BendTheRules from '../projects/BendTheRules.js'
import Nest from '../projects/Nest.js'
import FigmentsOfDesire from '../projects/FigmentsOfDesire.js'
import FigmentsOfAttention from '../projects/FigmentsOfAttention.js'
import GrooveBody from '../projects/GrooveBody.js'
import OntologyOfCryptocollectibles from '../projects/OntologyOfCryptocollectibles.js'
import BreathFoliage from '../projects/BreathFoliage.js'
import GenerativeDecay from '../projects/GenerativeDecay.js'
import Unnamed from '../projects/Unnamed.js'
import ParabolicSound from '../projects/ParabolicSound.js'
import Earthlens from '../projects/Earthlens.js'
import TreeOfLife from '../projects/TreeOfLife.js'
import SonicNegotiation from '../projects/SonicNegotiation.js'
import Virtues from '../projects/Virtues.js'
import MagicMic from '../projects/MagicMic.js'
import Skype from '../projects/Skype.js'
import Momimsafe from '../projects/momimsafe.js'
import CenterofVaryingGravity from '../projects/CenterofVaryingGravity.js'
import JanusStudy from '../projects/JanusStudy.js'
import MomentofEnigma from '../projects/MomentofEnigma.js'
import Timekeepers from '../projects/Timekeepers.js'
import Babble from '../projects/Babble.js'
import BiographyofaPortrait from '../projects/Biographyofaportrait.js'
import KidGames from '../projects/KidGames.js'
import FourthDimension from '../projects/FourthDimension.js'
import EmbroidererdTouch from '../projects/EmbroidererdTouch.js'

const styles = {
  container: {
    padding: padding.small,
    paddingBottom: padding.big,

    '@media (min-width: 450px)': {  
      padding: padding.big
    },

    '@media (min-width: 600px)': {  
      // no change
    },

    '@media (min-width: 750px)': {  
      paddingLeft: padding.extraBig,
      paddingRight: padding.extraBig
    },

    '@media (min-width: 900px)': {
      paddingLeft: padding.massive,
      paddingRight: padding.massive
    },

    '@media (min-width: 1200px)' : {
      paddingLeft: padding.veryMassive,
      paddingRight: padding.veryMassive
    },

    '@media (min-width: 1400px)' : {
      paddingLeft: padding.extraMassive,
      paddingRight: padding.extraMassive
    },

    '@media (min-width: 1700px)' : {
      paddingLeft: padding.veryInsane,
      paddingRight: padding.veryInsane
    }
  },

  empty: {
    height: padding.extraBig
  }
};

// Save the history on the website. 
const history = createBrowserHistory();
history.listen(location => {
  ReactGa.set({ page: location.hash})
  ReactGa.pageview(location.hash); 
}); 

function App() {
  // Initialize analytics with the ID. 
  useEffect(() => {
    ReactGa.initialize('UA-187946979-1'); 

    ReactGa.pageview(window.location.hash); 
  });

  return (
      <div style={styles.container}>
        <Router basename={process.env.PUBLIC_URL}> 
          <ScrollToTop /> 
          <Switch>
            <Route path="/Works"><Title /><Grid /></Route>
            <Route path="/Bio"><Title /><Bio /></Route>
            <Route path="/About"><Title /><About /></Route>
            <Route path="/momentofenigma"><MomentofEnigma /></Route>
            <Route path="/touch"><EmbroidererdTouch /></Route>
            <Route path="/fourthdimension"><FourthDimension /></Route>
            <Route path="/kidgames"><KidGames /></Route>
            <Route path="/biography"><BiographyofaPortrait /></Route>
            <Route path="/timekeepers"><Timekeepers /></Route>
            <Route path="/centerofvaryinggravity"><CenterofVaryingGravity /></Route>
            <Route path="/Janus"><JanusStudy /></Route>
            <Route path="/momimsafe"><Momimsafe /></Route>
            <Route path="/Holon"><Holon /></Route>
            <Route path="/Babble"><Babble /></Route>
            <Route path="/BombayBeach"><BombayBeach /></Route>
            <Route path="/ThreeEcologies"><ThreeEcologies /></Route>
            <Route path="/BendTheRules"><BendTheRules /></Route>
            <Route path="/EthereumFarm"><EthereumFarm /></Route>
            <Route path="/Nest"><Nest /></Route>
            <Route path="/FigmentsOfDesire"><FigmentsOfDesire /></Route>
            <Route path="/FigmentsOfAttention"><FigmentsOfAttention /></Route>
            <Route path="/GrooveBody"><GrooveBody /></Route>
            <Route path="/PostCryptocollectible"><OntologyOfCryptocollectibles /></Route>
            <Route path="/BreathFoliage"><BreathFoliage /></Route>
            <Route path="/GenerativeDecay"><GenerativeDecay /></Route>
            <Route path="/Unnamed"><Unnamed /></Route>
            <Route path="/ParabolicSound"><ParabolicSound /></Route>
            <Route path="/TreeOfLife"><TreeOfLife /></Route>
            <Route path="/SonicNegotiations"><SonicNegotiation /></Route>
            <Route path="/Virtues"><Virtues /></Route>
            <Route path="/EarthLens"><Earthlens /></Route>
            <Route path="/MagicMic"><MagicMic /></Route>
            <Route path="/Skype"><Skype /></Route>
            <Route path="/"><Title /><About /></Route>
          </Switch>
        </Router>
        <div style={styles.empty}>
        </div>
        <Footer />
      </div>
    );
}

export default Radium(App)