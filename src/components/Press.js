import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',

      }
}
class Press extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            Press
         </div>
    );
  }
}

export default Radium(Press);