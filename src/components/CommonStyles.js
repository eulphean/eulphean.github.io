const color = {
    slateGrey: '#939DAE',
    darkGrey: '#6C7687',
    bloodRed: '#BA3B3B',
    deepBlue: '#44536A',
    alphaDeepBlue: 'rgb(69, 83, 106, 60)',
    featherWhite: 'rgb(255, 255, 255)',
    hoverRed: 'rgb(210, 80, 80, 50)'
};

const fontSize = {
    extraSmall: '8px',
    verySmall: '12px',
    small: '16px',
    big: '20px',
    veryBig: '24px',
    extraBig: '28px',
    huge: '32px',
    veryHuge: '36px',
    extraHuge: '40px',
    massive: '44px',
    veryMassive: '48px',
    extraMassive: '52px',
    enormous: '56px',
    veryEnormous: '60px',
    extraEnormous: '64px'
};

const padding = {
    // Increments of 4
    extraSmall: '4px',
    verySmall: '8px',
    small: '12px',
    // Incremenets of 8
    big : '20px',
    veryBig : '28px',
    extraBig : '36px',
    // Increments of 12
    huge: '52px',
    veryHuge: '64px',
    extraHuge: '76px',
    // Incremenets of 16
    massive: '92px',
    veryMassive: '108px',
    extraMassive: '124px',
    // Increment of 20
    enourmous: '100px',
    veryEnormous: '120px',
    extraEnormous: '140px',
    // Increment of 40
    insane: '160px',
    veryInsane: '200px',
    extraInsane: '240px'

};

const fontFamily = {
    baskerville: 'Baskerville',
    bebas: 'bebas_neueregular',
    din: 'd-dinregular'
};

const textShadow = {
    slateGrey: '1px 1px 2px ' + color.slateGrey,
    slateLight: '1px 1px 1px ' + color.slateGrey
};

const boxShadow = {
    alphaDeepBlue: '1px 2px 4px ' + color.alphaDeepBlue,
    deepBlue: '1px 1px 2px ' + color.deepBlue,
    alphaDeepBlueSoft: '2px 2px 5px ' + color.alphaDeepBlue 
};

// These are styles that are common across all the description
// of the works. 
const commonWorkStyles = {
    body: {
        fontFamily: fontFamily.din,
        fontSize: fontSize.small,
        color: color.deepBlue,
        border: 'inherit',
        letterSpacing: '1px',
        lineHeight: '1.6',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 750px)': {  
            // no change.
        },

        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.veryBig,
            
        },

        '@media (min-width: 1200px)' : {
            
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
    },

    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: padding.small,
        marginTop: padding.small, 
        width: '100%',
        height: '100%',

        '@media (min-width: 450px)': {  
            // no change.
        },
        '@media (min-width: 600px)': {      
            // no change.
        },
        '@media (min-width: 750px)': {  
            marginTop: padding.big
        },
        '@media (min-width: 900px)': {  
            // no change.
        },
        '@media (min-width: 1200px)' : {
            marginTop: padding.veryBig,
        },
        '@media (min-width: 1400px)' : {
            marginTop: padding.extraBig
        },
        '@media (min-width: 1700px)' : {
        }
    },

    multiImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    },

    // None of the images will have marginTop properties. 
    // It will be held in individual components with media queries.
    oneImage: {
        width: '100%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
    },

    twoImages: {
        width: 'calc(100%/2 - 1.5%)',
        boxShadow: boxShadow.alphaDeepBlueSoft,
        alignSelf: 'center',
        height: '100%',

        '@media (min-width: 450px)': {  
            width: 'calc(100%/2 - 1.3%)'
        },
        '@media (min-width: 600px)': {  
        },
        '@media (min-width: 750px)': {  
            width: 'calc(100%/2 - 1.2%)',
        },
        '@media (min-width: 900px)': {  
            width: 'calc(100%/2 - 1.0%)'
        },
        '@media (min-width: 1200px)' : {
        },
        '@media (min-width: 1400px)' : {
            width: 'calc(100%/2 - 0.9%)'
        },
        '@media (min-width: 1700px)' : {
        }
    },

    threeImages: {
        display: 'flex',
        width: '32.5%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
    },

    image60: {
        width: '60%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
    },
  
    // Use with image60
    image38: {
        width: '38%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
    },

    webFrame: {
        display: 'flex',
        width: '100%',
        height: '500px',
        border: 'none',
        boxShadow: boxShadow.alphaDeepBlueSoft,

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {      
            // No change. 
        },

        '@media (min-width: 750px)': {  
            height: '700px'
        },

        '@media (min-width: 900px)': {  
            // no change.
        },

        '@media (min-width: 1200px)' : {
            height: '900px'
        },

        '@media (min-width: 1400px)' : {
         
        },

        '@media (min-width: 1700px)' : {
            // No change
        }
    },

    vimeoContainer: {
        position: 'relative',
        paddingBottom: '56.25%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
        height: '0px',
        overflow: 'hidden'
    },

    vimeoFrame: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%'
    },

    soundcloudFrame: {
        width: '100%',
        boxShadow: boxShadow.alphaDeepBlueSoft,
        '@media (min-width: 750px)': {  
            height: '100px'
        }
    },

    // This is used on all the image assets that need margins.
    // It is seperated out because not all image assets need this. 
    // Every component uses this as per required. 
    imgMediaQuery: {
        marginTop: padding.verySmall, 
        
        '@media (min-width: 600px)': {  
            marginTop: padding.small
        },
    
        '@media (min-width: 1200px)' : {
            marginTop: padding.big
        }
    }
};

const cvStyles= {
    container: {
        display: 'flex',
        marginTop: padding.big,
        marginBottom: padding.small,
        flexDirection: 'column'
    },

    heading: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.big,
        color: color.deepBlue,
        letterSpacing: '2px',
        textDecoration: 'underline',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.veryBig
        },

        '@media (min-width: 750px)': {  
            // no change.
        },

        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.extraBig,
            
        },

        '@media (min-width: 1200px)' : {
            
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.huge,
        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
    },

    entry: {
        marginTop: padding.small,
        fontFamily: fontFamily.din,
        fontSize: fontSize.small,
        color: color.deepBlue,
        letterSpacing: '1px',
        lineHeight: '1.5',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 750px)': {  
            // no change.
        },

        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.veryBig,
            
        },

        '@media (min-width: 1200px)' : {
            
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
    },

    title: {
        fontStyle: 'italic',
        textShadow: textShadow.slateGrey
    }, 

    tab: {
        paddingLeft: padding.verySmall
    },

    bottomSpace: {
        marginBottom: padding.big
    }
};

export { color, fontSize, fontFamily, textShadow, boxShadow, padding, commonWorkStyles, cvStyles};