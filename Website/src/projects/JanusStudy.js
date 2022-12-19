import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import janus from '../images/Janus/janus.jpg'
import headA from '../images/Janus/headA.jpg'
import headB from '../images/Janus/headB.jpg'

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

    bottomPadding: {
      marginBottom: padding.small
  },
}

const bodyA=<span>This work is an ongoing reinterpreation of Janus - a two-faced mythological figure considered a guardian of doorways, transitions, and time. It is one of the oldest symbols associated with the temporal nature of our Universe, where one head represents the past and other is the future. Traditionally, they both face away from each other. I first came across Janus in the book <span style={commonWorkStyles.italics}>Ghost in the Machine</span> by Hungarian philosopher Arthur Koestler, who described it as a metaphor of duality. In <span style={commonWorkStyles.italics}>Janus Study</span>, I recontextualize its meaning to the present moment and use it to critique the phenomenon of temporality. Time is strongly distilled as a subject of inquiry. The two heads are flipped, drawn apart, and twisted into each other. Computational gravity along with computer generated imagery is used to model the fuzzy and twisted entanglement between the two heads. It's a digital sculpture situated in an empty concrete room to provoke corporeal contemplation. Below is a fast-forwarded snippet from the actual work.</span>
const bodyB=<span><br/>Silent Digital Film, 7 minutes, 30 seconds</span>
const linkA=<span><br />3D Collaborator : <CustomLink to='https://www.philipmulliken.com/' inline={true}>Philip Mulliken</CustomLink></span>;
class JanusStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Janus Study" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {bodyB}
                {/* {linkA} */}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                 <img style={commonWorkStyles.oneImage} alt={'janus'} src={janus}/>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'HeadA'} src={headA}/>
                  <img style={commonWorkStyles.twoImages} alt={'HeadB'} src={headB}/>
                </div>
              </div>
              <div style={containerStyle}>
                <iframe title={'Janus Study (I)'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/436124011" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(JanusStudy);