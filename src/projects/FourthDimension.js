import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Fourth/1.jpg'
import two from '../images/Fourth/2.jpg'
import three from '../images/Fourth/3.jpg'
import four from '../images/Fourth/4.jpg'
import five from '../images/Fourth/5.jpg'
import six from '../images/Fourth/6.jpg'
import seven from '../images/Fourth/7.jpg'

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

const body=<span></span>

class KidGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];
    return (
        <div style={styles.container}>
            <Header title="Fourth Dimension" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Seven'} src={seven}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Three'} src={three}/>
                    <img style={commonWorkStyles.twoImages} alt={'Four'} src={four}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.twoImages} alt={'Siz'} src={six}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Fourth Dimension Workshop'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/520146132" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(KidGames);