import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import pose from '../images/GrooveBody/pose.jpg'
import shiva from '../images/GrooveBody/shiva.jpg'

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

const body="Groove Body is a virtual body that embodies all crypto-capitalists who have been hell-bent on tokenizing our society. Its made up of a unique cryptocurrency called Groove Coin, which is based on the Ethereum Blockchain. A limited set of 30 trillion Groove tokens exist on the blockchain, which identify the owners of this digital body. Groove Body is also ascribed several moves and forms to instill life into it. The work was developed during my residency at Art Center Nabi in Seoul, South Korea.";

class GrooveBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const oneImageStyle = [commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery];
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Groove Body" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
            </div>
            <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'Pose'} src={pose}/>
                  <img style={oneImageStyle} alt={'Shiva'} src={shiva}/>
                  <div style={vimeoContainer}>
                    <iframe title={'Groove Body'} style={commonWorkStyles.vimeoFrame} src="https://www.youtube.com/embed/RvZ5usN3NuY?start=87" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
        </div>
    );
  }
}

export default Radium(GrooveBody);