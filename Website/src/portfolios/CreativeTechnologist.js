// File: CreativeTechnologist.js
// Author: Amay Kataria
// Date: 06/15/2023
// Description: Portfolio drop-in for a creative technologist.

import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles, padding, fontFamily, color, fontSize} from '../components/CommonStyles.js'
import CustomButton from '../components/CustomButton.js';
import CustomLink from '../components/CustomLink.js';
import pdf from './ct-2023.pdf'

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

    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: padding.huge
    },
    
    button: { 
      fontFamily: fontFamily.bebas,
      fontSize: fontSize.big,
      padding: padding.verySmall,
      backgroundColor: 'transparent',
      color: color.deepBlue,
      border: 'none',
      letterSpacing: '2.5px',
      alignSelf: 'center',

      '@media (min-width: 450px)': {  
        // No change.
      },

      '@media (min-width: 600px)': {  
          // fontSize: fontSize.veryBig,
      },

      '@media (min-width: 750px)': {  
          // padding: padding.small,
          fontSize: fontSize.extraBig,
      },

      '@media (min-width: 900px)': {  
          // fontSize: fontSize.huge,
      },

      '@media (min-width: 1200px)' : {
          // fontSize: fontSize.extraHuge
      },

      '@media (min-width: 1400px)' : {
          // fontSize: fontSize.veryHuge
      },

      '@media (min-width: 1700px)' : {
          
      }
    },

    hover: {
      color: color.bloodRed
    }
};

class CreativeTechnologist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Creative Technologist" />
            <div style={styles.content}></div>
            <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.vimeoContainer}>
                  <iframe title={'Creative Technologist'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/836968850" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            <div style={commonWorkStyles.body}>
              <div style={styles.buttonContainer}>
              <CustomLink customStyle={styles.button} to={"https://online.fliphtml5.com/gijaf/fvvk/#p=1"}>{'Portfolio (flip book)'}</CustomLink>
              <CustomButton onClick={this.onClick.bind(this)} buttonStyle={styles.button}>{'Portfolio (pdf)'}</CustomButton>
              </div>
            </div>
        </div>
    );
  }

  onClick = () => {
    console.log('PDF download');
    var link = document.createElement('a');
    link.href = pdf;
    link.download = 'Amay Kataria Portfolio 2023.pdf';
    link.dispatchEvent(new MouseEvent('click'));
    // Open directly in the browser
    // window.open(pdf);
  }
}

export default Radium(CreativeTechnologist);