import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'row'
    }
};

const bodyA="Three Ecologies is a commission for Chicago-based artist "
const linkA=(<CustomLink to='https://jaclynjacunski.com/home.html' inline={true}>Jaclyn Jacunski</CustomLink>);
const bodyB=" for the 2019 "; 
const linkB=(<CustomLink to='https://terrainexhibitions.org/' inline={true}>Terrain Biennial</CustomLink>);
const bodyC='. Titled after the famous essay, Three Ecologies by Felix Guttari, the custom software runs a blurred video in the background, while the foreground shows every line read in the essay as subtitles, whose speed and density can be controlled by the artist. The background in this video is only temporary. A different video was used in the actual installation.'

class ThreeEcologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];
    return (
        <div style={styles.container}>
            <Header title="Three Ecologies" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
                {bodyB}
                {linkB}
                {bodyC}
              </div>
            </div>
            <div style={containerStyle}>
              <iframe title={'Three Ecologies'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/406033405" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
        </div>
    );
  }
}

export default Radium(ThreeEcologies);