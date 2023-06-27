import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import left from '../images/LostPassage/lost.gif'
import right from '../images/LostPassage/pigeon.mp4'
import shooting from '../images/LostPassage/shooting.jpg'
import flock from '../images/LostPassage/flock.jpg'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'column'
    },

    info: {
      marginTop: padding.small,
      textAlign: 'center'
    }
}

const body=<span>In 1914, the passenger pigeon succumbed to the pressures of a rapidly industrialising world and faced extinction. <CustomLink to='https://thelostpassage.art' inline={true}>The Lost Passage</CustomLink> puts us in contact with a new virtual ‘habitat’ where pigeons populate a digital landscape and act as a substitute for real pigeons, navigating a constantly moving environment crafted with machine learning algorithms.</span>
const info=<span style={[styles.info, commonWorkStyles.body]}>Depiction of a shooting in northern Louisiana, Smith Bennett, 1875, Source: <CustomLink to='https://en.wikipedia.org/wiki/Passenger_pigeon' inline={true}>Wikipedia</CustomLink></span>
class LostPassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="The Lost Passage" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Left'} src={left}/>
                    <video autoPlay loop style={commonWorkStyles.twoImages} alt={'Right'} src={right}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'shoot'} src={shooting}/>
                    <img style={commonWorkStyles.twoImages} alt={'flock'} src={flock}/>
                </div>
              </div>
              {info}
              <div style={containerStyle}>
                <iframe title={'The Lost Passage'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/840253349?h=b61d82ba81&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(LostPassage);

