import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
import {commonWorkStyles} from '../components/CommonStyles.js'
import CustomLink from '../components/CustomLink.js'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'column'
    },

    inline: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
};

const bodyA="From 2013-2017, I worked for Microsoft and spent the longest time in Skype to work on a myriad of projects like user interface development, scalable backend services, artificial intelligence driven bots, and infrastructure/platform work. The biggest impact of our team was to ship a newly developed Skype application in 2017 that people use today. Along with this, we open-sourced "; 
const link=(<CustomLink inline={true} to='https://github.com/Microsoft/reactxp'>ReactXP (cross-platform)</CustomLink>);
const bodyB = " which is developed on top of Facebook's React and React-Native that we used to develop Skype. ";

class Skype extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="Skype" />
            <div style={styles.content}>
              <div style={[commonWorkStyles.body]}>
                {bodyA}
                {link}
                {bodyB}
              </div>
              <div style={commonWorkStyles.imgContainer}>
                <div style={commonWorkStyles.vimeoContainer}>
                  <iframe title={'Skype'} style={commonWorkStyles.vimeoFrame} src="https://player.vimeo.com/video/198950033" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Radium(Skype);