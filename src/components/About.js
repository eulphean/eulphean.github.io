import React from 'react'
import Radium from 'radium'
import CustomLink from './CustomLink.js'
import { padding, textShadow, fontSize, fontFamily, color, commonWorkStyles } from './CommonStyles.js'
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
        color: color.deepBlue,
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
            fontSize: fontSize.veryBig,
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

    icon: {
        width: '100%',
        height: '100%'
    }
};

const bio="Amay Kataria (b. 1990) graduated from the School of the Art Institute of Chicago (2019) with an MFA in Art & Technology Studies. He completed his bachelors in Computer Engineering from Virginia Tech (2012) and worked for Microsoft Corp. (2013-2017). He has been invited as a visiting artist at the Ethereal Summit, ThoughtWorks and Bellas Artes Outpost. He has participated in group shows at the Electromuseum, Ars Electronica, TIFA India, Art Center Nabi, ThoughtWorks, and Experimental Sound Studio. He will be an artist in residence at Sandnes Kommune in Stavanger, Norway in 2020, is currently a resident at Mana Contemporary in Chicago, and was awarded the new media art residency at Art Center Nabi in Seoul, South Korea in 2018. To support his work, he has received grants in the name of Shapiro Level-Up Research Grant and Bajaj Art Scholarship."; 

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {

        return (
            <div style={styles.container}>
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Title'} src={backgroundStrange}/>
                </div>
                <div style={styles.contactContainer}>
                    <div style={styles.contactTile}>
                        <CustomButton buttonStyle={styles.contactButton} isStatic={true} title={'Contact'} />
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
                    <div style={[commonWorkStyles.body, styles.contactTile]}>
                        {bio}
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(About);