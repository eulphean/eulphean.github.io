import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles, padding, boxShadow} from '../components/CommonStyles.js'
import chatsubo from '../images/BombayBeach/chatsubo.jpg'
import stagedesign from '../images/BombayBeach/stagedesign.jpg'
import stagebuilt from '../images/BombayBeach/stagebuilt.jpg'
import stageconstruct from '../images/BombayBeach/stageconstruct.jpg'
import landaerial from '../images/BombayBeach/landaerial.jpg'
import landmake from '../images/BombayBeach/landmake.jpg'
import landmakeface from '../images/BombayBeach/landmakeface.jpg'

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

    iframecontainer: {
      display: 'block',
      position: 'relative',
      width: '100%',
      padding: 0,
      overflow: 'hidden'
    }, 

    iframe: {
      width: '100%',
      height: '100%',
      marginTop: padding.small,
      marginBottom: padding.small,
      border: 'none',
      boxShadow: boxShadow.alphaDeepBlueSoft,
      alignSelf: 'stretch'
    }
}

const bodyA="Silent City is a 5 minute long silent film that documents my day to day excursions at Bombay Beach, CA. I was invited there for the "
const linkA=(<CustomLink to='https://brahman.ai/' inline={true}>BRAHMAN residency</CustomLink>);
const bodyB=" by ";
const linkB=(<CustomLink to="https://genekogan.com/" inline={true}>Gene Kogan</CustomLink>);
const bodyC=". It is a deserted city next to an ecologically damaged lake called Salton Sea. There, I joined a group of artists to develop new aesthetic infrastructure and to bring the spirit of arts in this lost community. During this residency, I created land art, designed a stage for multimedia performances using 17' pallet racks, gave a workshop and artist talk, and documented aerial views of the prevailing emptiness in this city using a drone. Silent City was shown as a 4-channel video installation on my last day there."

class BombayBeach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle = [commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery];
     
    return (
        <div style={styles.container}>
            <Header title="Silent City" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
                {bodyB}
                {linkB}
                {bodyC}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                 <img style={commonWorkStyles.oneImage} alt={'Chatsubo'} src={chatsubo}/>
                 <div style={commonWorkStyles.multiImageContainer}>
                  <img style={twoImageStyle} alt={'Stage Design'} src={stagedesign}/>
                  <img style={twoImageStyle} alt={'Stage Construct'} src={stageconstruct}/>
                </div>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={twoImageStyle} alt={'Stage Built'} src={stagebuilt}/>
                  <img style={twoImageStyle} alt={'Land Aerial'} src={landaerial}/>
                </div>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={twoImageStyle} alt={'Land Make'} src={landmake}/>
                  <img style={twoImageStyle} alt={'Land Make Face'} src={landmakeface}/>
                </div>
                <div style={vimeoContainer}>
                  <iframe title={'Silent City'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/405719705" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(BombayBeach);