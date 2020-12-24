import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import brochureA from '../images/MomentofEnigma/brochureA.jpg'
import brochureB from '../images/MomentofEnigma/brochureB.jpg'
import momentA from '../images/MomentofEnigma/momentA.jpg'
import momentB from '../images/MomentofEnigma/momentB.jpg'
import momentC from '../images/MomentofEnigma/momentC.jpg'
import momentD from '../images/MomentofEnigma/momentD.jpg'
import momentE from '../images/MomentofEnigma/momentE.jpg'
import momentF from '../images/MomentofEnigma/momentF.jpg'
import posterA from '../images/MomentofEnigma/posterA.jpg'
import posterB from '../images/MomentofEnigma/posterB.jpg'
import posterC from '../images/MomentofEnigma/posterC.jpg'
import openstudioA from '../images/MomentofEnigma/openstudioA.jpg'
import openstudioB from '../images/MomentofEnigma/openstudioB.jpg'
import openstudioC from '../images/MomentofEnigma/openstudioC.jpg'

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

const bodyA=<span>In <span style={commonWorkStyles.italics}>Moment of Enigma</span>, Amay Kataria responds with symbols of strength, resilience, and fortitude to face the uncertainty of the current times. In his recent body of works presented, he repurposes technology as a medium to experience warmth, care, and philosophical introspection.</span>; 
const bodyB=<span><span style={commonWorkStyles.italics}>“To experience a moment of clarity, one must witness a moment of enigma. During this pandemic, the more I induced myself in self-reflection, the more anxious I felt due to the imposed lockdown, self-isolation, and the constant flow of information. In the creative act of responding to this state of being, I found solace, courage, and resolution to thrive in this time. In this process, I touched a moment of knowledge and kindness that helped me stand affirm,”</span> says Kataria. This became the curatorial premise for his solo booth, <span style={commonWorkStyles.italics}>Moment of Enigma</span> at CADAF Online and consequently for his irl solo-show at Mana Contemporary. </span>
const bodyC=<span>His central work <CustomLink to='https://amaykataria.com/#/momimsafe' inline={true}>Momimsafe</CustomLink> is a disarmingly simple use of technology to passively link distant spaces during a time of isolation and unpredictability. It’s an interactive work that lets viewers peek into Kataria’s home studio through a webcam and send him messages that are printed in real-time in his space. It creates an alternate form of intimacy that makes him vulnerable and bold simultaneously. To view these messages from anywhere in the world, <CustomLink to='https://momimsafe.live/#/printer' inline={true}>Virtual Printer</CustomLink>) acts like a simulacra mediating the messages left by his loved ones. Over a period from April-August, 2020 when the feed was active, Kataria collected over 700 messages that were repurposed to create new physical works like <span style={commonWorkStyles.italics}>(covid-19) Antidote</span> and <span style={commonWorkStyles.italics}>Labor of Love</span>. Currently, this work is in an archived state; however, the messaging system is still active. </span>
const bodyD=<span>Conceptually rooted in Arthur Koestler's book <span style={commonWorkStyles.italics}>Ghost in the Machine</span>, Kataria's <CustomLink to='https://amaykataria.com/#/Holon' inline={true}>Holons & Holarchy</CustomLink> print series led him to collaborate with Chicago based artist, <CustomLink to='https://www.philipmulliken.com/' inline={true}>Philip Mulliken</CustomLink> to construct the first edition of <CustomLink to='https://amaykataria.com/#/Janus' inline={true}>Janus Study</CustomLink>; a virtual sculpture inspired from the ancient figure Janus, a two-faced Roman god considered a guardian of time, transitions, and doorways. <span style={commonWorkStyles.italics}>“By flipping the Janus heads, I wanted to invert the system of myths and beliefs that our culture identifies with. The gesture of drawing the two heads apart and twisting into each other attaches itself to a feeling of how this present moment of fear, anxiety, and entrapment feels like an unending drag.”</span></span>
const bodyE=<span>Finally, <CustomLink to='https://amaykataria.com/#/centerofvaryinggravity' inline={true}>Center of (Varying) Gravity</CustomLink> is a <span style={commonWorkStyles.italics}>timescape</span> that draws from the visual language of fractal patterns to create a generative-meditative simulation of pixels on screen. It takes its point of departure in the context of unpredictability and readjustment to devise a symbol of courage and motivation to face the varying uncertainty. Due to its mathematical nature, the simulation evolves with time while refracting a myriad of colors that are inspired from a Fuschia flower. For the closing reception, an irl event was hosted in combination with an open-studio with Kataria’s extended body of works developed during his residency at Mana Contemporary. <CustomLink to='https://ess.org/alba-residency' inline={true}>Veronica Anne Salinas</CustomLink> presented an improvised sound performance after being inspired from the <CustomLink to='https://amaykataria.com/#/Holon' inline={true}>Holons & Holarchy</CustomLink> print series.</span>
const bodyF=<span>Midway through the show, an emotionally charged conversation called <CustomLink to='https://www.manacontemporary.com/event/new-media-program-deconstructing-time/' inline={true}>Deconstructing Time</CustomLink> was organized by Mana Contemporary with my scientific mentor <CustomLink to='https://as.vanderbilt.edu/physics/bio/andreas-berlind' inline={true}>Andreas Berlind</CustomLink>,  who is a Cosmologist and a professor of Astrophysics at Vanderbilt University. The temporal notion of past, present, and future was analyzed through the lens of Art, Science, and Philosophy. The lack of universal time proven by the theory of relativity acted like a point of departure to rationalize one’s internal experience of time. </span>
class MomentofEnigma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Moment of Enigma" />
            <div style={styles.content}>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Brochure A'} src={brochureA}/>
                        <img style={commonWorkStyles.twoImages} alt={'Brochure B'} src={brochureB}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                         <img style={commonWorkStyles.twoImages} alt={'Moment A'} src={momentA}/>
                         <img style={commonWorkStyles.twoImages} alt={'Moment B'} src={momentB}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Moment C'} src={momentC}/>
                        <img style={commonWorkStyles.twoImages} alt={'Moment D'} src={momentD}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Moment E'} src={momentE}/>
                        <img style={commonWorkStyles.twoImages} alt={'Moment F'} src={momentF}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.threeImages} alt={'OS A'} src={openstudioA}/>
                        <img style={commonWorkStyles.threeImages} alt={'OS B'} src={openstudioB}/>
                        <img style={commonWorkStyles.threeImages} alt={'OS C'} src={openstudioC}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer, commonWorkStyles.bottomPad]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.threeImages} alt={'Poster A'} src={posterA}/>
                        <img style={commonWorkStyles.threeImages} alt={'Poster B'} src={posterB}/>
                        <img style={commonWorkStyles.threeImages} alt={'Poster C'} src={posterC}/>
                    </div>
                </div>
                <div style={commonWorkStyles.body}>
                    {bodyA}
                    {bodyB}
                    {bodyC}
                    {bodyD}
                    {bodyE}
                    {bodyF}
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(MomentofEnigma);