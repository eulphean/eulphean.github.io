import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import { fontSize, padding, color } from './CommonStyles.js'
import { ReactComponent as Back } from '../icons/back.svg'
import { ReactComponent as Up } from '../icons/up.svg'
const RadiumLink = Radium(Link);

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
        alignSelf: 'center',
        backgroundColor: color.slateGrey,
        width: '50px',
        height: '50px'
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

         </div>
    );
  }
}

export default Radium(Footer);