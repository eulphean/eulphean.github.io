import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import thewhitesmile from '../images/Holon/thewhitesmile.jpg'
import equilibrium from '../images/Holon/equilibrium.jpg'
import moustacheman from '../images/Holon/moustacheman.jpg'
import invertical from '../images/Holon/invertical.jpg'
import unityindiversity from '../images/Holon/unityindiversity.jpg'

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
};

const bodyA="This work derives from my research in understanding the relationship between 'part' & 'whole', which was famously unified by ";
const linkA=(<CustomLink to="https://en.wikipedia.org/wiki/Arthur_Koestler" inline={true}>Arthur Koestler</CustomLink>);
const bodyB=", a Hungarian philosopher, as a 'Holon' in his book, ";
const linkB=(<CustomLink to="https://en.wikipedia.org/wiki/Ghost_in_the_machine" inline={true}>Ghost in the Machine</CustomLink>);
const bodyC=". To understand this concept, I developed custom software that could visually express this duality in a holarchy, which is a hierarchy of Holons. This led to the creation of a series of prints that express the journey from multiplicity to singularity, and vice-versa. With this system, I ambitiously wanted to flatten the duality, so I could experience the relationship of a part to a whole as a singular Holon. You can read more about my research in "
const linkC=(<CustomLink to="https://www.manacontemporary.com/event/a-brief-primer-on-holons-and-holarchy/" inline={true}>A Brief Primer on Holons and Holarchy</CustomLink>);
const bodyD=", which is published on Mana Contemporary's editorial website."

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
            <Header title="Holons" />
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
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'The White Smile'} src={thewhitesmile}/>
                  <img style={commonWorkStyles.twoImages} alt={'Moustache Man'} src={moustacheman}/>
                </div>
                  <img style={oneImageStyle} alt={'Equilibrium'} src={equilibrium}/>
                  <img style={oneImageStyle} alt={'Invertical'} src={invertical}/>
                  <img style={oneImageStyle} alt={'Unity in Diversity'} src={unityindiversity}/>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Holon);