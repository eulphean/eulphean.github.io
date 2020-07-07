import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import CustomLink from '../components/CustomLink'
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
}

const bodyA='Janus Study (I) stems from my on-going collaboration with Chicago based artist,  ';
const linkA=(<CustomLink to='https://www.philipmulliken.com/' inline={true}>Phillip Mulliken</CustomLink>);
const bodyB=". It's the first edition of a virtual sculpture inspired from the ancient Roman figure Janus, a two-faced god considered a guardian of doorways, transitions, and time. ";

class JanusStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Janus Study (I)" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {bodyA}
                {linkA}
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Ethereum Farm'} style={commonWorkStyles.webFrame} src={'https://ethlabor.net'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(JanusStudy);