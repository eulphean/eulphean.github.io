import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles';
import CustomLink from './CustomLink.js'


const projects = [
  {
    title: <span style={cvStyles.title}>Momimsafe: Reinventing Intimacy</span>,
    description: ', Artist Talk, SPARKS by ACMSIGGRAPH, Online, (upcoming) 2021, ',
    info: <CustomLink to='http://siggrapharts.ning.com/page/sparks-series-2021' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Fourth Dimension</span>,
    description: ', Two-day seminar, <De>Confine Festival, Online, 2020, ',
    info: <CustomLink to='https://deconfine.org/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Searching for Empathy on Digital Platforms</span>,
    description: ', Artist Talk, <De>Confine Festival, Online, 2020, ',
    info: <CustomLink to='https://deconfine.org/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Deconstructing Time with Amay Kataria & Andreas Berlind</span>,
    description: ', Artist Talk, Mana Contemporary Chicago, Online, 2020, ',
    info: <CustomLink to='https://www.manacontemporary.com/event/new-media-program-deconstructing-time/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>"Moment of Enigma" Virtual Walkthrough with Duncan Bass</span>,
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