import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import { commonWorkStyles, cvStyles, padding } from '../components/CommonStyles.js'
import CustomLink from '../components/CustomLink.js'
import momsafe from '../images/momimsafe/momimsafe.jpg'
import antidoteA from '../images/momimsafe/AntidoteA.jpg'
import antidoteB from '../images/momimsafe/AntidoteB.jpg'
import antidoteC from '../images/momimsafe/AntidoteC.jpg'
import labourA from '../images/momimsafe/labourA.jpg'
import labourB from '../images/momimsafe/labourB.jpg'


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
    }
}


const body=<span><CustomLink to='https://momimsafe.live' inline={true}>momimsafe.live</CustomLink> is an interactive website that ran as an active live-stream of my home studio space in Chicago from April - August, 2020, where I spent the majority of my time during the Coronavirus pandemic. It was intially developed in response to the COVID-19 lockdown, with an urgent need in mind; to be visually and physically accessible to all my global friends and family. An alternate mode of intimacy allowed one to send a message from the website, which was printed in real-time with a thermal printer in my space. The work is now in an archived state, where a video is playing on loop.</span>
const bodyB=<span><CustomLink to="https://momimsafe.live/#/printer" inline={true}>Virtual Printer</CustomLink> is an interactive simulation of that physical thermal printer. This simulacra allows participants to explore the entire database of messages received during this work.</span>
const bodyC=<span><span style={cvStyles.title}>Labor of Love</span> (top) is an on-going series that pins these messages as a reminder of empathy, resilience, and strength in a time of uncertainty and isolation.<span style={cvStyles.title}> (covid-19) Antidote</span> (bottom) is a limited edition artist book that reinterprets these messages with a medicinal value.</span>

class momimsafe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const oneImgStyle = [commonWorkStyles.oneImage, commonWorkStyles.imgMediaQuery];

    return (
        <div style={styles.container}>
            <Header title="MOMIMSAFE" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'momimsafe.live'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live'}></iframe>
              </div>
              <div style={[commonWorkStyles.body, styles.additionPadding]}>
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'virtual printer'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live/#/printer'}></iframe>
              </div>
              <img style={oneImgStyle} alt={'momimsafe'} src={momsafe}/>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                  <img style={commonWorkStyles.twoImages} alt={'labourA'} src={labourA}/>
                  <img style={commonWorkStyles.twoImages} alt={'labourB'} src={labourB}/>
                </div>
              </div>
              <div style={[commonWorkStyles.body, styles.additionPadding]}>
                {bodyC}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'AntidoteA'} src={antidoteA}/>
                    <img style={commonWorkStyles.threeImages} alt={'AntidoteB'} src={antidoteB}/>
                    <img style={commonWorkStyles.threeImages} alt={'AntidoteC'} src={antidoteC}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(momimsafe);