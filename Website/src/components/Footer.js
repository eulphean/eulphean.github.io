import React from 'react'
import Radium from 'radium'
import { fontSize, padding, color, fontFamily } from './CommonStyles.js'

const styles={
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: color.darkGrey,
        marginTop: '20px'
    },

    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: fontSize.verySmall,
      fontFamily: fontFamily.din,
      padding: padding.extraSmall,
      color: color.featherWhite
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
             © Amay Kataria 2021 All Rights Reserved
            </div>
         </div>
    );
  }
}

export default Radium(Footer);