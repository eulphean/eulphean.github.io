import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import system from '../images/TreeOfLife/system.jpg'
import audio from '../images/TreeOfLife/audio.jpg'
import video from '../images/TreeOfLife/video.jpg'

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

const body="Tree of Life is an audio-visual performance developed using handcrafted metal dishes and a custom interactive interface. The act accompanies a durational event of the unveiling of a virtual tree, around which the entire performance is crafted. The sound from the metal dishes is fed back into an audio system developed using Ableton Live, which is controlled by the touch interface. Other sound-reactive visuals blend in and out of the tree to create a non-linear mystical narrative around the act."

class TreeOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle=[commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 
    const vimeoContainer=[commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery];
    return (
        <div style={styles.container}>
            <Header title="Tree of Life" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'System'} src={system}/>
                  <div style={commonWorkStyles.multiImageContainer}>
                      <img style={twoImageStyle} alt={'Audio'} src={audio}/>
                      <img style={twoImageStyle} alt={'Video'} src={video}/>
                  </div>
                 <div style={vimeoContainer}>
                    <iframe title={'Tree of Life'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/252972419" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(TreeOfLife);