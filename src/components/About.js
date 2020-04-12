import React from 'react'
import Radium from 'radium'
import CustomLink from './CustomLink.js'
import { padding, textShadow, fontSize, fontFamily, color, commonWorkStyles, boxShadow } from './CommonStyles.js'
import CustomButton from './CustomButton.js'

// Images
import backgroundStrange from '../images/bgStrange.jpg'

// Font Awesome icons
import { ReactComponent as Instagram } from '../icons/instagram.svg'
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg'
import { ReactComponent as Github } from '../icons/github.svg'
import { ReactComponent as Soundcloud } from '../icons/soundcloud.svg'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: padding.extraSmall,

        '@media (min-width: 900px)': {  
            marginTop: padding.verySmall
        }
    },

    contactContainer: {
        marginTop: padding.verySmall,
        marginBottom: padding.small,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
        // We breath the About UI to split contacts and bio tile acrosss a vertical line. 
        '@media (min-width: 750px)' : {
            justifyContent: 'space-between'
        }
    },

    contactTile: {
        display: 'flex',
        flexDirection: 'column',
        
        // We breath the About UI to split contacts and bio tile acrosss a vertical line. 
        '@media (min-width: 750px)' : {
            // No change
            maxWidth: 'calc(100%/2)',
            alignItems: 'flex-start'
        }
    },

    contactButton: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        padding: padding.verySmall,
        backgroundColor: color.deepBlue,
        color: color.featherWhite,
        border: 'inherit',
        letterSpacing: '2.5px',
        alignSelf: 'center',

        '@media (min-width: 450px)': {  
            // No change. 
        },

        '@media (min-width: 600px)': {  
            // No change
            fontSize: fontSize.big,
            padding: padding.small
        },

        '@media (min-width: 750px)': {  
            alignSelf: 'start'
        },

        '@media (min-width: 900px)': {
            fontSize: fontSize.veryBig
        }, 

        '@media (min-width: 1200px)' : {
            // No change
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 1700px)' : {
            // No change
           
        }
    },

    email: {
        fontFamily: fontFamily.din,
        fontSize: fontSize.small,
        marginTop: padding.small,
        marginBottom: padding.small,
        textShadow: textShadow.slateGrey,
        color: color.darkGrey,
        border: 'inherit',
        letterSpacing: '3px',
        alignSelf: 'center',

        '@media (min-width: 450px)': {  
            // No change. 
        },

        '@media (min-width: 600px)': {  
            // fontSize: fontSize.big,
            marginTop: padding.big,
            marginBottom: padding.big
        },

        '@media (min-width: 750px)': {  
            // No change
            alignSelf: 'start',
            fontSize: fontSize.big 
        },

        '@media (min-width: 900px)': {
            // fontSize: fontSize.veryBig
        }, 

        '@media (min-width: 1200px)' : {

        },

        '@media (min-width: 1400px)' : {
            // fontSize: fontSize.veryBig,
            // marginTop: padding.veryBig,
            // marginBottom: padding.veryBig
        },

        '@media (min-width: 1700px)' : {
        }
    },

    contactIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: padding.small,
        '@media (min-width: 750px)' : {
            // No change
            alignSelf: 'start'
        }
    },

    iconWrapper: {
        width: fontSize.big,
        height: fontSize.big,
        fill: color.darkGrey,
        marginRight: padding.small,

        '@media (min-width: 450px)': {  
            // No change. 
        },

        '@media (min-width: 600px)': {  
            width: fontSize.extraBig,
            height: fontSize.extraBig
        },

        '@media (min-width: 750px)': {  
            // No change
        },

        '@media (min-width: 900px)': {
            marginRight: padding.big
        }, 

        '@media (min-width: 1200px)' : {
            // No change
        },

        '@media (min-width: 1400px)' : {
            height: fontSize.huge,
            width: fontSize.huge
        },

        '@media (min-width: 1700px)' : {
            // No change
        }
    },

    bodyMediaQuery: {
        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.big
        }
    },

    icon: {
        width: '100%',
        height: '100%'
    }
};

const bioA="Welcome, and thank you for parking at my (web) address. I am a Chicago based artist, deriving interests from philosophy, history of control, and cybernetic theory. My art practice is a platform to think, elaborate on ideas, experiment, play and meditate on externalizing the internal affairs of my body’s interaction with our society. My creative acts create a bridge between the biotic (human) and abiotic (machine) in an attempt to pause and pay attention to how technology has transformed us and vice-versa. Every act functions like a systemic metaphor, assembled with the craft of computation, code and algorithms."; 

const bioB="This website is an organized repository of my past and on-going creative inquiries. Apart from personal explorations, I deeply enjoy learning and collaborating with other artists. Please reach out to me if you’d like to build something together."; 

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        let bodyStyle = [commonWorkStyles.body, styles.contactTile, styles.bodyMediaQuery]; 
        return (
            <div style={styles.container}>
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Title'} src={backgroundStrange}/>
                </div>
                <div style={styles.contactContainer}>
                    <div style={styles.contactTile}>
                        <CustomButton isStatic={true} buttonStyle={styles.contactButton}>
                            {'Contact'}
                        </CustomButton>
                        <div style={styles.email}>
                            {'hello@amaykataria.com'}
                        </div>
                        <div style={styles.contactIconsContainer}>
                            <CustomLink customStyle={styles.iconWrapper} to='https://github.com/eulphean'>
                                <Github style={styles.icon} key='one'/>
                            </CustomLink>
                            <CustomLink customStyle={styles.iconWrapper} to='https://www.linkedin.com/in/amay-kataria-80301449'>
                                <LinkedIn style={styles.icon} key='two'/>
                            </CustomLink>
                            <CustomLink customStyle={styles.iconWrapper} to='https://soundcloud.com/eulphean'>
                                <Soundcloud style={styles.icon} key='three'/>
                            </CustomLink>
                            <CustomLink customStyle={styles.iconWrapper} to='https://www.instagram.com/eulphean/'>
                                <Instagram style={styles.icon} key='four'/>
                            </CustomLink>
                        </div>
                    </div>
                    <div style={bodyStyle}>
                        {bioA}
                        <br /><br />
                        {bioB}
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(About);