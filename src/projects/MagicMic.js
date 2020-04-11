import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'

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

const body="Magic Mic is an interactive project inspired from vocal effects pedals used by live performers to augment their voices. It is specifically focussed on creating a stutter effect. It is developed as a PD (PureData) patch that collected a voice sample upon interaction. Once a sample is stored, a user can modify the sample's pitch and length by scrolling in the X or Y axis on the midipad to create effects like 'Che-che-che-check it out..' It also works as a handy sampler to collect audio samples. These samples were imported, enhanced, and used to create compositions in Ableton Live."

class MagicMic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const soundcloudFrame=[commonWorkStyles.soundcloudFrame, commonWorkStyles.imgMediaQuery]; 
    return (
        <div style={styles.container}>
            <Header title="Magic Mic" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.vimeoContainer}>
                  <iframe title={'Magic Mic'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/197708511" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>

                  <iframe title={'Track 1'} style={soundcloudFrame} width="80%" height="50" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/300172114&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                 
                  <iframe title={'Track 2'} style={soundcloudFrame} height="50" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/300278415&color=%23445056&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(MagicMic);
