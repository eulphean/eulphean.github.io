import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',

      }
}
class PublicTalks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            Public Talks
         </div>
    );
  }
}

export default Radium(PublicTalks);