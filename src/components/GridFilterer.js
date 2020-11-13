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

class GridFilterer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is2020: false,
            is2019: false,
            is2018: false,
            is2017: false,
            isHolon: false,
            isEcology: false,
            isBlockchain: false,
            isSound: false,
            isArtificialLife: false,
            isInteractive: false,
            isCommissions: false,
            isExhibitions: false,
            isVirtualReality: false,
            isNetArt: false
        }; 

        // Maintain a list of selected keywords. 
        this.years = []; 
        this.categories = [];  
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <CustomButton isActive={this.state.is2020} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2020'}</CustomButton>
                    <CustomButton isActive={this.state.is2019} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2019'}</CustomButton>
                    <CustomButton isActive={this.state.is2018} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2018'}</CustomButton>
                    <CustomButton isActive={this.state.is2017} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2017'}</CustomButton>
                </div>
                <div style={styles.innerContainer}>
                    <CustomButton isActive={this.state.isExhibitions} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Exhibitions'}</CustomButton>
                    <CustomButton isActive={this.state.isNetArt} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Net Art'}</CustomButton>
                    <CustomButton isActive={this.state.isArtificialLife} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Artificial Life'}</CustomButton>
                    <CustomButton isActive={this.state.isInteractive} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Interactive'}</CustomButton>
                    <CustomButton isActive={this.state.isVirtualReality} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Virtual Reality'}</CustomButton>
                    <CustomButton isActive={this.state.isSound} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Sound'}</CustomButton>
                    <CustomButton isActive={this.state.isHolon} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Holon'}</CustomButton>
                    <CustomButton isActive={this.state.isEcology} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Ecology'}</CustomButton>
                    <CustomButton isActive={this.state.isBlockchain} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Blockchain'}</CustomButton>
                    <CustomButton isActive={this.state.isCommissions} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Commissions'}</CustomButton>
                </div>
            </div>
        );
    }

    onYearSelected(year) {
        this.setYearState(year); 

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
        this.setCategoryState(category); 

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

    setYearState(year) {
        switch(year) {
            case '2020': {
                this.setState({
                    is2020: !this.state.is2020
                }); 
                break; 
            }

            case '2019': {
                this.setState({
                    is2019: !this.state.is2019
                }); 
                break; 
            }

            case '2018': {
                this.setState({
                    is2018: !this.state.is2018
                }); 
                break; 
            }

            case '2017': {
                this.setState({
                    is2017: !this.state.is2017
                }); 
                break; 
            }

            default: {
                break; 
            }
        }
    }

    setCategoryState(category) {
        switch(category) {
            case 'Net Art': {
                this.setState({
                    isNetArt: !this.state.isNetArt
                }); 
                break; 
            }

            case 'Exhibitions': {
                this.setState({
                    isExhibitions: !this.state.isExhibitions
                }); 
                break; 
            }

            case 'Virtual Reality': {
                this.setState({
                    isVirtualReality: !this.state.isVirtualReality
                }); 
                break; 
            }

            case 'Holon': {
                this.setState({
                    isHolon: !this.state.isHolon
                }); 
                break; 
            }

            case 'Ecology': {
                this.setState({
                    isEcology: !this.state.isEcology
                }); 
                break; 
            }

            case 'Blockchain': {
                this.setState({
                    isBlockchain: !this.state.isBlockchain
                }); 
                break; 
            }

            case 'Sound': {
                this.setState({
                    isSound: !this.state.isSound
                }); 
                break; 
            }

            case 'Interactive': {
                this.setState({
                    isInteractive: !this.state.isInteractive
                }); 
                break; 
            }

            case 'Artificial Life': {
                this.setState({
                    isArtificialLife: !this.state.isArtificialLife
                }); 
                break; 
            }

            case 'Commissions': {
                this.setState({
                    isCommissions: !this.state.isCommissions
                }); 
                break; 
            }

            default: {
                break;
            }
        }
    }
}

export default Radium(GridFilterer);