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
        </div>
    );
  }
}

export default Radium(Education);