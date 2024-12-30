import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, fontSize} from '../components/CommonStyles.js'
import zero from '../images/Metapets/0.jpg'
import one from '../images/Metapets/1.jpg'
import two from '../images/Metapets/2.jpg'
import three from '../images/Metapets/3.jpg'
import four from '../images/Metapets/4.jpg'
import five from '../images/Metapets/5.jpg'
import six from '../images/Metapets/6.jpg'
import seven from '../images/Metapets/7.jpg'
import eight from '../images/Metapets/8.jpg'

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


const bodyA=<span>Do you have a pet? Perhaps, you need a <span style={commonWorkStyles.italics}>Metapet</span> to immortalize its eternal love. </span>
const bodyB=<span>This ongoing investigation began with Bella, a majestic Persian cat whose flowing fur and regal demeanor sparked the imagination. Could digital art capture not just the physical form, but the essence of our beloved companions? </span>
const bodyC=<span>Using the faceted design language of <span style={commonWorkStyles.italics}><CustomLink to='https://works.amaykataria.com/#/metagems' inline={true}>Metagems</CustomLink></span>, this journey into Metapets transforms our furry friends into timeless digital beings, starting with Bella's graceful transformation from a physical Persian cat into a digital guardian. </span>
const bodyD=<span>Collaborator: <CustomLink to='https://www.behance.net/braxtonchassag?locale=en_US&' inline={true}>Braxton Myles</CustomLink></span>

class Metapets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Metapets" />
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
                    <img style={commonWorkStyles.oneImage} alt={'Zero'} src={zero}/>
                </div>
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
                    <img style={commonWorkStyles.oneImage} alt={'Four'} src={four}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                  <img style={commonWorkStyles.threeImages} alt={'Six'} src={six}/>
                  <img style={commonWorkStyles.threeImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Eight'} src={eight}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Metapets'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/1042839841?h=10e927a970&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Metapets);