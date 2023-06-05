import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink'

const experience = [
    {
        title: <span style={cvStyles.title}>New-Media Artist</span>,
        location: ', Extended Art Studio, Chicago, USA, May 2019 - Current, ', 
        link: <CustomLink to='https://drive.google.com/file/d/1fn54t5pFyDD_Nm7kuc1biZQTiV7XaBuM/view?usp=sharing' inline={true}>[info]</CustomLink>
    },
    {
        title: <span style={cvStyles.title}>Creative Technologist</span>,
        location: ', Vibe Inc., Remote, May 2022 - July 2022, ', 
        link: <CustomLink to='https://www.vibe.xyz/' inline={true}>[info]</CustomLink>
    },
    {
        title: <span style={cvStyles.title}>Full-Stack Software Engineer</span>, 
        location: ', Anke Loh, Chicago, USA, June 2021 - September 2021, ',
        link: <CustomLink to='http://ankeloh.net/2021/10/re-fream-embroidered-touch-life-space/#1' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>Technical Assistant</span>, 
        location: ', Peter Burr, Chicago, USA, October 2020 - May 2021, ',
        link: <CustomLink to='https://peterburr.org/kid.php' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>Full-Stack Software Engineer</span>, 
        location: ', Microsoft Corporation, Seattle, USA, May 2013 - June 2017, ',
        link: <CustomLink to='https://amaykataria.com/#/Skype' inline={true}>[info]</CustomLink>
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
          </div>
      ); 
      components.push(c); 
    }); 
    return components; 
  }
}

export default Radium(WorkExperience);

