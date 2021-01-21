import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
import {commonWorkStyles} from '../components/CommonStyles.js'
import one from '../images/Biography/portraitA.jpg'
import two from '../images/Biography/portraitB.jpg'
import three from '../images/Biography/portraitC.jpg'
import four from '../images/Biography/portraitD.jpg'
import five from '../images/Biography/portraitE.jpg'
import six from '../images/Biography/portraitF.jpg'

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

const body=<span><CustomLink to='https://biographyofaportrait.art' inline={true}>Biography of a Portrait</CustomLink> is a net art commission for Chicago-based interdisciplinary artist <CustomLink to='https://jennifertrainadorge.com/' inline={true}>Jennifer Traina-Dorge</CustomLink> to develop an interactive web experience in response to the grief and loss she experienced due to the pandemic. The work is divided into three phases: Today - Tomorrow - Yesterday. Every day of the week is represented by a video snippet that she recorded during quarantine and is a marker in the seven stages of grief. The work culminates in a virtual aesthetic that one can experience intimately through the comfort of their devices.</span>

class BiographyofaPortrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Biography of a Portrait" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'One'} src={four}/>
                    <img style={commonWorkStyles.threeImages} alt={'Two'} src={two}/>
                    <img style={commonWorkStyles.threeImages} alt={'Three'} src={three}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.multiImageContainer}>
                    <img style={commonWorkStyles.threeImages} alt={'Four'} src={six}/>
                    <img style={commonWorkStyles.threeImages} alt={'Five'} src={five}/>
                    <img style={commonWorkStyles.threeImages} alt={'Six'} src={one}/>
                </div>
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Biography of a Portrait'} style={commonWorkStyles.webFrame} src={'https://biographyofaportrait.art'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(BiographyofaPortrait);