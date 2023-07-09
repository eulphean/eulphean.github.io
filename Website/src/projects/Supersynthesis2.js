import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/supersynthesis_bridge/1.jpg'
import two from '../images/supersynthesis_bridge/2.jpg'
import three from '../images/supersynthesis_bridge/3.jpg'
import four from '../images/supersynthesis_bridge/4.jpg'
import five from '../images/supersynthesis_bridge/5.jpg'
import six from '../images/supersynthesis_bridge/6.jpg'
import seven from '../images/supersynthesis_bridge/7.jpg'
import eight from '../images/supersynthesis_bridge/8.jpg'

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


const bodyA=<span>This second iteration of <CustomLink to='https://amaykataria.com/#/Supersynthesis' inline={true}>Supersynthesis</CustomLink> was developed as part of the <CustomLink to='https://www.hydeparkart.org/get-involved/artist-opportunities/bridge-program/' inline={true}>Bridge program</CustomLink> at Hyde Park Art Center. For this site-specific version, the piece activated the street-facing windows in the Hyde Park Art Center library. With a major software and hardware upgrade, this interactive artwork became accessible to the Hyde Park community through a QR code placed on the window. This allowed people to modify the installation from outside the art center.</span>
const bodyB=<span>The upgraded version of Supersynthesis engaged the community and showcased the potential of interactive public art. Visitors could experiment with the installation's audio and visual elements while gaining a deeper appreciation for the experience. This iteration was also a testament to the power of community-driven projects, as it was developed in collaboration with the Hyde Park Art Center and the Bridge program.</span>

class Supersynthesis2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Supersynthesis II" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                <br />
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={four}/>
                    <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Eight'} src={eight}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                    <img style={commonWorkStyles.twoImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Supersynthesis2);