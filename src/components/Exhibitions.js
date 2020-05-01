import React from 'react'
import Radium from 'radium'
import { padding, cvStyles } from './CommonStyles.js'
import CustomLink from './CustomLink.js'

const styles={
    container: {
        display: 'flex',
        marginTop: padding.big,
        flexDirection: 'column'
      }
}

const projects = [
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble-Wall/' inline={true}>Babble</CustomLink>,
        description: ', (gen)erations, curated by Anastasia Salter and Ha’ani Hogan, CityArts Gallery, Orlando, Florida, 2020, ',
        info: <CustomLink  to='https://elo.cah.ucf.edu/' inline={true}>[info]</CustomLink>
    }, 
    {
        title:  <CustomLink italics={true} to='https://amaykataria.com/#/BombayBeach/' inline={true}>Silent City</CustomLink>,
        description: ', Internet Art Slot Machine, curated by Nicky Ni, The NeuLithium, 2020, ',
        info: <CustomLink  to='https://theneulithium.github.io/slotmachine/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble-Wall/' inline={true}>Babble</CustomLink>,
        description: ', <i>also</i> tubes, curated by Clint Sleeper, Unrequited Leisure, Nashville, Tennessee, 2020, ',
        info: <CustomLink to='http://unrequitedleisure.com/' inline={true} >[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/twodegreewindow" inline={true}>Two Degree Window</CustomLink>,
        description: ', Fixity Equals Death, curated by Francisca Rudolph, Space P11, Chicago, USA, 2020, ',
        info: <CustomLink to='https://space-p11.com/f-d' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/FigmentsOfAttention" inline={true}>Figments of Attention</CustomLink>,
        description: ', The Virtual is (Always) Virtual, curated by Mitsu Hadeishi, Bronx Art Space, New York, USA, 2020,  ',
        info: <CustomLink to='https://www.nyartbeat.com/event/2020/4A9E' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble-Wall/' inline={true}>Babble</CustomLink>,
        description: ', Learning Machines, curated by Helena Nikonole and Alexei Shulgin, Electromuseum, Moscow, Russia, 2020,  ',
        info: <CustomLink to='http://electromuseum.ru/en/event/learning-machines-obuchennye-mashiny/?fbclid=IwAR13ScXtzH0Dl2TDss6MWqvwSMx-OaoTPK--rENO8SuPNeRuA9rIJrpB3O4' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Nest' inline={true}>Nest</CustomLink>,
        description: ', CYBERIA: New Media Playground, curated by Anokhi Shah, TIFA Studios, Pune, India, 2019, ',
        info: <CustomLink to='https://cyberiafestival.com/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble' inline={true}>Babble</CustomLink>,
        description: ', Future is Here: Art & Technology in Millennial Age, curated by Dr. Arshiya Lokhandwala, Phoenix City Mall, Channai, India, 2019, ',
        info: <CustomLink to='http://futureishere.in/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/FigmentsOfAttention/' inline={true}>Figments of Attention</CustomLink>,
        description: ', Future is Here: Art & Technology in Millennial Age, curated by Dr. Arshiya Lokhandwala, Phoenix City Mall, Channai, India, 2019, ',
        info: <CustomLink to='http://futureishere.in/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://holihollyday.github.io/fixityequalsdeath/art/2degree.html" inline={true}>Two Degree Window</CustomLink>,
        description: ', Fixity Equals Death, curated by Francisca Rudolph, Wrong Biennale, Chicago, USA, 2020, ',
        info: <CustomLink to='https://holihollyday.github.io/fixityequalsdeath/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/Nest" inline={true}>Nest</CustomLink>,
        description: ', Always Already Alien, curated by Duncan Bass, Ars Electronica, Linz, Austria, 2019, ',
        info: <CustomLink to='https://ars.electronica.art/outofthebox/en/already-alien/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/FigmentsOfDesire" inline={true}>Figments of Desire</CustomLink>,
        description: ', MFA Thesis Show, curated by Rohan Ayinde Smith, Sullivan Galleries, Chicago, USA, 2019, ',
        info: <CustomLink to='https://sites.saic.edu/mfa2019/artist/amay-kataria/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble' inline={true}>Babble</CustomLink>,
        description: ', Future is Here: Art & Technology in Millennial Age, curated by Dr. Arshiya Lokhandwala, Bajaj Bhawan, Mumbai, India, 2019, ',
        info: <CustomLink to='http://futureishere.in/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/FigmentsOfAttention/' inline={true}>Figments of Attention</CustomLink>,
        description: ', Future is Here: Art & Technology in Millennial Age, curated by Dr. Arshiya Lokhandwala, Bajaj Bhawan, Mumbai, India, 2019, ',
        info: <CustomLink to='http://futureishere.in/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/GrooveBody/' inline={true}>Groove Body</CustomLink>,
        description: ', Nabi Artist Residency 2018 Exhibition, curated by Suhun Lee, Art Center Nabi, Seoul, South Korea, 2018, ',
        info: <CustomLink to='http://nabi.or.kr/en/page/board_view.php?brd_idx=964&brd_id=project' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/twodegreewindow" inline={true}>Two Degree Window</CustomLink>,
        description: ', Art-A-Hack Exhibition, ThoughtWorks, New York, USA, 2018, ',
        info: <CustomLink to='https://artahack.io/projects/climate-consciousness/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/PostCryptocollectible" inline={true}>Post-Cryptocollectible</CustomLink>,
        description: ', Art & Blockchain Hack Space, curated by Jessica Angel, Ethereal Summit, New York, USA, 2018, ',
        info: <CustomLink to='http://artproject.io/' inline={true} >[info]</CustomLink> 
    }
]; 

class Exhibitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let pComps = this.formatProjects(); 
    return (
        <div style={styles.container}>
            <div style={cvStyles.heading}>
                EXHIBITIONS
            </div>
            { pComps }
        </div>
    );
  }

  formatProjects() {
      let components = []; 
      projects.forEach(p => {
        let c = (
            <div style={cvStyles.entry}>
                {p.title}{p.description}{p.info}
            </div>
        ); 
        components.push(c); 
      }); 
      return components; 
  }
}

export default Radium(Exhibitions);
