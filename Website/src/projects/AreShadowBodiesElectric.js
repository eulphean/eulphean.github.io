import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, fontSize} from '../components/CommonStyles.js'
import one from '../images/AreShadowBodiesElectric/1.jpg'
import two from '../images/AreShadowBodiesElectric/2.jpg'
import three from '../images/AreShadowBodiesElectric/3.jpg'
import four from '../images/AreShadowBodiesElectric/4.jpg'
import five from '../images/AreShadowBodiesElectric/5.jpg'
import six from '../images/AreShadowBodiesElectric/6.jpg'
import seven from '../images/AreShadowBodiesElectric/7.jpg'
import eight from '../images/AreShadowBodiesElectric/8.jpg'

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


const bodyA=<span>Curated by <CustomLink to='https://www.shellybahl.com/' inline={true}>Shelly Bahl</CustomLink>, this show is the contemporary counterpart of <CustomLink italics to='https://www.saichicago.org/exhibition/seen-and-unseen-south-asian-american-art-in-chicago' inline={true}>What Is Seen and Unseen</CustomLink> - a groundbreaking exhibition that ambitiously attempts to present a comprehensive map of South Asian artists and their art production in Chicago's art history. </span>
const bodyB=<span>It comprises of two parallel exhibitions: <span style={commonWorkStyles.italics}>Shadows Dance Within the Archive</span>, an archival exhibition of over 125 years of under-documented exhibition and cultural history, and <span style={commonWorkStyles.italics}>Are Shadow Bodies Electric?</span>, a thematic exhibition featuring 8 contemporary artists ending with themes of visible and invisible bodies outside of time, space, and place.</span>
const bodyC=<span>Some of my new and previous works like <CustomLink italics to='https://works.amaykataria.com/#/momimsafe' inline={true}>Momimsafe (2020)</CustomLink>, <CustomLink italics to='https://works.amaykataria.com/#/holons' inline={true}>Tend Towards Infinity (2020)</CustomLink>, <CustomLink italics to='https://works.amaykataria.com/#/shadowsoftime' inline={true}>Shadows of Time (2024)</CustomLink>, and <CustomLink italics to='https://works.amaykataria.com/#/momimsafe' inline={true}>Timegrapher (2024)</CustomLink> are presented as installations in this exhibition. <span style={commonWorkStyles.italics}>What Is Seen and Unseen</span> runs from May 28 - October 24, 2024 at South Asia Institute in Chicago.</span>
const bodyD=<span>Photos: <CustomLink to='https://www.jonmichaelphoto.com/' inline={true}>Jonathan Michael Castillo</CustomLink> and <CustomLink to='https://www.pratyushswarup.com/' inline={true}>Pratyush Swarup</CustomLink></span>

class AreShadowBodiesElectric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Are Shadow Bodies Electric" />
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
                    <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Four'} src={four}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Five'} src={five}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                    <img style={commonWorkStyles.twoImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Eight'} src={eight}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(AreShadowBodiesElectric);