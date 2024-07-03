import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Timegrapher/1.jpg'
import two from '../images/Timegrapher/2.jpg'
import three from '../images/Timegrapher/3.jpg'
import four from '../images/Timegrapher/4.jpg'
import five from '../images/Timegrapher/5.jpg'
import six from '../images/Timegrapher/6.jpg'
import seven from '../images/Timegrapher/7.jpg'
import eight from '../images/Timegrapher/8.jpg'
import nine from '../images/Timegrapher/9.jpg'
import ten from '../images/Timegrapher/10.jpg'
import eleven from '../images/Timegrapher/11.jpg'

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


const bodyA=<span>This work was originally conceived as a 3D model during my collaboration with Phillip Mulliken for <CustomLink italics to='https://works.amaykataria.com/#/momimsafe' inline={true}>Janus Study (2020)</CustomLink>, where we reimagined the Janus heads by pulling them apart and intertwining them using computational tools. This created a poignant confrontation between the past and the future, with the present stretched out in a poetic display.
</span>
const bodyB=<span>In <span style={commonWorkStyles.italics}>Timegrapher (2024)</span>, the virtual sculpture is translated into a tangible form. The 3D model is sliced into six distinct pieces, 3D printed, and joined together. Due to its laborious creation process using machines and historical symbolism of time, the title of the work, "Timegrapher" alludes to a mechanical device used to measure a clock's accuracy.</span>
const bodyC=<span>Photos: <CustomLink to='https://www.jonmichaelphoto.com/' inline={true}>Jonathan Michael Castillo</CustomLink></span>

class Timegrapher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Timegrapher" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                <br/><br/>
                {bodyB}
                <br/><br/>
                {bodyC}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'One'} src={one}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Four'} src={four}/>
                    <img style={commonWorkStyles.twoImages} alt={'Five'} src={five}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                    <img style={commonWorkStyles.twoImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Eight'} src={eight}/>
                    <img style={commonWorkStyles.twoImages} alt={'Nine'} src={nine}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Ten'} src={ten}/>
                    <img style={commonWorkStyles.twoImages} alt={'Eleven'} src={eleven}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Timegrapher);