import React from 'react'
import Radium from 'radium'
import { Link, useLocation } from 'react-router-dom'
import CustomButton from './CustomButton.js'
import { color, fontSize, fontFamily, padding, textShadow } from './CommonStyles.js'
const RadiumLink = Radium(Link); 

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        fontSize: fontSize.big,
        color: color.deepBlue,
        textShadow: textShadow.slateGrey,
        fontFamily: fontFamily.bebas,
        letterSpacing: '2.5px',
        padding: padding.verySmall,
        backgroundColor: 'transparent',
        border: 'none',

        '@media (min-width: 450px)': {  
            // No change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.veryBig,
        },

        '@media (min-width: 750px)': {  
            padding: padding.small,
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.huge,
        },

        '@media (min-width: 1200px)' : {
            // fontSize: fontSize.extraHuge
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.veryHuge
        },

        '@media (min-width: 1700px)' : {
            
        }
    },

    title: {
        letterSpacing: '3.5px'
    }
};

function Title() {
    let curRoute = useLocation().pathname; 
    let aboutState = curRoute === '/About' || curRoute === '/'; 
    let workState = curRoute === '/Works'; 
    let cvState = curRoute === '/Bio'; 

    return (
        <div style={styles.container}>
            <CustomButton 
                buttonStyle={[styles.button, styles.title]}
                isActive={aboutState} 
            >
                <RadiumLink to="/About">AMAY KATARIA</RadiumLink>
            </CustomButton>
            <div>
                <CustomButton 
                    buttonStyle={styles.button} 
                    isActive={workState}
                >
                    <RadiumLink to="/Works">Works</RadiumLink>
                </CustomButton>
                <CustomButton 
                    buttonStyle={styles.button} 
                    isActive={cvState}
                >
                    <RadiumLink to="/Bio">CV</RadiumLink>
                </CustomButton>
            </div>
        </div>
    );
}

export default Radium(Title);