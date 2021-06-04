import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink.js'
import { padding, boxShadow, color, fontSize, fontFamily } from './CommonStyles.js'

const styles={
    container: {
        display: 'flex',
        position: 'relative',
        margin: padding.extraSmall,
        boxShadow: boxShadow.alphaDeepBlueSoft,
        height: '100%',

        // 3% is to accomodate the margins.
        width: 'calc(100%/2 - 3%)',

        '@media (min-width: 450px)': {
            width: 'calc(100%/3 - 2.5%)'
        },

        '@media (min-width: 600px)': {
            // No changes
        },

        '@media (min-width: 750px)': {
            margin: padding.verySmall,
            width: 'calc(100%/3 - 2.5%)'
        },

        '@media (min-width: 900px)': {
            // No changes
        },

        '@media (min-width: 1200px)': {
            // No changes
            width: 'calc(100%/3 - 2.0%)'
        },

        '@media (min-width: 1400px)': {
            // No changes
            width: 'calc(100%/3 - 1.5%)'
        },
        '@media (min-width: 1700px)': {
            // No changes
            width: 'calc(100%/4 - 2.0%)',
            margin: padding.small
        }
    },

    link: {
        display: 'flex'
    },

    img: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignSelf: 'center'
    }, 

    hover: {
       visibility: 'visible'
    }, 

    hide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: color.hoverRed,
        opacity: '90%',
        width: '100%',
        height: '100%',
        visibility: 'hidden'
    },

    hoverText: {
        opacity: '100%',
        fontSize: fontSize.small,
        padding: padding.verySmall,
        alignSelf: 'center',
        color: color.featherWhite,
        fontFamily: fontFamily.bebas,
        letterSpacing: '1px',
        textAlign: 'center',

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big,
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.veryBig,
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig,
        }
    }
};

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

    render() {
        return (
             <div onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onLeaveHover.bind(this)} style={[styles.container, styles.width]}>
                {this.getLink()}
             </div>
        );
    }

    click() {
        console.log('Click handled');
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

    getLink() {
        var imgSrc = this.props.project['img'];
        var url = this.props.project['url']; 
        var projLink = '/' + this.props.project['link'];

        var img = (<img style={styles.img} alt={this.props.project['link']} src={imgSrc}/>);
        var hoverDiv = this.getHoverDiv(); 
        return url ? 
            (<CustomLink style={styles.link} to={url}>
                {hoverDiv}
                {img}
            </CustomLink>) : 
            (<Link style={styles.link} to={projLink}>
                {hoverDiv}
                {img}
            </Link>)
    }

    getHoverDiv(){
        var projTitle = this.props.project['title'];
        const hoverStyle = this.state.isHover ? [styles.hide, styles.hover] : styles.hide;

        return(
            <div style={hoverStyle}>
                <div style={styles.hoverText}>
                    {projTitle}
                </div>
            </div>
        ); 
    }
}

export default Radium(Tile);