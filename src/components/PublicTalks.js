import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink.js'


const projects = [
  {
    title: <span style={cvStyles.title}>[Upcoming] Community Lunch with Phil Mulliken</span>,
    description: ', Zoom Webinar, Mana Contemporary, Chicago, USA, June 2020',
    info: ""
  },
  {
    title: <span style={cvStyles.title}>Cryptocurrency in 5 Minutes or Less</span>,
    description: ', Workshop, Commiserate New Media Art Festival, Chicago, USA, February 2020, ',
    info:  <CustomLink to='http://commiserate.life/cryptocurrency-in-5-minutes-or-less' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Nest: From Concept to Execution</span>,
    description: ', Artist Talk, New Media Caucus, Chicago, USA, February 2020, ',
    info:  <CustomLink to='http://www.newmediacaucus.org/nmc-at-caa-2020/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>BRAHMAN: A Summary</span>,
    description: ', Artist Talk, Brahman AI, Bombay Beach, USA, February 2020, ',
    info:  <CustomLink to='https://docs.google.com/presentation/d/195dGvuTT8e6J-FVfRyM1oCTCD8s8kaiRbfENCclF-3s/edit?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Autopoiesis</span>,
    description: ', Artist Talk, School of the Art Institute of Chicago, Chicago, USA, March 2019, ',
    info:  <CustomLink to='https://docs.google.com/presentation/d/1JOdNrFl66LIG3Z1R3h9mrs43KiRthhXhEuaDRbsw8A0/edit?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Art x Body x Blockchain</span>,
    description: ', Artist Talk, Art Center Nabi, Seoul, South Korea, August 2018, ',
    info:  <CustomLink to='https://medium.com/@artcenternabi/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%ED%96%89%EC%82%AC-artist-talk-amay-kataria-5f211f57339' inline={true}>[info]</CustomLink>
  }
]; 

class PublicTalks extends React.Component {
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
                PUBLIC TALKS
            </div>
            {pComps}
         </div>
    );
  }

  formatProjects() {
    let components = []; 
    projects.forEach(p => {
      console.log(components.length);
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

export default Radium(PublicTalks);