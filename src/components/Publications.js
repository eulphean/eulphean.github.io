import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',

      }
}
class Publications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            Publications
         </div>
    );
  }
}

export default Radium(Publications);