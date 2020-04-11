import React from 'react';
import Radium from 'radium'
import { color } from './CommonStyles.js' 

const styles={
    link: {
        display: 'flex'
    },
    color: {
        color: color.bloodRed // Default link color
    },
    hover: {
        color: color.featherWhite,
        backgroundColor: color.hover
    }
};

class CustomLink extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isHover: false
        }
    }

    render() {
        // If it's an inline link, we will color the link.
        const style = this.props.inline ? styles.color : styles.link;
        let extendedStyle = this.props.customStyle ? [style, this.props.customStyle] : style;
        extendedStyle = this.state.isHover ? [extendedStyle, styles.hover] : extendedStyle; 

        return (
            <a onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onLeaveHover.bind(this)} style={extendedStyle} target='_blank' rel="noopener noreferrer" href={this.props.to}>
                {this.props.children}
            </a>
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