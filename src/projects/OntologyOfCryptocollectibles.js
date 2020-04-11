import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import kittylips from '../images/PostCryptocollectible/kittylips.jpg'
import kittybody from '../images/PostCryptocollectible/kittybody.jpg'

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

const body="Post-Cryptocollectible reflects on the digital and reproductive nature of blockchain based assets like cryptokitties. The work utilizes custom software to propose a post-cryptocollectible art work, which creates a novel creative abstraction by using several of my own cryptokitty assets. It was developed at the 2018 Ethereal Summit in New York, where I was invited as a visiting artist to explore the intersection of Art & Blockchain.";

class OntologyOfCryptocollectibles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 
    return (
        <div style={styles.container}>
            <Header title="Post-Cryptocollectible" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Lips'} src={kittylips}/>
                    <img style={commonWorkStyles.twoImages} alt={'Body'} src={kittybody}/>
                  </div>
                  <div style={vimeoContainer}>
                    <iframe title={'PostCryptocollectible'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/405945592" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(OntologyOfCryptocollectibles);