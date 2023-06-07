import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
// import CustomLink from './CustomLink.js'

const projects = [ 
]; 

class Press extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let pComps = this.formatProjects(); 

    return (
        <div style={cvStyles.container}>
          <div style={cvStyles.heading}>
            PRESS
          </div>
          {pComps}
         </div>
    );
  }

  formatProjects() {
    let components = []; 
    projects.forEach(p => {
      let c = (
          <div key={components.length} style={cvStyles.entry}>
              {p.title}{p.description}{p.info}
          </div>
      ); 
      components.push(c); 
    }); 
    return components; 
  }
}

export default Radium(Press);