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
        fontFamily: fontFamily.baskerville,
        letterSpacing: '1px',
        padding: padding.extraSmall,
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
    }
};

function Title() {
    let curRoute = useLocation().pathname; 
    let aboutState = curRoute === '/About' || curRoute === '/'; 
    let workState = curRoute === '/Works'; 

    return (
        <div style={styles.container}>
            <CustomButton 
                buttonStyle={styles.button}
                isActive={aboutState} 
            >
                <RadiumLink to="/About">Amay Kataria</RadiumLink>
            </CustomButton>
            <CustomButton 
                buttonStyle={styles.button} 
                isActive={workState}
            >
                <RadiumLink to="/Works">Works</RadiumLink>
            </CustomButton>
        </div>
    );
}

export default Radium(Title);