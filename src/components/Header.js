import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import { ReactComponent as Back } from '../icons/back.svg'
import CustomButton from './CustomButton.js'
import { fontSize, fontFamily, padding, color } from './CommonStyles.js'
const RadiumLink = Radium(Link);

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: padding.small,

        '@media (min-width: 600px)': {  
          // no change.
          marginTop: padding.small
        },

        '@media (min-width: 750px)': {  
          // no change.
          marginBottom: padding.big
        },

        '@media (min-width: 900px)': {  
          // no change.
          marginTop: padding.big
        },

        '@media (min-width: 1200px)': {  
          // no change
          marginTop: padding.extraBig
        },

        '@media (min-width: 1400px)': {  
          // no change.
          marginBottom: padding.veryBig,
          marginTop: padding.huge
        }
      },
  
      button: { 
        fontFamily: fontFamily.baskerville,
        fontSize: fontSize.big,
        padding: padding.verySmall,
        backgroundColor: color.bloodRed,
        color: color.featherWhite,
        border: 'none',
        letterSpacing: '1px',
        alignSelf: 'center',

        '@media (min-width: 450px)': {  
          // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.veryBig,
        },

        '@media (min-width: 750px)': {  
          // no change
        },

        '@media (min-width: 900px)': {  
          // no change
        },

        '@media (min-width: 1200px)' : {
          // no change
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.huge
        },

        '@media (min-width: 1700px)' : {
          // no change. 
        }
      },

      iconContainer: {
        width: fontSize.veryBig,
        height: fontSize.veryBig,
        fill: color.darkGrey,

        '@media (min-width: 450px)': {  
          // no change. 
        },

        '@media (min-width: 600px)': {  
            width: fontSize.extraBig,
            height: fontSize.extraBig
        },

        '@media (min-width: 750px)': {  
            // no change
        },

        '@media (min-width: 900px)': {
            // no change
        }, 

        '@media (min-width: 1200px)' : {
            // no change
        },

        '@media (min-width: 1400px)' : {
          width: fontSize.veryHuge,
          height: fontSize.veryHuge,
        },

        '@media (min-width: 1700px)' : {
            // no change
        }
      },

      iconStyle: {
        width: '100%',
        height: '100%'
      }, 

      hover: {
        fill: color.hover
      }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  render() {
    const iconStyle = this.state.isHover ? [styles.iconContainer, styles.hover] : styles.iconContainer; 
    return (
        <div style={styles.container}>
            <CustomButton buttonStyle={styles.button} isStatic={true} title={this.props.title}/>
            <RadiumLink to='/Works'>
                <div onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onLeaveHover.bind(this)} style={iconStyle}>
                  <Back style={styles.iconStyle}/>
                </div>
            </RadiumLink>
        </div>
    );
  }

  onHover() {
    this.setState({
      isHover: true
    });
  }

  onLeaveHover() {
    this.setState({
      isHover: false
    });
  }
}

export default Radium(Header);