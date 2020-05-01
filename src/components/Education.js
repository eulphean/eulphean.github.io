import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',

      }
}
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            Education
         </div>
    );
  }
}

export default Radium(Education);