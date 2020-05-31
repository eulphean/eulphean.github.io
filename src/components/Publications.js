import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink.js'

const projects = [
  {
    title: <span style={cvStyles.title}>{"Holons & Holarchy"}</span>,
    description: ', Algorithmic Issue, SciArt Magazine, June 2020, ',
    info: <CustomLink  to='https://www.sciartmagazine.com/contribute.html' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"MOMIMSAFE"}</span>,
    description: ', Artists At Mana, May 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/artist-at-mana/momimsafe/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria, Two Degree Window"}</span>,
    description: ', Quarantine Times, May 2020, ',
    info: <CustomLink  to='https://quarantinetimes.org/news/are-you-a-foreign-artist-round-two/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"A Brief Primer on Holons and Holarchy"}</span>,
    description: ', Mana Contemporary Editorial, April 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/event/a-brief-primer-on-holons-and-holarchy/' inline={true}>[info]</CustomLink>
  },
  {
      title: <span style={cvStyles.title}>{"Amay Kataria, Two Degree Window"}</span>,
      description: ', 60 Wrd/Min Art Critic, March 2020, ',
      info: <CustomLink  to='https://60wrdmin.org/artwork/4694804_Amay_Kataria.html' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"<i> also</i> tubes"}</span>,
    description: ', Unrequited Leisure, February 2020, ',
    info: <CustomLink  to='http://unrequitedleisure.com/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Nest: Interactive Installation"}</span>,
    description: ', CYBERIA: New Media Playground, TIFA India, December 2019, ',
    info: <CustomLink  to='https://cyberiafestival.com/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"LAN: Live Agent Nest"}</span>,
    description: ', Always Already Alien, Ars Electronica: Out of the Box, September 2019, ',
    info: <CustomLink  to='https://ars.electronica.art/outofthebox/en/already-alien/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Groove Body"}</span>,
    description: ', Art & Technology Studies MFA Brochure, School of the Art Institute of Chicago, August 2019, ',
    info: <CustomLink  to='https://www.saic.edu/sites/default/files/Grad_ATS_Bro_WEB.pdf' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria: Studio Visit"}</span>,
    description: ', Art & Technology Studies, School of the Art Institute of Chicago, May 2019, ',
    info: <CustomLink  to='https://youtu.be/F0y5VBgaXyk?t=129' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Groove Body"}</span>,
    description: ', Blockchain City: Reclaiming "I" And Reinventing "We", Art Center Nabi, February 2019, ',
    info: <CustomLink  to='http://nabi.or.kr/en/archive/board_view.php?ach_idx=1825&ach_id=column' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Small-Pop Hypothesis"}</span>,
    description: ', 2020/2021 Graduate Programs (Page, 210-211), School of the Art Institute of Chicago, January 2019, ',
    info: <CustomLink  to='https://issuu.com/saic1866/docs/2020_2021_graduate_programs?fr=sZWZhZjE3MzI5MA' inline={true}>[info]</CustomLink>
  }
]; 

class Publications extends React.Component {
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
            PUBLICATIONS
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

export default Radium(Publications);