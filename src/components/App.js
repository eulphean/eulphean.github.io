import React from 'react'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About.js'
import Bio from './Bio.js'
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

const styles = {
  container: {
    padding: padding.small,

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
  }
};

function App() {
  // Crazy Router Paths
  // Title Paths
  // Work Paths
  return (
      <div style={styles.container}>
        <Router basename={process.env.PUBLIC_URL}> 
          <ScrollToTop /> 
          <Switch>
            <Route path="/Works"><Title /><Grid /></Route>
            <Route path="/Bio"><Title /><Bio /></Route>
            <Route path="/About"><Title /><About /></Route>
            <Route path="/momentofenigma"><MomentofEnigma /></Route>
            <Route path="/timekeepers"><Timekeepers /></Route>
            <Route path="/centerofvaryinggravity"><CenterofVaryingGravity /></Route>
            <Route path="/Janus"><JanusStudy /></Route>
            <Route path="/momimsafe"><Momimsafe /></Route>
            <Route path="/Holon"><Holon /></Route>
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
      </div>
    );
}

export default Radium(App)