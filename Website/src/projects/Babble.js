import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import { commonWorkStyles } from '../components/CommonStyles.js'
import babble from '../images/Babble/babble.jpg'
import tvA from '../images/Babble/tvA.jpg'
import tvB from '../images/Babble/tvB.jpg'
import tvC from '../images/Babble/tvC.jpg'

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

const body=<span><CustomLink to='https://amaykataria.com/Babble-Wall' inline={true}>Babble</CustomLink> is an interactive chat bot. It has a tendency to overhear conversations in a crowd or be directly provoked by someone speaking into the microphone. By using technologies like NLP (natural language processing), it reinterprets the spoken words and extracts emotion and keywords from it. Babble uses these extractions to emotionally, visually, and aurally respond to what it hears.</span>;

class Babble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const oneImageStyle=[commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Babble" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {body}
                </div>
                <img style={oneImageStyle} alt={'Babble'} src={babble}/>
                <div style={commonWorkStyles.imgContainer}>
                  <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'tvA'} src={tvA}/>
                    <img style={commonWorkStyles.threeImages} alt={'tvB'} src={tvB}/>
                    <img style={commonWorkStyles.threeImages} alt={'tvC'} src={tvC}/>
                  </div>
                <div style={commonWorkStyles.imgContainer}>
                    <iframe title={'Babble'} style={commonWorkStyles.webFrame} src={'https://amaykataria.com/Babble-Wall'}></iframe>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(Babble);