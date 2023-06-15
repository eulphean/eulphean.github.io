import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
// import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Blob/one.jpg'
import two from '../images/Blob/two.jpg'
import three from '../images/Blob/three.jpg'

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

const body="Blob Maker is commission from an NFT startup to create a web-based interactive audio-reactive plugin, where users can upload their favorite tracks and create a unique real-time visualization as an NFT. By controlling parameters like the blob’s shape or textures, background environment, and post-processing effects, users can control how the final piece will be rendered. At the end, a lightweight video file is recorded and minted as a unique NFT."

class BlobMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Blob Maker" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'Three'} src={three}/>
              </div>
              <div style={containerStyle}>
                <iframe title={'Supersynthesis'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/828645931" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(BlobMaker);