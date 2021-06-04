import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import { commonWorkStyles } from '../components/CommonStyles.js'
import saturate from '../images/FigmentsOfAttention/saturate.jpg'
import distract from '../images/FigmentsOfAttention/distract.jpg'
import cacophony from '../images/FigmentsOfAttention/cacophony.jpg'
import merge from '../images/FigmentsOfAttention/merge.jpg'

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

const body="Figments of Attention is a metaphorical system of a swarm of synthetic agents called 'figments'. Collectively, their flock moves like a stream of human attention; however, by encountering apps along the way, they get distracted and break away from the swarm. Everytime the swarm starts disintegrating, a cacophony of the sound of addiction breaks out. Due to the constant rate of notifications we are fed, Figments of Attention responds to our fragile ability to focus on everyday tasks.";

class FigmentsOfAttention extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle = [commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery];
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Figments of Attention" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Saturate'} src={saturate}/>
                    <img style={commonWorkStyles.twoImages} alt={'Distract'} src={distract}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Cacophony'} src={cacophony}/>
                    <img style={twoImageStyle} alt={'Merge'} src={merge}/>
                  </div>
                  <div style={vimeoContainer}>
                    <iframe title={'Figments of Attention'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/314178755" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(FigmentsOfAttention);