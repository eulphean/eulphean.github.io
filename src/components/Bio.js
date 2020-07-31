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
        margin: padding.verySmall
    },
    
    bioMediaQuery: {
        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.big
        }
    }
}; 

const bio="Amay Kataria (b. 1990) is currently an artist in residence at Mana Contemporary in Chicago, USA. He graduated from the School of the Art Institute of Chicago with an MFA in Art & Technology Studies. He was invited as a visiting artist at the Ethereal Summit, ThoughtWorks and Bellas Artes Outpost. He has participated in group shows at the Electromuseum, Ars Electronica, TIFA India, Art Center Nabi, ThoughtWorks, and Experimental Sound Studio. He is an upcoming artist in residence at Sandnes Kommune in Stavanger, Norway and was awarded the media arts residency at Art Center Nabi in Seoul, South Korea. To support his work, he has received the Shapiro Level-Up Research Grant and Bajaj Art Scholarship."

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

