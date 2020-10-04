import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import { commonWorkStyles, cvStyles, padding } from '../components/CommonStyles.js'
import CustomLink from '../components/CustomLink.js'
import antidoteA from '../images/momimsafe/antidote2.jpg'

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

const linkA=(<CustomLink to='https://momimsafe.live' inline={true}>momimsafe.live</CustomLink>);
const body=" is an active live-stream of my home studio space, where I spend the majority of my time in this post-covid era. It was developed in response to the COVID-19 lockdown, with an urgent need in mind; to be visually and physically accessible to all my friends and family globally; especially my mom, who has been concerned about my safety and health during this time."
const linkB=(<CustomLink to="https://momimsafe.live/#/printer" inline={true}>Virtual Printer</CustomLink>); 
const bodyB=" is an interactive simulation of the thermal printer placed in my home studio, which prints messages sent with momimsafe.live in real-time. This simulacra allows the participants to explore the entire stream of messages received during this work."; 
const title=(<span style={cvStyles.title}>(covid-19) Antidote</span>)
const bodyC=" is a limited edition artist book that aggregates portions of messages received with momimsafe.live. It blurs the line between digital and physical tactility of information to emphasize the courage derived from the kindness of loved ones through a warm technological gesture."; 

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
                {linkA}
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'momimsafe.live'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live'}></iframe>
              </div>
              <div style={[commonWorkStyles.body, styles.additionPadding]}>
                {linkB}
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'virtual printer'} style={commonWorkStyles.webFrame} src={'https://momimsafe.live/#/printer'}></iframe>
              </div>
              <div style={[commonWorkStyles.body, styles.additionPadding]}>
                {title}
                {bodyC}
              </div>
              <img style={oneImgStyle} alt={'AntidoteA'} src={antidoteA}/>
            </div>
        </div>
    );
  }
}

export default Radium(momimsafe);