import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink.js'

const projects = [
  {
    title: <span style={cvStyles.title}>{"Tend Towards Infinity"}</span>,
    description: <span>{", Dreams Issue, Emerge Magazine, 2021, "}</span>,
    info: <CustomLink  to='https://saicemerge.com/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Momimsafe"}</span>,
    description: ', Futures of Intimacy, TIFA India Blog, Online, 2021, ',
    info: <CustomLink  to='https://tifastudios.in/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Timekeepers: A Virtual Reality Art Experience"}</span>,
    description: <span>{", Burning Man Journal, 2021, "}</span>,
    info: <CustomLink  to='https://journal.burningman.org/2021/02/burning-man-arts/brc-art/timekeepers-vr/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Artist Spotlight: Timekeepers"}</span>,
    description: <span>{", BRCVr, 2021, "}</span>,
    info: <CustomLink  to='https://vimeo.com/529123371' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Center of (Varying) Gravity"}</span>,
    description: <span>{", XXIII Generative Art Conference (page 328), 2020, "}</span>,
    info: <CustomLink  to='https://drive.google.com/file/d/1lGiHmXVw5z4wRXwU7k4e1myCgPlzvKtj/view?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Moment of Enigma"}</span>,
    description: <span>{", Rennaissance 2.0 2.0 (page 44), 2020, "}</span>,
    info: <CustomLink  to='https://drive.google.com/file/d/1BULcQma8DF1YvS_uIm67sp50VPM_NNmo/view?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"MOMIMSAFE"}</span>,
    description: <span>{", An Artist's Guide to Computation, 2020, "}</span>,
    info: <CustomLink  to='https://artistsguidetocomputation.substack.com/p/oof-so' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Figments of Desire & Generative Decay"}</span>,
    description: ', Algorithmic, SciArt Magazine, 2020, ',
    info: <CustomLink  to='https://www.sciartmagazine.com/algorithmic-physical.html' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"MOMIMSAFE"}</span>,
    description: ', Artists At Mana, 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/artist-at-mana/momimsafe/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria, Two Degree Window"}</span>,
    description: ', Quarantine Times, 2020, ',
    info: <CustomLink  to='https://quarantinetimes.org/news/are-you-a-foreign-artist-round-two/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"A Brief Primer on Holons and Holarchy"}</span>,
    description: ', Mana Contemporary Editorial, 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/editorial/a-brief-primer-on-holons-and-holarchy/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Babble"}</span>,
    description: ', NeurIPS Creativity, AI Art Online, 2019, ',
    info: <CustomLink  to='http://www.aiartonline.com/community-2019/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Nest: Interactive Installation"}</span>,
    description: ', CYBERIA: New Media Playground, TIFA India, 2019, ',
    info: <CustomLink  to='https://cyberiafestival.com/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"LAN: Live Agent Nest"}</span>,
    description: ', Always Already Alien, Ars Electronica: Out of the Box, 2019, ',
    info: <CustomLink  to='https://ars.electronica.art/outofthebox/en/already-alien/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Groove Body"}</span>,
    description: ', Art & Technology Studies MFA Brochure, School of the Art Institute of Chicago, 2019, ',
    info: <CustomLink  to='https://www.saic.edu/sites/default/files/Grad_ATS_Bro_WEB.pdf' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria: Studio Visit"}</span>,
    description: ', Art & Technology Studies, School of the Art Institute of Chicago, 2019, ',
    info: <CustomLink  to='https://youtu.be/F0y5VBgaXyk?t=129' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Groove Body"}</span>,
    description: ', Blockchain City: Reclaiming "I" And Reinventing "We", Art Center Nabi, 2019, ',
    info: <CustomLink  to='http://nabi.or.kr/en/archive/board_view.php?ach_idx=1825&ach_id=column' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Small-Pop Hypothesis"}</span>,
    description: ', 2020/2021 Graduate Programs (Page, 210-211), School of the Art Institute of Chicago, 2019, ',
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