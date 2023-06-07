import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink.js'
import { padding, color, fontSize, fontFamily } from './CommonStyles.js'
import { isMobile } from 'react-device-detect'

const styles={
    container: {
        display: 'flex',
        position: 'relative',
        // marginBottom: padding.extraSmall,
        // marginLeft: padding.extraSmall,
        // marginRight: padding.extraSmall,
        // borderStyle: 'solid',
        // borderWidth: '0.1px',
        // borderColor: color.lightGrey,
        // boxShadow: boxShadow.alphaDeepBlueSoft,
        margin: padding.extraSmall,
        height: '100%',

        // To have space between images.
         // 3% is to accomodate the margins.
         width: 'calc(100%/2 - 2.3%)',

         '@media (min-width: 450px)': {
             width: 'calc(100%/3 - 1.9%)'
         },

         '@media (min-width: 600px)': {
             width: 'calc(100%/3 - 1.4%)'
         },

         '@media (min-width: 750px)': {
             width: 'calc(100%/3 - 1.22%)'
         },

         '@media (min-width: 900px)': {
             // No changes
             width: 'calc(100%/3 - 1.1%)'
         },

         '@media (min-width: 1200px)': {
             // No changes
             width: 'calc(100%/3 - 0.92%)'
         },

         '@media (min-width: 1400px)': {
             // No changes
             width: 'calc(100%/3 - 0.94%)'
         },
         '@media (min-width: 1700px)': {
             // No changes
             width: 'calc(100%/4 - 0.98%)'
         }
    },

    link: {
        display: 'flex'
    },

    img: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignSelf: 'center',
    }, 

    imgGrayscale: {
        // filter: 'grayscale(50%)'
    },

    hover: {
       visibility: 'visible'
    }, 

    hide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // backgroundColor: color.hoverRed,
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
        backgroundColor: color.hoverRed,
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

        const imgStyles = (this.state.isHover || isMobile) ? [styles.img] : [styles.img, styles.imgGrayscale];

        var img = (<img style={imgStyles} alt={this.props.project['link']} src={imgSrc}/>);
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

// To have space between images.
//  // 3% is to accomodate the margins.
//  width: 'calc(100%/2 - 2.3%)',

//  '@media (min-width: 450px)': {
//      width: 'calc(100%/3 - 2%)'
//  },

//  '@media (min-width: 600px)': {
//      width: 'calc(100%/3 - 1.5%)'
//  },

//  '@media (min-width: 750px)': {
//      width: 'calc(100%/3 - 1.2%)'
//  },

//  '@media (min-width: 900px)': {
//      // No changes
//      width: 'calc(100%/3 - 1.1%)'
//  },

//  '@media (min-width: 1200px)': {
//      // No changes
//      width: 'calc(100%/3 - 0.8%)'
//  },

//  '@media (min-width: 1400px)': {
//      // No changes
//      width: 'calc(100%/3 - 0.7%)'
//  },
//  '@media (min-width: 1700px)': {
//      // No changes
//      width: 'calc(100%/4 - 0.45%)'
//  }