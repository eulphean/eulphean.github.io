import React from 'react'
import Radium from 'radium'
import { Link, useLocation } from 'react-router-dom'
import CustomButton from './CustomButton.js'
import { color, fontSize, fontFamily, padding } from './CommonStyles.js'
const RadiumLink = Radium(Link); 

const styles={
    container: {
        // backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    button: {
        fontSize: fontSize.small,
        color: color.deepBlue,
        // textShadow: textShadow.slateGrey,
        fontFamily: fontFamily.din,
        letterSpacing: '1.0px',
        paddingLeft: padding.tinySmall,
        paddingRight: padding.tinySmall,
        // marginLeft: padding.extraSmall,
        marginRight: padding.big,
        backgroundColor: 'transparent',
        border: 'none',

        '@media (min-width: 450px)': {  
            // No change.
        },

        '@media (min-width: 600px)': {  
            //fontSize: fontSize.verySmall,
        },

        '@media (min-width: 750px)': {  
            // padding: padding.small,
            // fontSize: fontSize.small,
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.veryBig,
        },

        '@media (min-width: 1200px)' : {
            // fontSize: fontSize.extraHuge
        },

        '@media (min-width: 1400px)' : {
            // fontSize: fontSize.extraBig
        },

        '@media (min-width: 1700px)' : {
            
        }
    },

    title: {
        letterSpacing: '1.5px'
    }
};

function Title() {
    let curRoute = useLocation().pathname; 
    let aboutState = curRoute === '/About'; 
    let workState = curRoute === '/Works' || curRoute === '/'; 
    let cvState = curRoute === '/Bio'; 
    // let commissionState = curRoute === '/Commissions';
    // let archiveState = curRoute === '/Archive';

    return (
        <div style={styles.container}>
            {/* <CustomButton 
                buttonStyle={styles.button} 
                isActive={workState}
            >
                <RadiumLink to="/Works">WORKS</RadiumLink>
            </CustomButton> */}
            {/* <CustomButton 
                buttonStyle={styles.button} 
                isActive={commissionState}
            >
                <RadiumLink to="/Commissions">COMMISSIONS</RadiumLink>
            </CustomButton>
            <CustomButton 
                buttonStyle={styles.button} 
                isActive={archiveState}
            >
                <RadiumLink to="/Archive">ARCHIVE</RadiumLink>
            </CustomButton> */}
            {/* <CustomButton 
                buttonStyle={styles.button} 
                isActive={cvState}
            >
                <RadiumLink to="/Bio">CV</RadiumLink>
            </CustomButton>
            <CustomButton 
                buttonStyle={[styles.button, styles.title]}
                isActive={aboutState} 
            >
                <RadiumLink to="/About">ABOUT</RadiumLink>
            </CustomButton> */}
        </div>
    );
}

export default Radium(Title);