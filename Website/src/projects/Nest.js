import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import { commonWorkStyles } from '../components/CommonStyles.js'
import nestmain from '../images/Nest/nestmain.jpg'
import nestboy from '../images/Nest/nestboy.jpg'
import nestgirl from '../images/Nest/nestgirl.jpg'

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

const body="Nest is a colony of synthetic agents that are constantly in a state of action. They exist at a hybrid of physical and virtual environments. Each agent is an artificial entity functioning according to some computation rules that manifest in the form of life-like behaviors like attraction and repulsion, with which they maneuver in their environment. Due to their interaction with humans in the physical world, they entangle with other agents to transpire into a super agent that moves and behaves like a collective consciousness.";

class Nest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const twoImageStyle = [commonWorkStyles.twoImages, commonWorkStyles.imgMediaQuery]; 
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery];
    return (
        <div style={styles.container}>
            <Header title="Nest" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'Nest Main'} src={nestmain}/>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={twoImageStyle} alt={'Nest Boy'} src={nestboy}/>
                    <img style={twoImageStyle} alt={'Nest Girl'} src={nestgirl}/>
                  </div>
                  <div style={containerStyle}>
                    <iframe title={'Nest'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/371485588" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(Nest);

// Images (Loading Images is a pain)