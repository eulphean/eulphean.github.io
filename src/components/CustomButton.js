import React from 'react'
import Radium from 'radium'
import { isMobile } from 'react-device-detect'
import { color, boxShadow } from './CommonStyles.js'

const styles={
    activeButton: {
        backgroundColor: color.bloodRed,
        color: color.featherWhite,
        boxShadow: boxShadow.alphaDeepBlue,
        textShadow: {},
        border: 'none'
    },

    hoverButton: {
        backgroundColor: color.hover,
        color: color.featherWhite
    }
};

class CustomButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            isHover: false
        };

        // Set the primary button style based on the styles 
        // coming from the prop (buttonStyle). 
        this.primaryButtonStyle = this.props.buttonStyle ? this.props.buttonStyle : styles.button; 
    }

    render() {
        // Set the right style based on the button's active state. 
        let buttonStyle = this.props.isActive || this.state.isActive ? [this.primaryButtonStyle, styles.activeButton] : [this.primaryButtonStyle];    
        let children = this.props.title ? this.props.title : this.props.children ;

        buttonStyle = this.state.isHover ? [buttonStyle, styles.hoverButton] : buttonStyle;

        return (
            <button 
                style={buttonStyle}
                onClick={this.props.onClick ? this.onClick.bind(this) : () => {}}
                onMouseEnter={this.onHover.bind(this)}
                onMouseLeave={this.onRemoveHover.bind(this)}
            >
                {children}
            </button>
        );
    }

    onClick() {
        this.setState({
            isActive: !this.state.isActive
        }); 

        this.props.onClick(this.props.title); 
    }

    onHover() {
        if (this.state.isActive || this.props.isActive || this.props.isStatic || isMobile) {
            // Do nothing. 
        } else {
            this.setState({
                isHover: true
            });
        }
    }

    onRemoveHover() {
        this.setState({
            isHover: false
        }); 
    }
}


export default Radium(CustomButton);