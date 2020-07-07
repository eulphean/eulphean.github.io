import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'

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



const link0=(<CustomLink to='https://covg.art' inline={true}>Center of (Varying) Gravity</CustomLink>);
const bodyA=' draws from the visual language of fractal patterns to create a generative-meditative simulation of light, and is a visual response to a writing prompt by Chicago based literary artist, Brianna Santina. It takes its point of departure in the context of unpredictability and readjustment to devise a symbol of courage and motivation to face the varying uncertainty. Due to its mathematical nature, the simulation evolves with time while refracting a myriad of colors that are inspired from the writer’s description of a personal state of transformation during the covid-19 lockdown in Chicago. The work is originally conceptualized for the show ';
const linkA=(<CustomLink to='https://www.themartinchicago.com/locus-i-v' inline={true}>LOCUS IV</CustomLink>);
const bodyB=' at The Martin Gallery in Chicago, curated by Whitney LaMora.';

class CenterofVaryingGravity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Center of (Varying) Gravity" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {link0}
                {bodyA}
                {linkA}
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Center of (Varying) Gravity'} style={commonWorkStyles.webFrame} src={'https://covg.art'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(CenterofVaryingGravity);