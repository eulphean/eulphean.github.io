import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'row'
    }
}

class Unnamed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Unnamed" />
            <div style={styles.content}>
                 Hi I am Ontology
            </div>
        </div>
    );
  }
}

export default Radium(Unnamed);