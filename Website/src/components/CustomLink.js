import React from 'react'
import ReactGA from 'react-ga'
import Radium from 'radium'
import { isMobile, isTablet, isMobileSafari } from 'react-device-detect'
import { color } from './CommonStyles.js' 

const styles={
    link: {
        display: 'flex'
    },
    color: {
        color: color.bloodRed, // Default link color
        display: 'inline'
    },
    hover: {
        color: color.specialRed,
        opacity: '100%'
    },

    italics: {
        fontStyle: 'italic'
    }
};

class CustomLink extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isHover: false
        }

        this.isHoverDisabled = isMobile || isTablet || isMobileSafari; 
    }

    render() {
        // If it's an inline link, we will color the link.
        let style = this.props.inline ? styles.color : styles.link;
        style = this.props.italics ? [styles.italics, style] : style; 
        let extendedStyle = this.props.customStyle ? [style, this.props.customStyle] : style;
        extendedStyle = this.state.isHover ? [extendedStyle, styles.hover] : extendedStyle; 

        return (
            <div 
                onMouseEnter={this.isHoverDisabled ? () => {} : this.onHover.bind(this)} 
                onMouseLeave={this.isHoverDisabled ? () => {} : this.onLeaveHover.bind(this)} 
                style={extendedStyle}>
                <ReactGA.OutboundLink
                    eventLabel={this.props.to}
                    target='_blank' 
                    rel="noopener noreferrer" 
                    to={this.props.to}
                >
                {this.props.children}
                </ReactGA.OutboundLink>
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


export default Radium(CustomLink);