import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import front from '../images/GenerativeDecay/front.jpg'
import side from '../images/GenerativeDecay/side.jpg'

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

const body="Generative Decay meditates on the duality of objective and subjective phenomenon in the world. With the use of computation algorithms, it creates a moving digital perception of a physical flower vase."

class GenerativeDecay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Generative Decay" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.image38} alt={'Side'} src={side}/>
                  <img style={commonWorkStyles.image60} alt={'Front'} src={front}/>
                </div>
                <div style={vimeoContainer}>
                  <iframe title={'Generative Decay'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/276561398" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(GenerativeDecay);