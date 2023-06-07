import React, {useState} from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Back } from '../icons/back.svg'
import CustomButton from './CustomButton.js'
import { fontSize, fontFamily, padding, color } from './CommonStyles.js'
// const RadiumLink = Radium(Link);

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
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.big,
        padding: padding.verySmall,
        backgroundColor: color.bloodRed,
        color: color.featherWhite,
        border: 'none',
        letterSpacing: '2.5px',
        alignSelf: 'center',

        '@media (min-width: 450px)': {  
          // No change.
        },

        '@media (min-width: 600px)': {  
            // fontSize: fontSize.veryBig,
        },

        '@media (min-width: 750px)': {  
            // padding: padding.small,
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 900px)': {  
            // fontSize: fontSize.huge,
        },

        '@media (min-width: 1200px)' : {
            // fontSize: fontSize.extraHuge
        },

        '@media (min-width: 1400px)' : {
            // fontSize: fontSize.veryHuge
        },

        '@media (min-width: 1700px)' : {
            
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
        fill: color.hoverRed,
        opacity: '95%'
      }
}

function Header (props) {
  const [isHover, setHover] = useState(false);

  const iconStyle = isHover ? [styles.iconContainer, styles.hover] : styles.iconContainer; 
  const newRoute = useHistory()
  console.log(newRoute);

  const onHover = () => {
    setHover(true);
  }

  const onLeaveHover = () => {
    setHover(false);
  }

  const onMouseClick = () => {
    newRoute.goBack();
  }

  return (
      <div style={styles.container}>
          <CustomButton buttonStyle={styles.button} isStatic={true}>{props.title}</CustomButton>
          <div onClick={onMouseClick} onMouseEnter={onHover} onMouseLeave={onLeaveHover} style={iconStyle}>
            <Back style={styles.iconStyle}/>
          </div>          
      </div>
  );
}

export default Radium(Header);