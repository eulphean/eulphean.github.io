import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/supersynthesis/1.jpg'
import two from '../images/supersynthesis/2.jpg'
import three from '../images/supersynthesis/3.jpg'
import four from '../images/supersynthesis/4.jpg'
import five from '../images/supersynthesis/5.jpg'
import six from '../images/supersynthesis/6.jpg'

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


const body=<span><CustomLink to='http://supersynthesis.art' inline={true}>Supersynthesis</CustomLink> is an interactive audio-visual art installation that invites people to create a space for collective expression and participation. Accompanied with a physical installation, it utilizes the medium of light and sound to craft a communal experience where the audience activates the piece and the space around it by interacting with it through an online interface. In an increasingly fragmented society, this project aspires to create an inclusive space, where anybody can leave a trace of their thought with freedom. By participating in Supersynthesis, one becomes part of a communal wave that’ll anonymously accumulate until the forthcoming eternity.</span>

class Supersynthesis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Supersynthesis" />
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
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={four}/>
                    <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Six'} src={six}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Supersynthesis'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/694436668" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Supersynthesis);