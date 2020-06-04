import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink'

const experience = [
    {
        title: <span style={cvStyles.title}>Creative Technologist</span>,
        location: ', Chicago, USA, May 2019 - Current, ', 
        info: 'Freelance creative technology development for new media projects; experience research, creative software development and installation design.',
        link: <CustomLink to='https://drive.google.com/file/d/1fn54t5pFyDD_Nm7kuc1biZQTiV7XaBuM/view?usp=sharing' inline={true}>[info]</CustomLink>
    },
    {
        title: <span style={cvStyles.title}>Teaching Assistant</span>, 
        location: ', School of the Art Institute of Chicago, Chicago, USA, 2017-2018, ',
        info: 'Interactive Art & Intro to Computer Vision and Machine Learning with Christopher Baker, Kinetics and Computer Control with Jacob Tonski, Digital Light Projection with Jan Tichy.', 
        link: <CustomLink to='https://github.com/SAIC-ATS/ARTTECH-3039' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>Lab Assistant</span>, 
        location: ', School of the Art Institute of Chicago, Chicago, USA, 2017-2018, ',
        info: 'Electronics & Kinetics Lab', 
        link: <CustomLink to='https://www.saic.edu/academics/departments/art-and-technology-studies/resources' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>Light Engineer</span>, 
        location: ', School of the Art Institute of Chicago, Chicago, USA, May 2018 - July 2018, ',
        info: 'Expanded and engineered new Light Kits for Jan Tichy’s Digital Light Projection class; pcb design, fabrication samples, new Arduino library with demos and examples.', 
        link: <CustomLink to='https://github.com/eulphean/RGB_LED' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>Software Engineer</span>, 
        location: ', Microsoft Corporation, Seattle, USA, May 2013 - June 2017, ',
        info: 'Skype for Consumers, Skype for Business, Windows Hyper-V', 
        link: <CustomLink to='https://amaykataria.com/#/Skype' inline={true}>[info]</CustomLink>
    },
    {
        title: <span style={cvStyles.title}>Software Engineering Intern</span>, 
        location: ', Qualcomm, San Diego, USA, May 2012 - August 2012',
        info: '', 
        link: ''
    },
    {
        title: <span style={cvStyles.title}>Systems Solutions Engineering Intern</span>, 
        location: ', Harris Corporation, Lynchburg, USA, January 2010 - August 2010',
        info: '', 
        link: ''
    }
];

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let pExperience = this.formatSkills(); 
    return (
        <div style={cvStyles.container}>
            <div style={cvStyles.heading}>
                EXPERIENCE
            </div>    
            { pExperience }
        </div>
    );
  }

  formatSkills() {
    let components = []; 
    experience.forEach(s => {
      let c = (
          <div key={components.length} style={cvStyles.entry}>
              {s.title}{s.location}{s.link}
              <div>
                  {s.info}
              </div>
          </div>
      ); 
      components.push(c); 
    }); 
    return components; 
  }
}

export default Radium(WorkExperience);

