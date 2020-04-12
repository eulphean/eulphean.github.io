import React from 'react';
import Radium from 'radium'

import { padding, fontFamily, fontSize, color, boxShadow } from './CommonStyles'
import CustomButton from './CustomButton.js'
import findIndex from 'lodash/findIndex'

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: padding.small,
        marginBottom: padding.verySmall
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }, 

    button: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        padding: padding.verySmall,
        backgroundColor: color.deepBlue,
        color: color.featherWhite,
        boxShadow: boxShadow.alphaDeepBlueSoft,
        border: 'inherit',
        margin: padding.extraSmall,
        opacity: '95%',
        letterSpacing: '2.0px',

        '@media (min-width: 450px)': {  
            // No change. 
        },

        '@media (min-width: 600px)': {  
            // No change.
        },

        '@media (min-width: 750px)': {  
            padding: padding.small,
            fontSize: fontSize.big
        },

        '@media (min-width: 900px)': {
            // no change.
        }, 

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.veryBig,
            margin: padding.verySmall
        },

        '@media (min-width: 1400px)' : {
           // no change. 
    
        },

        '@media (min-width: 1700px)' : {
            // fontSize: fontSize.extraBig
        }
    },
};

class KeywordFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        // Maintain a list of selected keywords. 
        this.years = []; 
        this.categories = [];  
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    {/* <CustomButton title={'Archive'} onClick={this.onYearSelected.bind(this)} /> */}
                    <CustomButton buttonStyle={styles.button} title={'2020'} onClick={this.onYearSelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'2019'} onClick={this.onYearSelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'2018'} onClick={this.onYearSelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'2017'} onClick={this.onYearSelected.bind(this)} />
                </div>
                <div style={styles.innerContainer}>
                    <CustomButton buttonStyle={styles.button} title={'Holon'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Ecology'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Blockchain'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Sound'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Artificial Life'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Interactive'} onClick={this.onCategorySelected.bind(this)} />
                    <CustomButton buttonStyle={styles.button} title={'Commissions'} onClick={this.onCategorySelected.bind(this)} />
                </div>
            </div>
        );
    }

    onYearSelected(year) {
        var i = findIndex(this.years, k => {
            return k === year;
        }); 

        if (i >= 0) {
            this.years.splice(i, 1); 
        } else {
            this.years.push(year); 
        }

        // Send year and categories. 
        this.props.onKeywordSelected(this.years, this.categories); 
    }

    onCategorySelected(category) {
        var i = findIndex(this.categories, k => {
            return k === category;
        }); 

        if (i >= 0) {
            // Splice that array
            this.categories.splice(i, 1); 
        } else {
            this.categories.push(category); 
        }

        // Send year and categories. 
        this.props.onKeywordSelected(this.years, this.categories); 
    }
}

export default Radium(KeywordFilter);