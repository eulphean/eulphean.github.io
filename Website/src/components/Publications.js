import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink.js'

const projects = [
  {
    title: <span style={cvStyles.title}>{"World That Awaits"}</span>,
    description: <span>{", Viral Ecologies, 2023, "}</span>,
    info: <CustomLink  to='https://viralecologies.us/WORLD-THAT-AWAITS' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Curation as Co-Creation"}</span>,
    description: <span>{", Chicago Artist Writers, 2023, "}</span>,
    info: <CustomLink  to='https://chicagoartistwriters.com/curation-as-co-creation/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Cultivate Featured Artist: Amay Kataria"}</span>,
    description: <span>{", Cultivate Magazine, 2023, "}</span>,
    info: <CustomLink  to='https://www.cultivategrandrapids.org/post/cultivate-featured-artist-amay-kataria' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"An Ephemeral Ritual: Interview with Amay Kataria"}</span>,
    description: <span>{", Creative Applications, 2023, "}</span>,
    info: <CustomLink  to='https://www.creativeapplications.net/member-submissions/and-the-hungry-were-fed-an-ephemeral-ritual/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Towards a more cohesive future: A review of World That Awaits at MU Gallery"}</span>,
    description: <span>{", Newcity, 2022, "}</span>,
    info: <CustomLink  to='https://art.newcity.com/2022/09/14/towards-a-more-cohesive-future-a-review-of-world-that-awaits-at-mu-gallery/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Supersynthesis: A Communal Synthesis"}</span>,
    description: <span>{", IEEE Journal, 2022, "}</span>,
    info: <CustomLink  to='https://ieeexplore.ieee.org/document/9975720' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Exploring ‘Supersynthesis’ and other interactive audio-visual art by Amay Kataria"}</span>,
    description: <span>{", STIR World, 2022, "}</span>,
    info: <CustomLink  to='https://www.stirworld.com/see-features-exploring-supersynthesis-and-other-interactive-audio-visual-art-by-amay-kataria' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Our Mind is An Open Field: An Interview with Amay Kataria"}</span>,
    description: <span>{", Sxity Inches From Center, 2022, "}</span>,
    info: <CustomLink  to='https://sixtyinchesfromcenter.org/our-mind-is-an-open-field-an-interview-with-amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Momimsafe: Can Sousveillance be an Antidote for Isolation?"}</span>,
    description: <span>{", Science Gallery Detroit, 2022, "}</span>,
    info: <CustomLink  to='https://detroit.sciencegallery.com/blog/momimsafe-can-sousveillance-be-an-antidote-for-isolation' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Janus: A confrontation of the past and the future"}</span>,
    description: <span>{", Terrain Art, 2022, "}</span>,
    info: <CustomLink  to='https://www.terrain.art/discover/blogs/Janus_Study%253A_A_confrontation_of_the_past_and_the_future-62b18443c366e8fe150e9889' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"The “Lost Passage” of passenger pigeons"}</span>,
    description: <span>{", VanNews, 2022, "}</span>,
    info: <CustomLink  to='http://vannewsagency.com/detailsnews?newsid=VN29618512847' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Light & Sound Synthesis: In Conversation with Amay Kataria"}</span>,
    description: <span>{", Creative Applications, 2022, "}</span>,
    info: <CustomLink  to='https://www.creativeapplications.net/environment/light-sound-synthesis-in-conversation-with-amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Art in Artificial Interview Series"}</span>,
    description: <span>{", Proteus TV, 2022, "}</span>,
    info: <CustomLink  to='https://jennkarson.studio/the-art-in-artificial-interview-series/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Kid Games (with Peter Burr)"}</span>,
    description: <span>{", Responsive Eye, Telematic Media Arts, 2022, "}</span>,
    info: <CustomLink  to='https://drive.google.com/file/d/1nMZFvOKg5NQLA4nVqKCk_ssdvkMLKhIC/view?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"'The Lost Passage' weaves art & technology through a swarm of artificial pigeons"}</span>,
    description: <span>{", STIR World, 2022, "}</span>,
    info: <CustomLink  to='https://www.stirworld.com/see-news-the-lost-passage-weaves-art-technology-through-a-swarm-of-artificial-pigeons' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Tracked & Traced: Sousveillance and the Price of Virality"}</span>,
    description: <span>{", WDET 101.9 FM, 2022, "}</span>,
    info: <CustomLink  to='https://wdet.org/2022/04/07/tracked-and-traced-sousveillance-and-the-price-of-virality/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Trajectory of Supersynthesis"}</span>,
    description: <span>{", MU Gallery, 2022, "}</span>,
    info: <CustomLink  to='https://www.muartgallery.com/trajectory-of-supersynthesis' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Supersynthesis: A Communal Synthesis"}</span>,
    description: <span>{", IEEE Journal, 2022, "}</span>,
    info: <CustomLink  to='https://ieeexplore.ieee.org/document/9975720' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Timekeepers: A Virtual Reality Art Experience"}</span>,
    description: <span>{", Burning Man Journal, 2021, "}</span>,
    info: <CustomLink  to='https://journal.burningman.org/2021/02/burning-man-arts/brc-art/timekeepers-vr/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Artist Spotlight: Amay Kataria"}</span>,
    description: <span>{", BRCVr, 2021, "}</span>,
    info: <CustomLink  to='https://www.youtube.com/watch?v=ZO1FaR1tTFg' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria | Momimsafe Interview"}</span>,
    description: ', Futures of Intimacy, TIFA India Blog, Online, 2021, ',
    info: <CustomLink  to='https://tifastudios.in/amay-kataria/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Tend Towards Infinity"}</span>,
    description: <span>{", Dreams Issue, Emerge Magazine, 2021, "}</span>,
    info: <CustomLink  to='https://saicemerge.com/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"The Lost Passage"}</span>,
    description: <span>{", Creative Applications, 2021, "}</span>,
    info: <CustomLink  to='https://www.creativeapplications.net/member-submissions/the-lost-passage/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"A Brief Primer on Holons and Holarchy"}</span>,
    description: ', Mana Contemporary Editorial, 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/editorial/a-brief-primer-on-holons-and-holarchy/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"MOMIMSAFE"}</span>,
    description: ', Artists At Mana, 2020, ',
    info: <CustomLink  to='https://www.manacontemporary.com/artist-at-mana/momimsafe/' inline={true}>[info]</CustomLink>
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
    title: <span style={cvStyles.title}>{"Center of (Varying) Gravity"}</span>,
    description: <span>{", XXIII Generative Art Conference (page 328), 2020, "}</span>,
    info: <CustomLink  to='https://drive.google.com/file/d/1lGiHmXVw5z4wRXwU7k4e1myCgPlzvKtj/view?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Famous Echos: <i>also tubes</i>"}</span>,
    description: ', BURNAWAY, March 6, 2020, ',
    info: <CustomLink  to='https://burnaway.org/also-tubes-unrequited-leisure/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Moment of Enigma"}</span>,
    description: <span>{", Rennaissance 2.0 2.0 (page 44), 2020, "}</span>,
    info: <CustomLink  to='https://drive.google.com/file/d/1BULcQma8DF1YvS_uIm67sp50VPM_NNmo/view?usp=sharing' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria: Two Degree Window"}</span>,
    description: ', Lumpen Magazine, Lori Waxman, 2019, ',
    info: <CustomLink  to='https://60wrdmin.org/artwork/4694804_Amay_Kataria.html' inline={true}>[info]</CustomLink>
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
    title: <span style={cvStyles.title}>Cyberia: New Media Playground explored the alternate realities in the digital
    age</span>,
    description: ', Stir World, 2019, ',
    info: <CustomLink  to='https://www.stirworld.com/see-features-cyberia-new-media-playground-explored-the-alternate-realities-in-the-digital-age' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Experience Art and Technology in the Millennial Age ...!"}</span>,
    description: ', Chennai Press News, 2019, ',
    info: <CustomLink  to='http://chennaipressnews.blogspot.com/2019/11/experience-art-and-technology-in.html' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"The Future Is Here: exploring the influence of technology on millennials"}</span>,
    description: ', Stir World, 2019, ',
    info: <CustomLink  to='https://www.stirworld.com/inspire-people-the-future-is-here-exploring-the-influence-of-technology-on-millennials' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"International Artist Residencies in Korea"}</span>,
    description: ', The ARTRO, 2019, ',
    info: <CustomLink  to='https://www.theartro.kr:440/eng/features/features_view.asp?idx=2110&b_code=10' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Art & Technology Study Graduate Brochure"}</span>,
    description: ', Art & Technology Studies MFA Brochure, School of the Art Institute of Chicago, 2019, ',
    info: <CustomLink  to='https://www.saic.edu/sites/default/files/Grad_ATS_Bro_WEB.pdf' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Amay Kataria: Studio Visit"}</span>,
    description: ', Art & Technology Studies, School of the Art Institute of Chicago, 2019, ',
    info: <CustomLink  to='https://youtu.be/F0y5VBgaXyk?t=129' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"Dreaming Of A City Of Media Art In Gwangju"}</span>,
    description: ', Gwangju Daily, 2018, ',
    info: <CustomLink  to='http://www.kwangju.co.kr/read.php3?aid=1539010800643133272' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"My Face Is 'Chained' To The Ethereum Blockchain"}</span>,
    description: ', Coindesk Korea, 2018, ',
    info: <CustomLink  to='http://www.coindeskkorea.com/news/articleView.html?idxno=29657' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Paying For Art With My Mugshot? Blockchain Meets Art"}</span>,
    description: ', Blockinpress, 2018, ',
    info: <CustomLink  to='https://blockinpress.com/archives/9145' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Amay Kataria | Media Artist Interview"}</span>,
    description: ', Crown Goose Blog, 2018, ',
    info: <CustomLink  to='https://crowngooseblog.com/2018/09/14/art-center-nabi-amay-kataria-interview/' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"When Blockchain Meets Art; Amay Kataria and Matthias Dörfelt"}</span>,
    description: ', Blockinpress, 2018, ',
    info: <CustomLink  to='https://blockinpress.com/archives/8119' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"SAIC Graduate Program"}</span>,
    description: ', (Page 210-211), School of the Art Institute of Chicago, 2018, ',
    info: <CustomLink  to='https://issuu.com/saic1866/docs/2020_2021_graduate_programs?fr=sZWZhZjE3MzI5MA' inline={true}>[info]</CustomLink>
  },
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