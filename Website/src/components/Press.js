import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles'
import CustomLink from './CustomLink.js'

const projects = [
  {
      title: <span style={cvStyles.title}>{"Famous Echos: <i>also tubes</i>"}</span>,
      description: ', BURNAWAY, March 6, 2020, ',
      info: <CustomLink  to='https://burnaway.org/also-tubes-unrequited-leisure/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"The “Wrong Biennale” Seeks to Create the Right Conditions for Digital Art"}</span>,
    description: ', Hyperallergic, February 27, 2020, ',
    info: <CustomLink  to='https://hyperallergic.com/545106/the-wrong-biennale-seeks-to-create-the-right-conditions-for-digital-art/' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>Cyberia: New Media Playground explored the alternate realities in the digital
    age</span>,
    description: ', Stir World, December 31, 2019, ',
    info: <CustomLink  to='https://www.stirworld.com/see-features-cyberia-new-media-playground-explored-the-alternate-realities-in-the-digital-age' inline={true}>[info]</CustomLink>
  },  
  {
    title: <span style={cvStyles.title}>The Future is Here</span>,
    description: ', Pune Mirror, December 12, 2019, ',
    info: <CustomLink  to='https://punemirror.indiatimes.com/entertainment/unwind/the-future-is-here/articleshow/72479652.cms' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Experience Art & Technology in the millenial age at Phoenix Market City with the Art Exhibition: ‘Future is Here’!"}</span>,
    description: ', Chennaiyil, December 3, 2019, ',
    info: <CustomLink  to='https://chennaiyil.com/experience-art-technology-millennial-age-phoenix-marketcity-art-exhibition-future/' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"The art inside the underbelly"}</span>,
    description: ', The New Indian Express, November 28, 2019, ',
    info: <CustomLink  to='https://www.newindianexpress.com/cities/chennai/2019/nov/28/the-art-inside-the-underbelly-2068108.html' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Experience Art and Technology in the Millennial Age at Phoenix Marketcity with the Art Exhibition, ‘Future Is Here’!"}</span>,
    description: ', Chennai Press News, November 28, 2019, ',
    info: <CustomLink  to='http://chennaipressnews.blogspot.com/2019/11/experience-art-and-technology-in.html' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Art exhibition in Chennai to expose digital realities"}</span>,
    description: ', The Times of India, November 25, 2019, ',
    info: <CustomLink  to='https://timesofindia.indiatimes.com/city/chennai/exhibition-in-chennai-to-expose-digital-realities-through-art/articleshow/72228973.cms' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"The Future Is Here: exploring the influence of technology on millennials"}</span>,
    description: ', Stir World, August 26, 2019, ',
    info: <CustomLink  to='https://www.stirworld.com/inspire-people-the-future-is-here-exploring-the-influence-of-technology-on-millennials' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"International Artist Residencies in Korea"}</span>,
    description: ', The ARTRO, February 21, 2019, ',
    info: <CustomLink  to='https://www.theartro.kr:440/eng/features/features_view.asp?idx=2110&b_code=10' inline={true}>[info]</CustomLink>
  },
  {
    title: <span style={cvStyles.title}>{"An interactive exhibition explores the uses and abuses of digital technology"}</span>,
    description: ', The Indian Express, January 25, 2019, ',
    info: <CustomLink  to='https://indianexpress.com/article/lifestyle/art-and-culture/the-future-is-here-exhibition-kamalnayan-art-gallery-mumbai-5554247/' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"With New-Age Tech, Millennials Shape Art For The Future"}</span>,
    description: ', The Times of India, January 17, 2019, ',
    info: <CustomLink  to='https://timesofindia.indiatimes.com/city/mumbai/with-new-age-tech-millennials-shape-art-for-the-future/articleshow/67565489.cms' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"How Is Technology Affecting Millennials?"}</span>,
    description: ', Vogue, January 17, 2019, ',
    info: <CustomLink  to='https://www.vogue.in/content/how-is-technology-affecting-millennials' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Dreaming Of A City Of Media Art In Gwangju"}</span>,
    description: ', Gwangju Daily, October 9, 2018, ',
    info: <CustomLink  to='http://www.kwangju.co.kr/read.php3?aid=1539010800643133272' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"My Face Is 'Chained' To The Ethereum Blockchain"}</span>,
    description: ', Coindesk Korea, September 28, 2018, ',
    info: <CustomLink  to='http://www.coindeskkorea.com/news/articleView.html?idxno=29657' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Paying For Art With My Mugshot? Blockchain Meets Art"}</span>,
    description: ', Blockinpress, September 21, 2018, ',
    info: <CustomLink  to='https://blockinpress.com/archives/9145' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"Art Center Nabi: Amay Kataria Interview"}</span>,
    description: ', Crown Goose Blog, September 14, 2018, ',
    info: <CustomLink  to='https://crowngooseblog.com/2018/09/14/art-center-nabi-amay-kataria-interview/' inline={true}>[info]</CustomLink>
  }, 
  {
    title: <span style={cvStyles.title}>{"When Blockchain Meets Art; Amay Kataria and Matthias Dörfelt"}</span>,
    description: ', Blockinpress, August 20, 2018, ',
    info: <CustomLink  to='https://blockinpress.com/archives/8119' inline={true}>[info]</CustomLink>
  }
]; 

class Press extends React.Component {
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
            PRESS
          </div>
          {pComps}
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

export default Radium(Press);