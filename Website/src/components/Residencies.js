import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink.js'

const projects=[
  {
    title: <span style={cvStyles.title}>Artist in Residence</span>,
    description: ', Sandnes Kommune, Sandnes, Norway, (Forthcoming) 2021, ',
    info:  <CustomLink to='https://www.sandnes.kommune.no/kultur-fritid/kultur/air/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>New Media Resident</span>,
    description: ', Mana Contemporary, Chicago, USA, February-October 2020, ',
    info:  <CustomLink to='https://www.manacontemporary.com/residencies/nmpchicago/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Artist in Residence</span>,
    description: ', Brahman AI, Bombay Beach, USA, January 2020, ',
    info:  <CustomLink to='https://brahman.ai/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>New Media Resident</span>,
    description: ', Art Center Nabi, Seoul, South Korea, July-September 2018, ',
    info:  <CustomLink to='http://www.nabi.or.kr/en/page/board_view.php?brd_idx=974&brd_id=project' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Art-A-Hack Resident</span>,
    description: ', ThoughtWorks, New York, USA, June-July 2018, ',
    info:  <CustomLink to='https://artahack.io/alumni/' inline={true}>[info]</CustomLink>
  }
]; 

class Residencies extends React.Component {
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
              RESIDENCIES
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

export default Radium(Residencies);