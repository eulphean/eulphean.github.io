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
import squareA from '../images/Holon/squareA.jpg'
import squareB from '../images/Holon/squareB.jpg'
import squareC from '../images/Holon/squareC.jpg'

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

const bodyA=<span>Conceptually rooted in <CustomLink to="https://en.wikipedia.org/wiki/Arthur_Koestler" inline={true}>Arthur Koestler's</CustomLink> book <CustomLink to="https://en.wikipedia.org/wiki/Ghost_in_the_machine" inline={true}>Ghost in the Machine</CustomLink>, Holons & Holarchy print series unifies the duality between the finite and infinite, micro and the macro, or part and the whole. It's composed using a precise genetic computation algorithm that organizes the information in discrete hierarchical order, which can be looked from top (left) to bottom (right) or bottom (right) to top (left). Every direction invokes a unique sense of perception. A top-down approach is a combination of parts into a whole, whereas a bottom-up approach is a disintegration of the whole into its parts. Each unit of information (reprsented by a colored quad) behaves as a part and a hole simultaneously - a phenomenon Koestler famously described as a Holon (Whole-Part). You can read more about my research in <CustomLink to="https://www.manacontemporary.com/event/a-brief-primer-on-holons-and-holarchy/" inline={true}>A Brief Primer on Holons and Holarchy</CustomLink>, which is published by Mana Contemporary.</span>
const bodyB=<span><CustomLink to='https://amaykataria.com/EvolutionaryHolarchy/' inline={true}>Evolutionary Holarchy</CustomLink> extends the Holon series with a genetic system that is not confined within the bounds of the microscopic and the macroscopic. Previously, the Holon prints had a pre-defined start and an end point. The evolutionary approach is an open-ended system that can self-maintain itself between multiple states of its lifetime with an infinite duration.</span>
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
              </div>
              <img style={oneImageStyle} alt={'Tend Towards B'} src={tendtowardsB}/>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'Tend Towards A'} src={tendtowardsA}/>
                  <img style={commonWorkStyles.twoImages} alt={'Homotypical A'} src={homotypicalA}/>
                </div>
                  <img style={oneImageStyle} alt={'Homotypical B'} src={homotypicalB}/>
                  <div style={commonWorkStyles.imgContainer}>
                    <div style={commonWorkStyles.multiImageContainer}>
                      <img style={commonWorkStyles.threeImages} alt={'SquareA'} src={squareA}/>
                      <img style={commonWorkStyles.threeImages} alt={'SquareB'} src={squareB}/>
                      <img style={commonWorkStyles.threeImages} alt={'SquareC'} src={squareC}/>
                    </div>
                  </div>
                  <img style={oneImageStyle} alt={'Unity in Diversity'} src={unityindiversity}/>
              </div>
              <div style={[commonWorkStyles.body, styles.margin]}>
                  {bodyB}
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