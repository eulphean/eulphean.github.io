import React from 'react'
import Radium from 'radium'
import { Link, useLocation } from 'react-router-dom'
import CustomButton from './CustomButton.js'
import { color, fontSize, fontFamily, padding, commonWorkStyles } from './CommonStyles.js'
import CustomLink from './CustomLink.js'
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg'
import { ReactComponent as Github } from '../icons/github.svg'
import { ReactComponent as Instagram } from '../icons/instagram.svg'
const RadiumLink = Radium(Link); 


const styles={
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: padding.small,
        paddingBottom: padding.small,
        // paddingLeft: '2%',
        // paddingRight: '2%',

        // '@media (min-width: 750px)': {
        //     paddingLeft: '6%',
        //     paddingRight: '6%'
        // },

        // '@media (min-width: 900px)': {
        //     paddingLeft: '8%',
        //     paddingRight: '8%'
        // },

        // '@media (min-width: 1200px)': {
        //     paddingLeft: '14%',
        //     paddingRight: '14%'
        // },

        // '@media (min-width: 1400px)': {
        //     paddingLeft: '20%',
        //     paddingRight: '20%'
        // },

        // '@media (min-width: 1700px)': {
        //     paddingLeft: '25%',
        //     paddingRight: '25%'
        // }
    },

    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: padding.small
    },

    iconWrapper: {
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fill: 'white',
        
        ':hover': {
            transform: 'rotate(-5deg) scale(1.5)',
            backgroundColor: 'red'
        }
    },
    
    icon: {
        height: '20px',
        width: '20px'
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
    },

    homeLink: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: fontSize.small,
        
        '@media (min-width: 640px)': {
            fontSize: fontSize.verySmall
        },
        
        '@media (min-width: 900px)': {
            fontSize: fontSize.small
        }
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
            <div style={styles.socialContainer}>
                <CustomLink inline={true} to='https://amaykataria.com/' customStyle={styles.homeLink}>HOME</CustomLink>
                <CustomLink inline={true} to='https://amaykataria.com/commercial' customStyle={styles.homeLink}>COMMERCIAL</CustomLink>
            </div>
            
            <div style={styles.socialContainer}>
                <CustomLink customStyle={styles.iconWrapper} to='https://linkedin.com/in/amaykataria'>
                    <LinkedIn style={styles.icon} />
                </CustomLink>
                <CustomLink customStyle={styles.iconWrapper} to='https://instagram.com/amay.kataria'>
                    <Instagram style={styles.icon} />
                </CustomLink>
                <CustomLink customStyle={styles.iconWrapper} to='https://github.com/eulphean'>
                    <Github style={styles.icon} />
                </CustomLink>
            </div>
        </div>
    );
}

export default Radium(Title);