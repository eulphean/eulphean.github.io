import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import one from '../images/Touch/1.jpg'
import two from '../images/Touch/2.jpg'
import three from '../images/Touch/3.jpg'
import topA from '../images/Touch/top_1.jpg'
import topB from '../images/Touch/top_2.jpg'

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
}

const bodyA=<span><CustomLink to='https://embroideredtouch.art/' inline={true}>Embroidered Touch</CustomLink> is a software engineering commission by the artist <CustomLink to='http://ankeloh.net/bio/' inline={true}>Anke Loh</CustomLink>, as part of her collaborative research project <CustomLink to='http://ankeloh.net/2021/10/re-fream-embroidered-touch-life-space/#4' inline={true}>RE-FREAM</CustomLink>. Custom software was architected to enable a bi-directional communication protocol between a PCB (printed circuit board) powered by an Arduino, that was connected to an array of touch sensors bonded to a garment, and a web-application over bluetooh. The web-app allowed the user to calibrate the sensors using an algorithm and give visual and auditory responses upon interaction. A custom backend architecture was developed using web sockets and node.js to allow multiple garments to send sound signals to each other over a remote network.</span>
const linkA=<span><br />Website design: <CustomLink to='https://christineshallenberg.com/' inline={true}>Christine Shallenberg</CustomLink></span>;
const linkB=<span><br />Documentation courtesy: <CustomLink to='http://ankeloh.net/bio/' inline={true}>Anke Loh</CustomLink></span>;
class EmbroideredTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Embroidered Touch" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
                {linkB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'HeadA'} src={topA}/>
                  <img style={commonWorkStyles.twoImages} alt={'HeadB'} src={topB}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                  <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                  <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Janus Study (I)'} style={commonWorkStyles.vimeoFrame} src="https://www.youtube.com/embed/YMcGSuPCjbs?rel=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(EmbroideredTouch);