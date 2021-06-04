import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import { commonWorkStyles } from '../components/CommonStyles.js'
import desiretop from '../images/FigmentsOfDesire/desiretop.jpg'
import desirescreen from '../images/FigmentsOfDesire/desirescreen.jpg'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'column'
    }
}

const body="Figments of Desire is an audio-visual installation examining the poetics of attraction through two synthetic agents that are choreographed to a musical score. The sonic composition activates the agents to unwind a generative narrative of behaviors of attraction, repulsion, and entanglement. This synthetic couple explores its states of desires in this artificial life system."

class FigmentsOfDesire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer]; 

    return (
        <div style={styles.container}>
            <Header title="Figments of Desire" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                      <img style={commonWorkStyles.twoImages} alt={'Desire Top'} src={desiretop}/>
                      <img style={commonWorkStyles.twoImages} alt={'Desire Screen'} src={desirescreen}/>
                  </div>
                  <div style={vimeoContainer}>
                    <iframe title={'Figments of Desire'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/339162844" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(FigmentsOfDesire);