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
import six from '../images/KidGames/kidsF.jpg'

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

const body=<span>Kid Games is an augmented reality project that reconstructs Pieter Bruegel's sixteenth century painting “Kinderspiele”, where hundreds of adult-looking children absorb themselves in foolish games. The digital work is superpositioned on a real-world sculptural space prepared as an intersection of three custom planar grids, through the lens of a portable tablet. On the outskirts of this static arrangement, a solitary figure restlessly explores.</span>
const linkA=<span><br />Collaborator : <CustomLink to='http://peterburr.org' inline={true}>Peter Burr</CustomLink></span>;
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
            <Header title="Kid Games" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
                {linkA}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={one}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Four'} src={five}/>
                    <img style={commonWorkStyles.twoImages} alt={'Five'} src={six}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                  <img style={commonWorkStyles.oneImage} alt={'Four'} src={four}/>
              </div>
              <div style={containerStyle}>
                <iframe title={'Kid Games'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/526378457" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(KidGames);