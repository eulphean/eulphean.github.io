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

const link0=(<CustomLink to='https://ethlabor.net' inline={true}>Ethereum Farm</CustomLink>);
const bodyA=' was developed as a commission for '
const linkA=(<CustomLink to='https://stephanierothenberg.com/' inline={true}>Stephanie Rothenberg's</CustomLink>);
const bodyB=' project ';
const linkB=(<CustomLink to='https://stephanierothenberg.com/proof-of-soil/' inline={true}>Proof of Soil</CustomLink>);
const bodyC='. It is a live data visualization of the Ethereum Blockchain on a hypothetical farm. It plants pending transactions (green dots) that are broadcasted on the Ethereum network and marks them as mined (white dots) whenever a new block is created with such transactions. Over time, the farm actively keeps getting populated with pending and mined transactions that captures the dynamic operating frequency of the Ethereum Blockchain.'

class EthereumFarm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Ethereum Farm" />
            <div style={styles.content}>
              <div style={commonWorkStyles.body}>
                {link0}
                {bodyA}
                {linkA}
                {bodyB}
                {linkB}
                {bodyC}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <iframe title={'Ethereum Farm'} style={commonWorkStyles.webFrame} src={'https://ethlabor.net'}></iframe>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(EthereumFarm);