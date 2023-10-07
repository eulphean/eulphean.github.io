import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/WhaleWatcher/1.jpg'
import two from '../images/WhaleWatcher/2.jpg'
import three from '../images/WhaleWatcher/3.jpg'
import four from '../images/WhaleWatcher/4.jpg'
import five from '../images/WhaleWatcher/5.mp4'
import six from '../images/WhaleWatcher/6.jpg'

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


const bodyA=<span><CustomLink to='https://visualizer-hackathon-75m2ad2pn-eulphean.vercel.app/' inline={true}>Whale Watcher</CustomLink> is an interactive data visualization project developed during the <CustomLink to='https://ethchicago.xyz/#/winners' inline={true}>ETHChicago 2023 Hackathon</CustomLink>. It won the first prize in the Featured Artists and Creatives category. Whale Watcher provides NFT creators with a bird's eye view of every collector who has ever owned their collection. Through this tool, creators can see their legacy through the lens of their community, in real time. Currently, Whale Watcher is in further development for a production release.</span>
const bodyB=<span>In Whale Watcher, each whale represents a wallet address that holds an asset in the collection. The size of the whale is relative to the number of NFTs they possess. This allows users to quickly identify loyal hodlers and the biggest collectors.</span>
const bodyC=<span></span>
const bodyD=<span>Collaborators: <CustomLink to='https://www.maxknivets.com/' inline={true}>Max Knivets</CustomLink>, <CustomLink to='https://blairmckee.com/' inline={true}>Blair McKee</CustomLink></span>

class WhaleWatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Whale Watcher" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                <br/><br/>
                {bodyB}
                <br/><br/>
                {bodyD}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'One'} src={one}/>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={four}/>
                    <video autoPlay loop muted style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Six'} src={six}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Whale Watcher'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/872193906" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(WhaleWatcher);