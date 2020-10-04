import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import posterA from '../images/Timekeepers/poster_0.jpg'
import posterB from '../images/Timekeepers/poster_1.jpg'
import posterC from '../images/Timekeepers/poster_2.jpg'
import imageA from '../images/Timekeepers/image_1.jpg'
import imageB from '../images/Timekeepers/image_2.jpg'
import imageC from '../images/Timekeepers/image_3.jpg'
import imageE from '../images/Timekeepers/image_5.jpg'
import imageF from '../images/Timekeepers/image_6.jpg'
import imageG from '../images/Timekeepers/image_7.jpg'
import imageH from '../images/Timekeepers/image_8.jpg'

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

    bottomPadding: {
        marginBottom: padding.small
    },

    topPadding: {
        marginTop: padding.small
    }
};

const bodyA="Timekeepers is a virtual art installation developed for Burning Man 2020, which was hosted in Altspace VR (a social Virtual Reality platform), due to the pandemic. It is inspired by the ancient Roman figure Janus - a two-faced God, where one head points to the past and the other to the future. In acient mythology, Janus is considered a guardian of time, transitions, doorways, passages and is a representation of duality. This work is an extension of my on-going collaboration with Chicago-based artist ";
const linkA=(<CustomLink to='https://www.philipmulliken.com/' inline={true}>Philip Mulliken.</CustomLink>);
const bodyC="The theme of this virtual world revolves around the purpose of Time; especially confronting the duality of past and future to accept the temporal becoming of the present. For the duration of Burning Man, several social events like live music night with DJ Nitzo and a healing group discussion with entrepreneur, workshop facilitator, and meditation instructor Lee Cholodenko were programmed."
const bodyD="An hourglass is a timekeeper and also a metaphor for the duality of Janus. In Timekeepers, we created a visual experience from this dualism. On the ground, sits the mammoth Janus sculpture surrounded by architectural scaffolding to provide viewers a resting place. Below the ground exist immersive viewing rooms to experience self-evolving organic timescapes. Together, these experiences constitute Timekeepers.";
class Timekeepers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle=[commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 

    const oneImgStyle = [commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery];

    return (
        <div style={styles.container}>
            <Header title="Timekeepers" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'PosterA'} src={posterA}/>
                    <img style={commonWorkStyles.threeImages} alt={'PosterB'} src={posterB}/>
                    <img style={commonWorkStyles.threeImages} alt={'PosterC'} src={posterC}/>
                </div>
              </div>
              <div style={[commonWorkStyles.body]}>
                {bodyC}
              </div>
              <img style={oneImgStyle} alt={'A'} src={imageA}/>
              <div style={[commonWorkStyles.multiImageContainer, styles.bottomPadding]}>
                <img style={twoImageStyle} alt={'B'} src={imageB}/>
                <img style={twoImageStyle} alt={'C'} src={imageC}/>
              </div>
              <div style={commonWorkStyles.body}>
                {bodyD}
              </div>
              <div style={[commonWorkStyles.multiImageContainer, commonWorkStyles.imgMediaQuery]}>
                    <img style={commonWorkStyles.threeImages} alt={'F'} src={imageF}/>
                    <img style={commonWorkStyles.threeImages} alt={'G'} src={imageG}/>
                    <img style={commonWorkStyles.threeImages} alt={'H'} src={imageH}/>
                </div>
              <img style={oneImgStyle} alt={'E'} src={imageE}/>
            </div>
        </div>
    );
  }
}

export default Radium(Timekeepers);