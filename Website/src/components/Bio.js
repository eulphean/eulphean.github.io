import React from 'react'
import Radium from 'radium'
import { padding, commonWorkStyles, fontSize, cvStyles } from './CommonStyles';
import CVFilterer from './CVFilterer.js'
import Education from './Education.js'
import Exhibitions from './Exhibitions.js'
import Press from './Press.js'
import Awards from './Awards.js'
import Publications from './Publications.js'
import Residencies from './Residencies.js'
import PublicTalks from './PublicTalks.js'
import Skills from './Skills.js'
import WorkExperience from './WorkExperience.js'

const styles={
    container: {
        // margin: padding.verySmall
    },
    
    bioMediaQuery: {
        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.big
        }
    }
}; 

const bio=<span>Amay Kataria is an artist currently practicing out of Mana Contemporary Chicago. He holds an MFA from the School of the Art Institute of Chicago and a Bachelors in Computer Engineering from Virginia Tech. He has previously held new media residencies at Art Center Nabi and Mana Contemporary and will be an artist in residence at Sandnes Kommune in Stavanger, Norway in 2021. His works have been exhibited at Vector Festival, Electromuseum, Ars Electronica, Piksel Festival, TIFA Studios, Experimental Sound Studio, amongst others.</span>
class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible: []
        };
    }

    render() {
        let bioStyle=[commonWorkStyles.body, styles.bioMediaQuery]; 

        return (
            <div style={styles.container}>
                <CVFilterer onKeywordSelected={ this.onKeywordSelected.bind(this) }/>
                {this.state.visible}
                <div style={bioStyle}>
                    <div style={cvStyles.heading}>
                        BIO
                    </div>
                    {bio}
                </div>
            </div>
        );
    }

    onKeywordSelected(category) {
        let components = []; 
        // Add all components that need to be show. Every new component selected is added 
        // on the top of the list (unshift)
        category.forEach(element => {
            switch(element) {
                case 'Education': {
                    components.unshift(<Education key={0} />); 
                    break; 
                }
                case 'Exhibitions': {
                    components.unshift(<Exhibitions key={1} />); 
                    break; 
                }
                case 'Residencies': {
                    components.unshift(<Residencies key={2} />); 
                    break; 
                }
                case 'Public Talks': {
                    components.unshift(<PublicTalks key={3}/>);
                    break; 
                }
                case 'Press': {
                    components.unshift(<Press key={4} />); 
                    break; 
                }
                case 'Publications': {
                    components.unshift(<Publications key={5}/>); 
                    break; 
                }
                case 'Awards': {
                    components.unshift(<Awards key={6}/>); 
                    break; 
                }
                case 'Skills': {
                    components.unshift(<Skills key={6}/>); 
                    break; 
                }
                case 'Experience': {
                    components.unshift(<WorkExperience key={7} />); 
                    break; 
                }
                default: {
                    break;
                }
            }
        });

        // Set the visible components.  
        this.setState({
            visible: components
        }); 
    }
}

export default Radium(Bio);

