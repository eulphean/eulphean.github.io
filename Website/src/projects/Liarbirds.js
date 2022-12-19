import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import left from '../images/Liarbirds/hydepark.jpg'
import right from '../images/Liarbirds/postcard.jpg'
import flow from '../images/Liarbirds/Flow.jpg'

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

    info: {
      marginTop: padding.small,
      textAlign: 'center'
    }
}

const body=<span><CustomLink to='https://amaykataria.com/Liarbirds/' inline={true}>Liarbirds</CustomLink> is an augmented encounter developed within the ecosystem of Instagram to respond to online communities manifested around fringe ideas like conspiracy theories that permeate our everyday culture. It's a play on this cultural phenomenon that makes fake birds real again by superimposing a swarm of digital creatures on one’s physical space through the mediation of Augmented Reality.</span>
class Liarbirds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Liarbirds" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'left'} src={left}/>
                    <img style={commonWorkStyles.twoImages} alt={'right'} src={right}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'Flow'} src={flow}/>
              </div>
              <div style={containerStyle}>
                <iframe title={'Liarbirds'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/655211501?h=10e927a970&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Liarbirds);

