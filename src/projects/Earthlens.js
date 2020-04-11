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

const body="Earth Lens is an augmented reality concept application developed for Microsoft's HoloLens to immersively uncover and predict the health of our planet. For this version, the experience was focussed on creating a table-top experience of the Great Barrier Reef, where a user can interactively experience visual changes in the corals from the past and in the future.";

class Earthlens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Earth Lens" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.vimeoContainer}>
                  <iframe title={'Earth Lens'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/197704900" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Earthlens);