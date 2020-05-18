import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';

const skills = [
    {
        title: <span style={cvStyles.title}>Code</span>, 
        description: <span style={cvStyles.tab}>C++, Javascript, Python, Java, C#, Solidity, C, Objective-C</span>
    }, 
    {
        title: <span style={cvStyles.title}>Sound</span>, 
        description: <span style={cvStyles.tab}>PureData, Ableton Live, Logic</span>
    }, 
    {
        title: <span style={cvStyles.title}>Platforms</span>,
        description: <span style={cvStyles.tab}>Touch Designer, OpenFrameworks, ReactJS, React-Native, P5.js, Processing, Heroku, PostgreSQL, AngularJS</span>
    }, 
    {
        title: <span style={cvStyles.title}>Boards</span>,
        description: <span style={cvStyles.tab}>Arduino, Teensy, Raspberry Pi, Asus Tinker Board</span>
    }, 
    {
        title: <span style={cvStyles.title}>Kinetics</span>,
        description: <span style={cvStyles.tab}>DC/Servo/Stepper motors, motor controller, mechanisms</span>
    },
    {
        title: <span style={cvStyles.title}>Design</span>,
        description: <span style={cvStyles.tab}>Sketch, Adobe Photoshop, Adobe Illustrator, Adobe After-Effects</span>
    },
    {
        title: <span style={cvStyles.title}>3D</span>,
        description: <span style={cvStyles.tab}>Rhino, Grasshopper, 3D printing, Blender, Unity, Photogrammetry</span>
    }
]; 

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let pSkills = this.formatSkills(); 
    return (
        <div style={cvStyles.container}>
            <div style={cvStyles.heading}>
                SKILLS
            </div>    
            <div style={cvStyles.entry}>
                These appear in the order of usage and experience from left to right. 
            </div>
            { pSkills }
        </div>
    );
  }

  formatSkills() {
    let components = []; 
    skills.forEach(s => {
      let c = (
          <div key={components.length} style={cvStyles.entry}>
              {s.title}{s.description}
          </div>
      ); 
      components.push(c); 
    }); 
    return components; 
}
}

export default Radium(Skills);