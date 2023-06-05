import React from 'react'
import Radium from 'radium'
import { isMobile, isTablet, isMobileSafari} from 'react-device-detect'
import { color, boxShadow } from './CommonStyles.js'

const styles={
    activeButton: {
        backgroundColor: color.deepBlue,
        color: color.featherWhite,
        //boxShadow: boxShadow.alphaDeepBlue,
        //textShadow: {},
        border: 'none'
    },

    // Style for hovering. 
    hoverButton: {
        //backgroundColor: color.deepBlue,
        color: color.hoverRed,
        opacity: '95%'
    }
};

class CustomButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHover: false
        };

        this.isHoverDisabled = isMobile || isTablet || isMobileSafari; 
    }

    render() {
        let buttonStyle = this.props.buttonStyle; 
        let isHovering = this.state.isHover && !this.props.isStatic; 

        // Is it the button active? 
        buttonStyle = this.props.isActive ? [buttonStyle, styles.activeButton] : buttonStyle;   
        buttonStyle = isHovering ? [buttonStyle, styles.hoverButton] : buttonStyle; 
        
        return (
            <button 
                style={buttonStyle}
                onClick={this.props.onClick ? this.onClick.bind(this) : () => {}}
                onMouseEnter={this.isHoverDisabled ? () => {} : this.onHover.bind(this)}
                onMouseLeave={this.isHoverDisabled ? () => {} : this.onRemoveHover.bind(this)}
            >
                {this.props.children}
            </button>
        );
    }

    onClick() {
        this.props.onClick(this.props.children); 
    }

    onHover() {
        this.setState({
            isHover: true
        }); 
    }

    onRemoveHover() {
        this.setState({
            isHover: false
        }); 
    }
}


export default Radium(CustomButton);