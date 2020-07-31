import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, cvStyles, padding} from '../components/CommonStyles.js'
import posterA from '../images/MomentofEnigma/poster1.jpg'
import posterB from '../images/MomentofEnigma/poster2.jpg'
import antidoteA from '../images/MomentofEnigma/antidoteA.jpg'
import antidoteB from '../images/MomentofEnigma/antidoteB.jpg'
import tendtowardsA from '../images/MomentofEnigma/tendtowardsA.jpg'
import homotypicalA from '../images/MomentofEnigma/homotypicalA.jpg'

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

    additionPadding: {
        marginTop: padding.verySmall
    },
};

const projects = [
    {
      title: <span style={cvStyles.title}>"Moment of Enigma" Virtual Walkthrough with Duncan Bass</span>,
      description: ', CADAF Online, Chicago, USA, June 2020, ',
      info: <CustomLink to='https://www.youtube.com/watch?v=fBUShClQokQ&feature=youtu.be' inline={true}>[info]</CustomLink>
    },
    {
      title: <span style={cvStyles.title}>Community Lunch with Amay Kataria and Phil Mulliken</span>,
      description: ', Mana Contemporary, Chicago, USA, June 2020, ',
      info: <CustomLink to='https://www.manacontemporary.com/event/community-lunch-with-amay-kataria-and-philip-mulliken/' inline={true}>[info]</CustomLink>
    },

];

const bodyA = 'In Moment of Enigma, Amay Kataria responds with symbols of strength, resilience, and fortitude to face the uncertainty of the current times. In his recent body of works presented, he repurposes technology as a medium to experience warmth, care, and philosophical introspection.';
const bodyB = <span style={cvStyles.title}>“To experience a moment of clarity, one must witness a moment of enigma. In the post-covid times, the more I induced myself in self-reflection, the more anxious I felt due to the imposed lockdown, self-isolation, and the constant flow of information. Through the act of creation of experiences that helped me kindle the love of friends and family, I found solace, courage, and resolution to face such a distressing time. In this process, I touched a moment of knowledge and kindness that helped me stand affirm,"</span>;
const bodyC = ' says Kataria. This became the curatorial premise of his solo booth, Moment of Enigma at CADAF Online, where he cleverly utilized the technological affordances of the platform to present a cohesive body of interactive and non-interactive works that signify a moment of clarity derived from a time of puzzling instability.';
const bodyD = ' His central work ';
const linkA = (<CustomLink to='https://momimsafe.live' inline={true}>MOMIMSAFE</CustomLink>);
const bodyE = ' is a disarmingly simple use of technology to passively link distant spaces during a time of isolation and unpredictability. It’s an interactive work that lets viewers peek into Kataria’s home studio through a webcam and send him messages that are printed in real-time in his space.'; 
const linkB= (<CustomLink to="https://momimsafe.live/#/printer" inline={true}>Virtual Printer</CustomLink>); 
const bodyF = ' is an interactive simulacra of the real thermal printer in his studio that lets one browse through the entire database of messages received since the beginning of MOMIMSAFE.'
const title=(<span style={cvStyles.title}>(covid-19) Antidote</span>);
const bodyG=" blurs the line between digital and physical tacitility of information by packing rolls of receipts into glass vials that emphasize the portions of courage derived from the kindness of his loved ones."; 
const bodyH="Conceptually rooted in Arthur Koestler's book Ghost in the Machine, Kataria's Holons & Holarchy print series led him to collaborate with Chicago based artist, Phil Mulliken to create the first edition of Janus Study; a virtual sculpture inspired from the ancient figure Janus, a two-faced Roman god considered a guardian of time, transitions, and doorways.";
const bodyI=<span style={cvStyles.title}>“By flipping the Janus heads, we wanted to invert the system of myths and beliefs that our culture identifies with. The gesture of drawing the two heads far apart, twisting into each other like a mesh of cables attaches itself to a feeling of how this present moment of fear, anxiety, and entrapment due to covid-19 feels like an unending drag.”</span>; 
const bodyJ="Finally, "; 
const linkC=(<CustomLink to='https://covg.art' inline={true}>Center of (Varying) Gravity</CustomLink>);
const bodyK=' draws from the visual language of fractal patterns to create a generative-meditative simulation of pixels on screen, and is a visual response to a writing prompt by Chicago based literary artist, Brianna Santina. It takes its point of departure in the context of unpredictability and readjustment to devise a symbol of courage and motivation to face the varying uncertainty. Due to its mathematical nature, the simulation evolves with time while refracting a myriad of colors that are inspired from the writer’s description of a personal state of transformation during the covid-19 lockdown in Chicago.';
class MomentofEnigma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const videoContainer = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];
    const bodyStyle=[commonWorkStyles.body, styles.additionPadding]; 
    let pComps = this.formatProjects();
    return (
        <div style={styles.container}>
            <Header title="Moment of Enigma" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                  {bodyA}
                  {bodyB}
                  {bodyC}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'posterA'} src={posterA}/>
                        <img style={commonWorkStyles.twoImages} alt={'posterB'} src={posterB}/>
                    </div>
                </div>
                <div style={bodyStyle}>
                    {bodyD}
                    {linkA}
                    {bodyE}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <iframe title={'momimsafe.live'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live'}></iframe>
                </div>
                <div style={bodyStyle}>
                    {linkB}
                    {bodyF}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <iframe title={'virtual printer'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live/#/printer'}></iframe>
                </div>
                <div style={bodyStyle}>
                    {title}
                    {bodyG}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'antidoteA'} src={antidoteA}/>
                        <img style={commonWorkStyles.twoImages} alt={'antidoteB'} src={antidoteB}/>
                    </div>
                </div>
                <div style={bodyStyle}>
                    {bodyH}
                    {bodyI}
                </div>
                <div style={videoContainer}>
                    <iframe title={'Janus Study (I)'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/436124011" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'tendtowards'} src={tendtowardsA}/>
                        <img style={commonWorkStyles.twoImages} alt={'homotypical'} src={homotypicalA}/>
                    </div>
                </div>
                <div style={bodyStyle}>
                    {bodyJ}
                    {linkC}
                    {bodyK}
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <iframe title={'Center of (Varying) Gravity'} style={commonWorkStyles.webFrame} src={'https://covg.art'}></iframe>
                </div>
                <div style={bodyStyle}>
                    <div style={cvStyles.heading}>
                        PUBLIC TALKS
                    </div>
                    {pComps}
                </div>

            </div>
        </div>
    );
  }

  formatProjects() {
    let components = []; 
    projects.forEach(p => {
      console.log(components.length);
      let c = (
          <div key={components.length} style={cvStyles.entry}>
              {p.title}{p.description}{p.info}
          </div>
      ); 
      components.push(c); 
    }); 
    return components; 
  }
}

export default Radium(MomentofEnigma);
