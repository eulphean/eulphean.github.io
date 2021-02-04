import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import poster1 from '../images/Timekeepers/poster_0.jpg'
import poster2 from '../images/Timekeepers/poster_1.jpg'
import poster3 from '../images/Timekeepers/poster_2.jpg'
import posterA from '../images/Timekeepers/posterA.jpg'
import posterB from '../images/Timekeepers/posterB.jpg'
import posterC from '../images/Timekeepers/posterC.jpg'
import imageA from '../images/Timekeepers/image_1.jpg'
import imageB from '../images/Timekeepers/image_2.jpg'
import imageC from '../images/Timekeepers/image_3.jpg'
import imageE from '../images/Timekeepers/image_5.jpg'
import imageF from '../images/Timekeepers/image_6.jpg'
import imageG from '../images/Timekeepers/image_7.jpg'
import imageH from '../images/Timekeepers/image_8.jpg'

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

    topPadding: {
        marginTop: padding.small
    }
};

const bodyA=<span>Timekeepers is an immersive art installation developed in response to this year's Multiverse Theme for Burning Man 2020, which was hosted in Altspace VR (a social Virtual Reality platform), due to the pandemic. The design of this world revolved around the subject of time and the temporal phenomenon of becoming. It repurposed the ancient symbols of Timekeeping to create a site of philosophical introspection and deliberate play.</span>
const linkA=<span><br />3D Collaborator : <CustomLink to='https://www.philipmulliken.com/' inline={true}>Philip Mulliken</CustomLink></span>;
const bodyC=<span>On the ground, sits the mammoth <span style={commonWorkStyles.italics}>Janus</span> sculpture surrounded by architectural scaffolding to provide viewers a resting place. Below the ground exist immersive viewing rooms to experience self-evolving organic <span style={commonWorkStyles.italics}>Timescapes</span>. An hourglass is a timekeeper and also a metaphor for the duality of Janus. Several hourglasses were placed along with similar three dimensional geometry to invoke connections with the phenomenon of temporality.</span>
const bodyD=<span> Timekeepers has also become a site to program a number of public events ranging from artist talks, discursive meditations, and music events to create an interactive, social, and engaging environment. Consequently, it's a technological relic that is permanently stored on the Altspace servers. Ocassionally, it gets restored and updated due to the affordances of the medium it was created with, and opens its doors for special events and program. It's a space to provoke and share conversations about deconstructing our everyday understanding of time.</span>
class Timekeepers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const vimeoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer]; 

    return (
        <div style={styles.container}>
            <Header title="Timekeepers" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'PosterA'} src={posterA}/>
                    <img style={commonWorkStyles.threeImages} alt={'PosterB'} src={posterB}/>
                    <img style={commonWorkStyles.threeImages} alt={'PosterC'} src={posterC}/>
                </div>
              </div>
              <div style={[commonWorkStyles.imgContainer, styles.bottomPadding]}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Poster1'} src={poster1}/>
                    <img style={commonWorkStyles.threeImages} alt={'Poster2'} src={poster2}/>
                    <img style={commonWorkStyles.threeImages} alt={'Poster3'} src={poster3}/>
                </div>
              </div>
              <div style={[commonWorkStyles.body]}>
                {bodyC}{bodyD}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'C'} src={imageC}/>
                    <img style={commonWorkStyles.twoImages} alt={'B'} src={imageB}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'A'} src={imageA}/>
                  <img style={commonWorkStyles.twoImages} alt={'E'} src={imageE}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={[commonWorkStyles.multiImageContainer]}>
                    <img style={commonWorkStyles.threeImages} alt={'F'} src={imageF}/>
                    <img style={commonWorkStyles.threeImages} alt={'G'} src={imageG}/>
                    <img style={commonWorkStyles.threeImages} alt={'H'} src={imageH}/>
                </div>
              </div>
              <div style={vimeoContainer}>
                    <iframe title={'Timekeepers'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/507311849" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(Timekeepers);