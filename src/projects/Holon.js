import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import tendtowardsB from '../images/Holon/tendtowardsB.jpg'
import homotypicalB from '../images/Holon/homotypicalB.jpg'
import unityindiversity from '../images/Holon/unityindiversity.jpg'
import tendtowardsA from '../images/Holon/tendtowardsA.jpg'
import homotypicalA from '../images/Holon/homotypicalA.jpg'

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

    margin: {
      marginTop: padding.small
    }
};

const bodyA="This work derives from my research in understanding the relationship between 'part' & 'whole', which was famously unified by ";
const linkA=(<CustomLink to="https://en.wikipedia.org/wiki/Arthur_Koestler" inline={true}>Arthur Koestler</CustomLink>);
const bodyB=", a Hungarian philosopher, as a 'Holon' in his book, ";
const linkB=(<CustomLink to="https://en.wikipedia.org/wiki/Ghost_in_the_machine" inline={true}>Ghost in the Machine</CustomLink>);
const bodyC=". To understand this concept, I developed custom software that could visually express this duality in a holarchy, which is a hierarchy of Holons. This led to the creation of a series of prints that express the journey from multiplicity to singularity, and vice-versa. With this system, I ambitiously wanted to flatten the duality, so I could experience the relationship of a part to a whole as a singular Holon. You can read more about my research in "
const linkC=(<CustomLink to="https://www.manacontemporary.com/event/a-brief-primer-on-holons-and-holarchy/" inline={true}>A Brief Primer on Holons and Holarchy</CustomLink>);
const bodyD=", which is published on Mana Contemporary's editorial website."; 
const linkE=(<CustomLink to='https://amaykataria.com/EvolutionaryHolarchy/' inline={true}>Evolutionary Holarchy</CustomLink>);
const bodyE=' extends the Holon series with a genetic system that is not confined within the bounds of the microscopic and the macroscopic. Previously, the Holon prints had a pre-defined start and end point. The iteration is an open-ended system that can self-maintain itself between multiple states of its lifetime, just like a living organism.'

class Holon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const oneImageStyle=[commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery]; 

    return (
        <div style={styles.container}>
            <Header title="Holons & Holarchy" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
                {bodyB}
                {linkB}
                {bodyC}
                {linkC}
                {bodyD}
              </div>
              <img style={oneImageStyle} alt={'Tend Towards B'} src={tendtowardsB}/>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'Tend Towards A'} src={tendtowardsA}/>
                  <img style={commonWorkStyles.twoImages} alt={'Homotypical A'} src={homotypicalA}/>
                </div>
                  <img style={oneImageStyle} alt={'Homotypical B'} src={homotypicalB}/>
                  <img style={oneImageStyle} alt={'Unity in Diversity'} src={unityindiversity}/>
              </div>
              <div style={[commonWorkStyles.body, styles.margin]}>
                  {linkE}
                  {bodyE}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Holarchy'} style={commonWorkStyles.webFrame} src={'https://amaykataria.com/EvolutionaryHolarchy/'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Holon);