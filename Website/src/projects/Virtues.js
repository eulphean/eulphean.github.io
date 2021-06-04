import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import processing from '../images/Virtues/processing.jpg'
import modesty from '../images/Virtues/modesty.jpg'
import ambition from '../images/Virtues/ambition.jpg'
import friendliness from '../images/Virtues/friendliness.jpg'
import liberality from '../images/Virtues/liberality.jpg'
import magnanimity from '../images/Virtues/magnanimity.jpg'
import magnificence from '../images/Virtues/magnificence.jpg'
import patience from '../images/Virtues/patience.jpg'
import righteous from '../images/Virtues/righteous.jpg'
import soundcloud from '../images/Virtues/soundcloud.jpg'
import temperance from '../images/Virtues/temperance.jpg'
import truthfulness from '../images/Virtues/truthfulness.jpg'
import wittiness from '../images/Virtues/wittiness.jpg'

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

const body="Virtues draws inspiration from the philosophy of Aristotle's Nicomachean Ethics, where he explores the reasons behind the well being of humans. He rationalizes twelve virtues, which one should learn to identify in themselves and honor in others. These are courage, temperance, liberality, magnificence, magnanimity, ambition, patience, truthfulness, wittiness, friendliness, modesty, and righteous indignation. Virtues is an audio-visual interpretation of each virtue as a soundtrack and a visual representation using a custom interactive tool developed in processing."

class Virtues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle=[commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 
    const oneImageStyle=[commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery]; 
    const soundcloudFrame=[commonWorkStyles.soundcloudFrame, commonWorkStyles.imgMediaQuery]; 
    return (
        <div style={styles.container}>
            <Header title="Virtues" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Processing'} src={processing}/>
                    <img style={commonWorkStyles.twoImages} alt={'Modesty'} src={modesty}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Magnificence'} src={magnificence}/>
                    <img style={twoImageStyle} alt={'Ambition'} src={ambition}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Friendliness'} src={friendliness}/>
                    <img style={twoImageStyle} alt={'Truthfulness'} src={truthfulness}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Patience'} src={patience}/>
                    <img style={twoImageStyle} alt={'Magnanimity'} src={magnanimity}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Wittiness'} src={wittiness}/>
                    <img style={twoImageStyle} alt={'Temperance'} src={temperance}/>
                  </div>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Liberality'} src={liberality}/>
                    <img style={twoImageStyle} alt={'Righteous Indignation'} src={righteous}/>
                  </div>
                  <img style={oneImageStyle} alt={'Soundcloud'} src={soundcloud}/>
                  <iframe title={'Virtues'} style={soundcloudFrame} height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/266092488&color=%23445056&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(Virtues);