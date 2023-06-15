import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/supersynthesis_bridge/1.jpg'
import two from '../images/supersynthesis_bridge/2.jpg'
import three from '../images/supersynthesis_bridge/3.jpg'
import four from '../images/supersynthesis_bridge/4.jpg'
import five from '../images/supersynthesis_bridge/5.jpg'
import six from '../images/supersynthesis_bridge/6.jpg'
import seven from '../images/supersynthesis_bridge/7.jpg'
import eight from '../images/supersynthesis_bridge/8.jpg'

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

class Supersynthesis2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Supersynthesis" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={four}/>
                    <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Eight'} src={eight}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Six'} src={six}/>
                    <img style={commonWorkStyles.twoImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Supersynthesis2);