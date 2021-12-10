import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Covg/one.jpg'
import two from '../images/Covg/two.jpg'
import three from '../images/Covg/three.jpg'

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



const bodyA=<span><CustomLink to='https://covg.art' inline={true}>Center of (Varying) Gravity</CustomLink> is a <span style={commonWorkStyles.italics}>Timescape</span> drawing from the visual language of fractal patterns to create a generative-meditative simulation of light. The Rorschach pattern like imagery oscillates with a variable force around a central point on the screen. It takes its point of departure in the context of unpredictability and readjustment to devise a symbol of courage and motivation to face the varying uncertainty. Due to its mathematical nature, the simulation evolves with time while refracting a myriad of colors that are inspired from a Fuchsia flower. The work was originally conceptualized for the show <CustomLink to='https://www.themartinchicago.com/locus-i-v' inline={true}>LOCUS IV</CustomLink> at The Martin Gallery in Chicago, curated by Whitney LaMora.</span>
class CenterofVaryingGravity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];
    
    return (
        <div style={styles.container}>
            <Header title="Center of (Varying) Gravity" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Center of (Varying) Gravity'} style={commonWorkStyles.webFrame} src={'http://covg.art'}></iframe>
              </div>
              <div style={containerStyle}>
                <iframe title={'Center of (Varying) Gravity'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/523963986" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(CenterofVaryingGravity);