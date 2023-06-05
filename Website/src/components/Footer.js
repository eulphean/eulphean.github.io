import React from 'react'
import Radium from 'radium'
import { fontSize, padding, color, fontFamily } from './CommonStyles.js'

const styles={
    container: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        //backgroundColor: color.deepBlue,
        marginTop: '20px'
    },

    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: fontSize.verySmall,
      fontFamily: fontFamily.din,
      letterSpacing: '2.0px',
      padding: padding.extraSmall,
      color: color.deepBlue
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
             © 2023 AMAY KATARIA, ALL RIGHTS RESERVED
            </div>
         </div>
    );
  }
}

export default Radium(Footer);