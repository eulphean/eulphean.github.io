import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={cvStyles.container}>
            <div style={cvStyles.heading}>
                EDUCATION
            </div>    
            <div style={cvStyles.entry}>
                <span>MFA, </span>
                <span style={cvStyles.title}>{"Art & Technology Studies"}</span>
                <span>{", School of the Art Institute of Chicago"}</span>
            </div>
            <div style={cvStyles.entry}>
                <span>BS, </span>
                <span style={cvStyles.title}>{"Computer Engineering"}</span>
                <span>{", Virginia Tech (Summa Cum Laude)"}</span>
            </div>
        </div>
    );
  }
}

export default Radium(Education);

// MFA, Art & Technology Studies, School of the Art Insititute of ChicagoMay 2019
// School of the Art Institute of Chicago
// Concentration in developing a multidisciplinary, research based art practice to
// interrogate concepts with new media.
// Awards Bajaj Art Scholarship, Shapiro Research Level-Up Grant
// B.S., Computer Engineering , December 2012
// Virginia Tech
// Concentration in embedded systems, hardware-software design, data structures &
// algorithms, and interdisciplinary product design.
// CGPA 3.84, Rank 5/126
// Summa Cum Laude
// Awards Bernard Silverman, Byron M. & Helen S. Brumback, Gilbert & Lucille Seay, MR.
// & CP. Staley Memorial, Litton Industries, Benjamin F.Bock, James Milton Beattie Jr.