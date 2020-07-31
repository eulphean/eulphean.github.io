import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink.js'

const projects=[
  {
    title: <span style={cvStyles.title}>People's Choice Award, </span>,
    description: ' ALIFE 2020 Conference, Vermont Complex Systems Center, 2020, ',
    info:  <CustomLink to='https://vermontcomplexsystems.org/events/ALIFE-2020/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Shapiro Research Level-Up Grant</span>,
    description: ', School of the Art Institute of Chicago, 2018, ',
    info:  <CustomLink to='https://www.saic.edu/t4/academics/shapiro-center/grants/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{'Byron M. & Helen S. Brumback Award'}</span>,
    description: ', College of Engineering, Virginia Tech, 2012, ',
    info:  <CustomLink to='https://eng.vt.edu/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{'Gilbert L. and Lucille C. Seay Award'}</span>,
    description: ', College of Engineering, Virginia Tech, 2011, ',
    info:  <CustomLink to='https://eng.vt.edu/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{'MR. and CP. Staley Memorial Scholarship'}</span>,
    description: ', College of Engineering, Virginia Tech, 2010, ',
    info:  <CustomLink to='https://eng.vt.edu/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{'Litton Industries Grant'}</span>,
    description: ', College of Engineering, Virginia Tech, 2010, ',
    info:  <CustomLink to='https://eng.vt.edu/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{'Benjamin F. Bock & James Milton Beattie Jr. Grant'}</span>,
    description: ', College of Engineering, Virginia Tech, 2009, ',
    info:  <CustomLink to='https://eng.vt.edu/' inline={true}>[info]</CustomLink>
  }
]; 

class Awards extends React.Component {
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
              AWARDS
            </div>
            { pComps }
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

export default Radium(Awards);