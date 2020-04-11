import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/SonicNegotiations/one.jpg'
import two from '../images/SonicNegotiations/two.jpg'
import three from '../images/SonicNegotiations/three.jpg'
import four from '../images/SonicNegotiations/four.jpg'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'row'
    }
};

const body="A Sonic Negotiation is a dialog between the audience and the sound around them. It draws from the history of control to create an interactive system where the relative distance between the audience determines the effective clarity of an audio lecture called 'What Do You Desire' by Alan Watts. The philosophical discourse argues that the potential thing that one desires if money was not an object is to be in control. By using Computer Vision (Kinect), the audience is mapped on the screen as a topographical graph, therebey controlling a unique audio effect like reverb, delay, pitch, or distortion upon their entry into the room."

class SonicNegotiation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle=[commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 
    const vimeoContainer=[commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery];
    return (
        <div style={styles.container}>
            <Header title="Sonic Negotiations" />
            <div style={styles.content}>
                 <div style={commonWorkStyles.body}>
                  {body}
                 </div>
            </div>
            <div style={commonWorkStyles.imgContainer}>
              <div style={commonWorkStyles.multiImageContainer}>
                <img style={commonWorkStyles.twoImages} alt={'One'} src={one}/>
                <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
              </div>
              <div style={commonWorkStyles.multiImageContainer}>
                <img style={twoImageStyle} alt={'Three'} src={three}/>
                <img style={twoImageStyle} alt={'Four'} src={four}/>
              </div>
              <div style={vimeoContainer}>
                <iframe title={'Sonic Negotiations'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/252019016" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(SonicNegotiation);