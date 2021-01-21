import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/KidGames/kidsA.jpg'
import two from '../images/KidGames/kidsB.jpg'
import three from '../images/KidGames/kidsC.jpg'
import four from '../images/KidGames/kidsD.jpg'
import five from '../images/KidGames/kidsE.jpg'
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

const body=<span>Kid Games is an augmented reality project developed in collaboration with Brooklyn-based artist, <CustomLink to='http://peterburr.org' inline={true}>Peter Burr</CustomLink>. It reconstructs Pieter Bruegel's sixteenth century painting “Kinderspiele”, where hundreds of adult-looking children absorb themselves in foolish games. The digital work is superpositioned on a real-world sculptural space prepared as an intersection of three custom planar grids, through the lens of a portable tablet. On the outskirts of this static arrangement, a solitary figure restlessly explores.</span>

class KidGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Kid Games" />
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
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Four'} src={four}/>
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Five'} src={five}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(KidGames);