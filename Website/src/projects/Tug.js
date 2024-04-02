import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Tug/1.jpg'
import two from '../images/Tug/2.jpg'
import three from '../images/Tug/3.jpg'
import four from '../images/Tug/4.jpg'
import five from '../images/Tug/5.jpg'
import six from '../images/Tug/6.jpg'

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


const bodyA=<span>The Tug is an artistic intervention that reinterprets the iconic lions at the Art Instituteof Chicago. Instead of being segregated in two corners of North & South, the sculpture confronts them together on a broken cross-section of a street bringing a new perspective to the symbolism.</span>
const bodyB=<span>The piece captures a powerful moment of tension between the two lions. While one is in an aggressive pose, the other equally if not strong, is seen defending its position. This Tug represents a metaphorical dialogue between the segregated voices of Chicago, aiming to foster an atmosphere of mutual understanding.</span>
const bodyC=<span>The Tug is currently being fabricated at the studio.</span>
const bodyD=<span>Collaborator: <CustomLink to='https://www.behance.net/braxtonchassag?locale=en_US&' inline={true}>Braxton Myles</CustomLink></span>

class Tug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="The Tug" />
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
                    <img style={commonWorkStyles.oneImage} alt={'One'} src={one}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Two'} src={two}/>
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
            </div>
        </div>
    );
  }
}

export default Radium(Tug);