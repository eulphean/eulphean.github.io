import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Metagems/1.jpg'
import two from '../images/Metagems/2.jpg'
import three from '../images/Metagems/3.jpg'
import four from '../images/Metagems/4.jpg'
import five from '../images/Metagems/5.jpg'
import six from '../images/Metagems/6.jpg'
import seven from '../images/Metagems/7.jpg'
import eight from '../images/Metagems/8.jpg'
import nine from '../images/Metagems/9.jpg'
import ten from '../images/Metagems/10.jpg'
import eleven from '../images/Metagems/11.jpg'
import twelve from '../images/Metagems/12.jpg'
import thirteen from '../images/Metagems/13.jpg'
import fourteen from '../images/Metagems/14.jpg'

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


const bodyA=<span>Metagems is a new sculpture series that explores the captivating world of Chicago’s hidden gems. Inspired by the endangered flora and fauna of the city, the flower sculptures in this collection pay homage to the delicate beauty that surrounds us. Additionally, the lion sculpture is a tribute to the iconic historical lions that symbolize the resilience and grandeur of Chicago's past. These meticulously crafted handheld sculptures are a precursor for the large-scale sculptures that await in this series. Brace yourself for the intricate beauty of Metagems, where artistry and the essence of the city will intertwine.</span>
const bodyB=<span>Collaborator: <CustomLink to='https://www.behance.net/braxtonchassag?locale=en_US&' inline={true}>Braxton Myles</CustomLink></span>

class Metagems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const containerStyle = [commonWorkStyles.vimeoContainer, commonWorkStyles.imgContainer];

    return (
        <div style={styles.container}>
            <Header title="Metagems" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                <br/><br/>
                {bodyB}
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
                    <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Six'} src={six}/>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={four}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Seven'} src={seven}/>
                    <img style={commonWorkStyles.threeImages} alt={'Eight'} src={eight}/>
                    <img style={commonWorkStyles.threeImages} alt={'Nine'} src={nine}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.twoImages} alt={'Ten'} src={ten}/>
                    <img style={commonWorkStyles.twoImages} alt={'Eleven'} src={eleven}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Twelve'} src={twelve}/>
                    <img style={commonWorkStyles.threeImages} alt={'Thirteen'} src={thirteen}/>
                    <img style={commonWorkStyles.threeImages} alt={'Fourteen'} src={fourteen}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Metagems);