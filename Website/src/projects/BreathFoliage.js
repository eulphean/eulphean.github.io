import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import treeone from '../images/BreathFoliage/treeone.jpg'
import treetwo from '../images/BreathFoliage/treetwo.jpg'
import treethree from '../images/BreathFoliage/treethree.jpg'

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

const body="Breath Foliage is an interactive work that reflects on the symbiotic relationship between humans and their surroundings through the metaphor of breath. Participants exhale into a gas station, which collects their breath and converts it into the branches of a virtual tree. With every breath, the foliage grows a litte, eventually turning into a fully grown tree."

class BreathFoliage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 
    return (
        <div style={styles.container}>
            <Header title="Breath Foliage" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.threeImages} alt={'Tree One'} src={treeone}/>
                  <img style={commonWorkStyles.threeImages} alt={'Tree Two'} src={treetwo}/>
                  <img style={commonWorkStyles.threeImages} alt={'Tree Three'} src={treethree}/>
                </div>
                <div style={vimeoContainer}>
                  <iframe title={'Breath Foliage'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/268388094" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(BreathFoliage);