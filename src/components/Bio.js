import React from 'react'
import Radium from 'radium'
import { padding, commonWorkStyles, fontSize } from './CommonStyles';
import CVFilterer from './CVFilterer.js'

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

const bio="Amay Kataria (b. 1990) graduated from the School of the Art Institute of Chicago (2019) with an MFA in Art & Technology Studies. He completed his bachelors in Computer Engineering from Virginia Tech (2012) and worked for Microsoft Corp. (2013-2017). He has been invited as a visiting artist at the Ethereal Summit, ThoughtWorks and Bellas Artes Outpost. He has participated in group shows at the Electromuseum, Ars Electronica, TIFA India, Art Center Nabi, ThoughtWorks, and Experimental Sound Studio. He will be an artist in residence at Sandnes Kommune in Stavanger, Norway in 2020, is currently a resident at Mana Contemporary in Chicago, and was awarded the new media art residency at Art Center Nabi in Seoul, South Korea in 2018. To support his work, he has received grants in the name of Shapiro Level-Up Research Grant and Bajaj Art Scholarship."

class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        let bioStyle=[commonWorkStyles.body, styles.bioMediaQuery]; 

        return (
            <div style={styles.container}>
                <div style={bioStyle}>
                    {bio}
                </div>
                <CVFilterer />
            </div>
        );
    }
}

export default Radium(Bio);