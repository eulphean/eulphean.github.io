import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import cover from '../images/ShadowsOfTime/cover.jpg'
import janus from '../images/ShadowsOfTime/janus.gif'
import hourglass from '../images/ShadowsOfTime/hourglass.gif'
import one from '../images/ShadowsOfTime/j-morning.jpg'
import two from '../images/ShadowsOfTime/h-morning.jpg'
import three from '../images/ShadowsOfTime/j-afternoon.jpg'
import four from '../images/ShadowsOfTime/h-afternoon.jpg'
import five from '../images/ShadowsOfTime/j-evening.jpg'
import six from '../images/ShadowsOfTime/h-evening.jpg'

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


const bodyA=<span>This work is an evolution of my video work from the past called <CustomLink italics to='https://works.amaykataria.com/#/momimsafe' inline={true}>Janus Study (2020)</CustomLink>. For this work, the <CustomLink italics to='https://works.amaykataria.com/#/timegrapher' inline={true}>Timegrapher (2024)</CustomLink> sculpture is repositioned in a meticulously crafted, hyper-realistic virtual world. </span>
const bodyB=<span>In the first scene, a majestic sculpture stands atop a water stream with its heads resting on cliffs, overlooked by snow-capped mountains, trees, and birds. In contrast, a mystical hourglass is positioned within the aura of a cave, marking the passage of time with its luminescent sand. The video dances through the day in three movements: morning, afternoon, and evening, while oscillating between these two scenes.</span>
const bodyC=<span><span style={commonWorkStyles.italics}>Shadows of Time (2024)</span> subtly hints at the intriguing dis/connect between our internal and external perceptions of time. It employs the symbolism of the <span style={commonWorkStyles.italics}>Timegrapher"</span> sculpture to construct a mystical universe where the line between subjective and objective blurs. It's an exploration of time's enigma, a journey to the pith of our experience of existence.</span>
const bodyD=<span>Photos: <CustomLink to='https://www.jonmichaelphoto.com/' inline={true}>Jonathan Michael Castillo</CustomLink></span>

class ShadowsOfTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Shadows of Time" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                <br/><br/>
                {bodyB}
                <br/><br/>
                {bodyC}
                <br/><br/>
                {bodyD}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Cover'} src={cover}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Janus'} src={janus}/>
                    <img style={commonWorkStyles.twoImages} alt={'Hourglass'} src={hourglass}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                    <img style={commonWorkStyles.twoImages} alt={'Four'} src={four}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Liarbirds'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/972425893?h=10e927a970&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(ShadowsOfTime);