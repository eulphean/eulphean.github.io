import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import installation from '../images/ParabolicSound/installation.jpg'
import circuit from '../images/ParabolicSound/circuit.jpg'
import schematic from '../images/ParabolicSound/schematic.jpg'

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

const body="Parabolic Sound is an interactive sound installation that converts a handcrafted metal dish into a capacitive touch sensitive sensor. Along with a digital interface, where the audience can select various audio samples and effects, the work is an exploration of novel gestural relatipships between the conductive capacity of human skin and sound."

class ParabolicSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const oneImageStyle = [commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery];
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Parabolic Sound" />
            <div style={styles.content}>
                 <div style={commonWorkStyles.body}>
                   {body}
                 </div>
                 <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                      <img style={commonWorkStyles.image38} alt={'Installation'} src={installation}/>
                      <img style={commonWorkStyles.image60} alt={'Circuit'} src={circuit}/>
                  </div>
                  <img style={oneImageStyle} alt={'Schematic'} src={schematic}/>
                  <div style={vimeoContainer}>
                      <iframe title={'Parabolic Sound'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/252968397" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                 </div>
            </div>
        </div>
    );
  }
}

export default Radium(ParabolicSound);