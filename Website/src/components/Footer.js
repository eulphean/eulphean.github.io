import React from 'react'
import Radium from 'radium'
import { fontSize, padding, color, fontFamily } from './CommonStyles.js'

const styles={
    container: {
        // position: 'absolute',
        // bottom: 5,
        // left: 0,
        // right: 0,
        //backgroundColor: color.deepBlue,
        marginTop: padding.veryBig,
        padding: padding.small
    },

    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: "10px",
      fontFamily: fontFamily.din,
      letterSpacing: '1.0px',
      padding: padding.extraSmall,
      color: "white",

      '@media (min-width: 450px)': {  
        // No change. 
      },

      '@media (min-width: 600px)': {  
          // No change.
      },

      '@media (min-width: 750px)': {  
          //fontSize: fontSize.small
      },

      '@media (min-width: 900px)': {
          // no change.
          fontSize: fontSize.littleSmall
      }, 

      '@media (min-width: 1200px)' : {
          // fontSize: fontSize.big,
      },

      '@media (min-width: 1400px)' : {
        // no change. 

      },

      '@media (min-width: 1700px)' : {
          // fontSize: fontSize.extraBig
      }
    }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
             © 2025 AMAY KATARIA, ALL RIGHTS RESERVED
            </div>
         </div>
    );
  }
}

export default Radium(Footer);