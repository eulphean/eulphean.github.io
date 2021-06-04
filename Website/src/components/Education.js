import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';

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