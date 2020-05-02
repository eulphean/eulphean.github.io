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
        marginLeft: '-' + padding.extraSmall,
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

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.veryBig,
            margin: padding.verySmall
        }
    },
};

class CVFilterer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEducation: false,
            isExhibitions: false,
            isResidencies: false,
            isPublicTalks: false,
            isPress: false,
            isPublications: false,
            isSkills: false
        }; 

        // Maintain a list of selected keywords. 
        this.categories = [];  
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <CustomButton isActive={this.state.isExhibitions} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Exhibitions'}</CustomButton>
                    <CustomButton isActive={this.state.isResidencies} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Residencies'}</CustomButton>
                    <CustomButton isActive={this.state.isPress} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Press'}</CustomButton>
                    <CustomButton isActive={this.state.isPublicTalks} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Public Talks'}</CustomButton>
                    <CustomButton isActive={this.state.isPublications} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Publications'}</CustomButton>
                    <CustomButton isActive={this.state.isEducation} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Education'}</CustomButton>
                    <CustomButton isActive={this.state.isSkills} buttonStyle={styles.button} onClick={this.onCategorySelected.bind(this)}>{'Skills'}</CustomButton>
                </div>
            </div>
        );
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
        this.props.onKeywordSelected(this.categories); 
    }

    setCategoryState(category) {
        switch(category) {
            case 'Education': {
                this.setState({
                    isEducation: !this.state.isEducation
                }); 
                break; 
            }

            case 'Exhibitions': {
                this.setState({
                    isExhibitions: !this.state.isExhibitions
                }); 
                break; 
            }

            case 'Residencies': {
                this.setState({
                    isResidencies: !this.state.isResidencies
                }); 
                break; 
            }

            case 'Public Talks': {
                this.setState({
                    isPublicTalks: !this.state.isPublicTalks
                }); 
                break; 
            }

            case 'Press': {
                this.setState({
                    isPress: !this.state.isPress
                }); 
                break; 
            }

            case 'Publications': {
                this.setState({
                    isPublications: !this.state.isPublications
                }); 
                break; 
            }

            default: {
                break;
            }
        }
    }
}

export default Radium(CVFilterer);