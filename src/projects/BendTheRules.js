import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import donotenter from '../images/BendTheRules/donotenter.jpg'
import merge from '../images/BendTheRules/merge.jpg'
import roughroad from '../images/BendTheRules/roughroad.jpg'
import slow from '../images/BendTheRules/slow.jpg'
import stop from '../images/BendTheRules/stop.jpg'
import myield from '../images/BendTheRules/yield.jpg'

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
};

const bodyA="Bend the Rules is an experimental project to create Risograph prints with "
const link=<CustomLink to="https://antiboredom.github.io/p5.riso/" inline={true}>p5 riso</CustomLink>
const bodyB=" library. Images of American road signs were fed into custom software, which applied repetition and transformation techniques to create tainted abstractions of the originals."

class BendTheRules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle=[commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Bend the Rules" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {link}
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'Stop'} src={stop}/>
                  <img style={commonWorkStyles.twoImages} alt={'Do Not Enter'} src={donotenter}/>
                </div>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={twoImageStyle} alt={'Rough Road'} src={roughroad}/>
                  <img style={twoImageStyle} alt={'Slow'} src={slow}/>
                </div>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={twoImageStyle} alt={'Yield'} src={myield}/>
                  <img style={twoImageStyle} alt={'Merge'} src={merge}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(BendTheRules);