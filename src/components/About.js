import React from 'react'
import Radium from 'radium'
import CustomLink from './CustomLink.js'
import { padding, fontSize, fontFamily, color, textInputWidth, textInputHeight, commonWorkStyles } from './CommonStyles.js'
import CustomButton from './CustomButton.js'

// Images
// import backgroundStrange from '../images/bgStrange.jpg'
import title from '../images/title2.jpg'

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
        marginTop: padding.small,
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
        alignSelf: 'center',
        marginTop: padding.verySmall,
        '@media (min-width: 750px)' : {
            // No change
            alignSelf: 'start'
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
        fill: color.darkGrey,
        marginRight: padding.big
    },

    bodyMediaQuery: {
        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.big
        }
    },

    icon: {
        width: '150%',
        height: '150%'
    },

    subscriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: padding.small,
        alignItems: 'center',
        
        '@media (min-width: 768px)': {  
            alignItems: 'flex-start'
        },
        
    },

    subscribeButton: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.verySmall,
        backgroundColor: color.deepBlue,
        color: color.featherWhite,
        border: 'inherit',
        letterSpacing: '2.5px',
        alignSelf: 'stretch'
    },

    subscribeInput: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: padding.verySmall,
        width: textInputWidth.small,
        height: textInputHeight.small,

        '@media (min-width: 600px)': {  
            width: textInputWidth.medium
        },

        '@media (min-width: 800px)': {  
            height: textInputHeight.medium
        },

        '@media (min-width: 1200px)' : {
            width: textInputWidth.large
        }
    },

    textArea: {
        border: 'none',
        width: '100%',
        fontSize: fontSize.verySmall,
        padding: padding.small,
        fontFamily: fontFamily.din,
        color: color.pureTeal,
        letterSpacing: '1px',

        '@media (min-width: 800px)' : {
            // no change.
            fontSize: fontSize.small
        }
    },

    thanks: {
        marginTop: padding.small,
        backgroundColor: color.slateGrey,
        color: color.featherWhite
    }
};

const bio=<span>Welcome, and thank you for parking at my (web) address. This website is an up-to-date repository of my most recent creative inquiries. My artistic pursuit is a tool for inquiring, experimenting, and playing with subject matter that is concerned with the state of "being" and "time". It attempts to deconstruct the human condition by exploring themes of impermanence and unpredictability through the lens of temporality. Every creative act is like an event unfolding in space & time - an organic synthesis of philosophical research, historical excavation, and scientific exploration, in tandem with creative experimentation with technology. By utilizing the craft of code, algorithms, and computer-aided tools, my works contrive systemic metaphors, which superimpose physical and digital materialities.</span>
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            isVisible: true
        };

        this.textArea = React.createRef(); 
        this.maxLength = 50; // For hack prevention.
    }

    render() {
        let bodyStyle = [commonWorkStyles.body, styles.contactTile, styles.bodyMediaQuery]; 
        let subscribeStyle = [commonWorkStyles.body, styles.bodyMediaQuery];
        let emailStyle = [commonWorkStyles.body, styles.bodyMediaQuery, styles.email];
        let textAreaContent = this.state.isVisible ? this.getTextArea() : this.getThanks(subscribeStyle); 
        return (
            <div style={styles.container}>
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'Title'} src={title}/>
                </div>
                <div style={styles.contactContainer}>
                    <div style={styles.contactTile}>
                        <CustomButton isStatic={true} buttonStyle={styles.contactButton}>
                            {'Contact'}
                        </CustomButton>
                        <div style={styles.subscriptionContainer}>
                            <div style={subscribeStyle}>
                                {'Be the first to hear from me!'}
                            </div>
                            {textAreaContent}
                        </div>
                        <div style={emailStyle}>
                            {'studio@amaykataria.com'}
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
                        {bio}
                    </div>
                </div>
            </div>
        );
    }

    getTextArea() {
        return (
            <div style={styles.subscribeInput}>
                <textarea 
                        ref={this.textArea}
                        style={styles.textArea}
                        outline='none'
                        maxLength={this.maxLength} 
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        placeholder={'Type your email...'}
                />
                <CustomButton onClick={this.onSubmit.bind(this)} buttonStyle={styles.subscribeButton}>
                    {'Subscribe'}
                </CustomButton>
            </div>
        );
    }

    getThanks(bodyStyle) {
        let style=[bodyStyle, styles.thanks];
        return (
            <div style={style}>
                ...Thanks for signing up...
            </div>
        )
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        }); 
    }

    onSubmit() {
        let content = this.state.value; 
        if (content.length !== 0 || content.length < this.maxLength) {
            this.setState({
                isVisible: false
            });
        }

        // TAKE ACTION AND SEND THIS CONTENT
        // TO THE MAIL CHIMP / SERVICE 
        // TO ADD IT TO THE LIST OF EMAILS. 
    }
}

export default Radium(About);