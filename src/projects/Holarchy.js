import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles} from '../components/CommonStyles.js'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'column'
    }
};

const link=(<CustomLink to='https://amaykataria.com/EvolutionaryHolarchy/' inline={true}>Evolutionary Holarchy</CustomLink>);
const body=' extends the Holon series with a genetic system that is not confined within the bounds of the microscopic and the macroscopic. Previously, the Holon prints had a pre-defined start and end point. The new system is an open-ended system that can self-maintain itself between multiple states of its lifetime, just like a living organism.'

class Holarchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Evolutionary Holarchy" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {link}
                {body}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Holarchy'} style={commonWorkStyles.webFrame} src={'https://amaykataria.com/EvolutionaryHolarchy/'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Holarchy);