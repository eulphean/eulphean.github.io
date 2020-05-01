import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',

      }
}
class Residencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            Residencies
         </div>
    );
  }
}

export default Radium(Residencies);