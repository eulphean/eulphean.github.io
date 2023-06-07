import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import one from '../images/AndTheHungryWereFed/1.jpg'
import two from '../images/AndTheHungryWereFed/2.jpg'
// import three from '../images/AndTheHungryWereFed/3.jpg'
// import four from '../images/AndTheHungryWereFed/4.jpg'
import five from '../images/AndTheHungryWereFed/5.jpg'
import six from '../images/AndTheHungryWereFed/6.jpg'
// import seven from '../images/AndTheHungryWereFed/7.jpg'
// import eight from '../images/AndTheHungryWereFed/8.jpg'
import nine from '../images/AndTheHungryWereFed/9.jpg'
import ten from '../images/AndTheHungryWereFed/10.jpg'
// import eleven from '../images/AndTheHungryWereFed/11.jpg'
// import twelve from '../images/AndTheHungryWereFed/12.jpg'
import thirteen from '../images/AndTheHungryWereFed/13.jpg'
import fourteen from '../images/AndTheHungryWereFed/14.jpg'

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

    additionPadding: {
        marginTop: padding.verySmall
    },
};

const bodyA=<span><span style={commonWorkStyles.italics}>And The Hungry Were Fed</span> is an audio-visual performance developed by Amay Kataria that revolves around a heap of edible rice flour. It draws from an ancient ritual practice of kōlam-making, where thousands of women in Southern India routinely perform bodily gestures at dawn to draw ornate designs on the floor. These inscriptions are crafted with rice flour, which becomes food for birds, insects, and nonhumans throughout the day, establishing a bond of reciprocity, offering, and kinship between humans and our significant others who make up this world. </span>; 
const bodyB=<span>Departing from folklore, mathematics, and art, <span style={commonWorkStyles.italics}>And The Hungry Were Fed</span> expands our appetite for solidarity to include nonhumans, and weave an intersubjective relationship with our natural world.</span>
const bodyC=<span><br /><br/>Performance by Caris Dempster & Clarence Garcia De Presno</span>
// const bodyD=<span><br />Concept, graphics, and sound by Amay Kataria</span>
class AndTheHungryWereFed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="And The Hungry Were Fed" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                    {bodyA}
                    {bodyB}
                    {bodyC}
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'One'} src={one}/>
                        <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                    </div>
                </div>
                {/* <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                        <img style={commonWorkStyles.twoImages} alt={'Four'} src={four}/>
                    </div>
                </div> */}
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Five'} src={five}/>
                        <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                    </div>
                </div>
                {/* <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Seven'} src={seven}/>
                        <img style={commonWorkStyles.twoImages} alt={'Eight'} src={eight}/>
                    </div>
                </div> */}
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Nine'} src={nine}/>
                        <img style={commonWorkStyles.twoImages} alt={'Ten'} src={ten}/>
                    </div>
                </div>
                {/* <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Eleven'} src={eleven}/>
                        <img style={commonWorkStyles.twoImages} alt={'Twelve'} src={twelve}/>
                    </div>
                </div> */}
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Thirtee'} src={thirteen}/>
                        <img style={commonWorkStyles.twoImages} alt={'Fourteen'} src={fourteen}/>
                    </div>
                </div>
                <div style={containerStyle}>
                    <iframe title={'Supersynthesis'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/809202728" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(AndTheHungryWereFed);