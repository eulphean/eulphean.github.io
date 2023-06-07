import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink.js'


const projects = [
  {
    title: <span style={cvStyles.title}>Dots, Lines, & Folklore</span>,
    description: ', Artist Workshop, Sølberget, Stavanger, Norway, 2022 ',
    info: <CustomLink to='https://www.linticket.no/page/en/event/78/5097' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Ten Lesson for an Autodidact</span>,
    description: ', Artist Talk, Stavanger Art School, Stavanger, Norway, 2022 ',
    info: <CustomLink to='https://www.kunstskolen.no/soknad-og-opptak/slik-soker-du' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Sympoetry</span>,
    description: ', World That Awaits, MU Gallery, Chicago, USA, 2022 ',
    info: <CustomLink to='https://amaykataria.com/#/worldthatawaits' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Supersynthesis: A Communal Synthesis</span>,
    description: ', IEEE VISAP Conference, Online, 2022 ',
    info: <CustomLink to='https://vimeo.com/813376679?share=copy' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>A Symbiotic Passage</span>,
    description: ', Artist Talk, iDMAAa, Online, 2022 ',
    info: <CustomLink to='https://educate.winona.edu/idmaa/2022-weird-media/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Supersynthesis: A Collective Wave</span>,
    description: ', Poster Presentation, MOCO 2022, Columbia College, Chicago, USA, 2022 ',
    info: <CustomLink to='https://moco22.movementcomputing.org/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Tracked & Traced: Sousveillance and the price of virality</span>,
    description: ', WDET 101.9 fm podcast, Online, 2022, ',
    info: <CustomLink to='https://wdet.org/2022/04/07/tracked-and-traced-sousveillance-and-the-price-of-virality/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Language of Light (Supersynthesis)</span>,
    description: ', Artist Talk, with Nicky Ni, MU Gallery, Online, 2022, ',
    info: <CustomLink to='https://vimeo.com/707142444?share=copy' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Tango with AI</span>,
    description: ', Interactive Workshop, ARTExchange, Online, 2021, ',
    info: <CustomLink to='https://www.servicestoartists.com/artexchange2022' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Sincere Understandings</span>,
    description: ', Artist Talk, OFTalk, Online, 2021, ',
    info: <CustomLink to='https://drive.google.com/drive/folders/1ThPEacQs99fgpB9kzJLDh4Rg2vDUdkDF' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Pictures of Nothing</span>,
    description: ', Artist Talk, Shanti Sadan, Online, 2021, ',
    info: <CustomLink to='https://shanti-sadan.net/pictures-of-nothing/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Game of Life</span>,
    description: ', Artist Talk, BRCVR, Online, 2021, ',
    info: <CustomLink to='https://amaykataria.com/#/timekeepers' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Simulation Hypothesis</span>,
    description: ', Artist Talk, with Phillip Mulliken, BRCVR, Online, 2021, ',
    info: <CustomLink to='https://amaykataria.com/#/timekeepers' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Yearning for Intimacy</span>,
    description: ', Artist Talk, SPARKS by ACMSIGGRAPH, Online, 2021, ',
    info: <CustomLink to='https://vimeo.com/511376941#t=29m05s' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Quantum of Time</span>,
    description: ', Interactive conversation with Andreas Berlind, BRCVr, Online, 2021, ',
    info: <CustomLink to='https://amaykataria.com/#/timekeepers' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Fourth Dimension</span>,
    description: ', Artist Workshop, <De>Confine Festival, Online, 2020, ',
    info: <CustomLink to='https://deconfine.org/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Searching for Empathy on Digital Platforms</span>,
    description: ', Artist Talk, <De>Confine Festival, Online, 2020, ',
    info: <CustomLink to='https://deconfine.org/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Figments of Desire</span>,
    description: ', Artist Talk, ALIFE 2020, with Vermont Complex Systems Center at University of Vermont, Online, 2020, ',
    info: <CustomLink to='https://www.manacontemporary.com/event/new-media-program-deconstructing-time/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Deconstructing Time (Amay Kataria & Andreas Berlind)</span>,
    description: ', Artist Talk, Mana Contemporary Chicago, Online, 2020, ',
    info: <CustomLink to='https://www.manacontemporary.com/event/new-media-program-deconstructing-time/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>"Moment of Enigma" Virtual Walkthrough</span>,
    description: ', CADAF Online, 2020, ',
    info: <CustomLink to='https://www.youtube.com/watch?v=fBUShClQokQ&feature=youtu.be' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Demystifying Janus</span>,
    description: ', Artist Talk, Mana Contemporary Chicago, Online, 2020, ',
    info: <CustomLink to='https://www.manacontemporary.com/event/community-lunch-with-amay-kataria-and-philip-mulliken/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>CYOC (Create your own Crypto) with Doug Rosman</span>,
    description: ', Artist Workshop, Commiserate New Media Art Festival, Chicago, USA, 2020, ',
    info:  <CustomLink to='http://commiserate.life/cryptocurrency-in-5-minutes-or-less' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Nest: From Concept to Execution</span>,
    description: ', Artist Talk, New Media Caucus, Chicago, USA, 2020, ',
    info:  <CustomLink to='http://www.newmediacaucus.org/nmc-at-caa-2020/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>BRAHMAN: A Summary</span>,
    description: ', Artist Talk, Brahman AI, Bombay Beach, USA, 2020, ',
    info:  <CustomLink to='https://docs.google.com/presentation/d/195dGvuTT8e6J-FVfRyM1oCTCD8s8kaiRbfENCclF-3s/edit?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Autopoiesis</span>,
    description: ', Artist Talk, School of the Art Institute of Chicago, Chicago, USA, 2019, ',
    info:  <CustomLink to='https://docs.google.com/presentation/d/1JOdNrFl66LIG3Z1R3h9mrs43KiRthhXhEuaDRbsw8A0/edit?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Art x Body x Blockchain</span>,
    description: ', Artist Talk, Art Center Nabi, Seoul, South Korea, 2018, ',
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