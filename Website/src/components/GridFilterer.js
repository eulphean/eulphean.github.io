import React from 'react'
import Radium from 'radium'
import ReactGA from 'react-ga'

import { padding, fontFamily, fontSize, color } from './CommonStyles'
import CustomButton from './CustomButton.js'
import findIndex from 'lodash/findIndex'

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // backgroundColor: color.deepBlue,
        //paddingLeft: padding.extraSmall,
        paddingTop: padding.small,
        paddingBottom: padding.small
        // marginTop: padding.small,
        // marginBottom: padding.verySmall
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }, 

    button: {
        fontFamily: fontFamily.din,
        fontSize: fontSize.small,
        paddingLeft: padding.tinySmall,
        paddingRight: padding.tinySmall,
        color: color.deepBlue,
        backgroundColor: 'transparent',
        // boxShadow: boxShadow.alphaDeepBlueSoft,
        border: 'inherit',
        // marginLeft: padding.extraSmall,
        marginRight: padding.verySmall,
        opacity: '95%',
        letterSpacing: '2.0px',

        '@media (min-width: 450px)': {  
            // No change. 
        },

        '@media (min-width: 600px)': {  
            // No change.
        },

        '@media (min-width: 750px)': {  
            //fontSize: fontSize.small
        },

        '@media (min-width: 900px)': {
            // no change.
            fontSize: fontSize.big
        }, 

        '@media (min-width: 1200px)' : {
            // fontSize: fontSize.big,
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
            is2023: false,
            is2022: false,
            is2021: false,
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
            isExtendedReality: false,
            isNetArt: false,
            isSilkcube: false
        }; 

        // Maintain a list of selected keywords. 
        this.years = []; 
        this.categories = [];  
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <CustomButton isActive={this.state.is2023} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2023'}</CustomButton>
                    <CustomButton isActive={this.state.is2022} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2022'}</CustomButton>
                    <CustomButton isActive={this.state.is2021} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2021'}</CustomButton>
                    <CustomButton isActive={this.state.is2020} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2020'}</CustomButton>
                    <CustomButton isActive={this.state.is2019} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2019'}</CustomButton>
                    <CustomButton isActive={this.state.is2018} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2018'}</CustomButton>
                    <CustomButton isActive={this.state.is2017} buttonStyle={styles.button} onClick={this.onYearSelected.bind(this)}>{'2017'}</CustomButton>
                </div>
                {/*<div style={styles.innerContainer}>
                    <CustomButton isActive={this.state.isExhibitions} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Exhibitions'}</CustomButton>
                    <CustomButton isActive={this.state.isNetArt} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Net Art'}</CustomButton>
                    <CustomButton isActive={this.state.isArtificialLife} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Artificial Life'}</CustomButton>
                    <CustomButton isActive={this.state.isInteractive} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Interactive'}</CustomButton>
                    <CustomButton isActive={this.state.isExtendedReality} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Extended Reality'}</CustomButton>
                    {/* <CustomButton isActive={this.state.isSilkcube} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Silkcube'}</CustomButton> */}
                    {/*<CustomButton isActive={this.state.isSound} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Sound'}</CustomButton>
                    <CustomButton isActive={this.state.isHolon} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Holon'}</CustomButton>
                    <CustomButton isActive={this.state.isEcology} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Ecology'}</CustomButton>
                    <CustomButton isActive={this.state.isBlockchain} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Blockchain'}</CustomButton>
                    <CustomButton isActive={this.state.isCommissions} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Commissions'}</CustomButton>
                </div> */}
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

        // Create an event with
        ReactGA.event({
            category: 'Filter: Year',
            action: 'Button click',
            label: year
        }); 

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

        // Create an event with the category
        ReactGA.event({
            category: 'Filter: Category',
            action: 'Button click',
            label: category
        }); 

        // Send year and categories. 
        this.props.onKeywordSelected(this.years, this.categories); 
    }

    setYearState(year) {
        switch(year) {
            case '2023': {
                this.setState({
                    is2023: !this.state.is2023
                }); 
                break; 
            }

            case '2022': {
                this.setState({
                    is2022: !this.state.is2022
                }); 
                break; 
            }

            case '2021': {
                this.setState({
                    is2021: !this.state.is2021
                }); 
                break; 
            }

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

            case 'Extended Reality': {
                this.setState({
                    isExtendedReality: !this.state.isExtendedReality
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

            case 'Silkcube': {
                this.setState({
                    isSilkcube: !this.state.isSilkcube
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