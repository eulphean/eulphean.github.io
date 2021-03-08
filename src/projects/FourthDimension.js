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

const body=<span>As part of <CustomLink to='https://deconfine.org/amay-kataria/' inline={true}>Deconfine Festival</CustomLink> 2020, I was invited to give a two-day online seminar based on my research and interests into the cultural history of the Fourth Dimension. The title of the workshop along with all the historical material was borrowed from the book "The Fourth Dimension and Non-Euclidean Geometry in Modern Art" by Linda Dalrymple Henderson. On the first day, I introduced the participants to Augmented Reality with SparkAR as one of the tools to mediate higher dimensions. Along with the historical development of this idea, we conducted a visual and spatial deconstruction of a tesseract using an <CustomLink to='https://amaykataria.com/Tesseract/' inline={true}>interactive</CustomLink> tool that I developed to better the understand the fourth dimension. The second day was discursive and led by the participants. Every one of them brought a previous project, thoughts, questions, and insights about the fourth dimension, which were expanded and discussed collaboratively. The seminar was mediated by Zoom and was attended by eight selected students across art & design programs in the most reputed colleges in India. You can find a short summary of the seminar below.</span>

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