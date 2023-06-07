import React from 'react'
import Radium from 'radium'
import { cvStyles } from './CommonStyles.js'
import CustomLink from './CustomLink.js'

const solo = [ 
    {
        title: <CustomLink to='https://amaykataria.com/#/andthehungrywerefed' italics={true} inline={true}>And The Hungry Were Fed</CustomLink>,
        description: ', Stasjon K, Sandnes, Norway, 2022',
        info:''
    }, 
    {
        title: <CustomLink to='https://amaykataria.com/#/supersynthesis' italics={true} inline={true}>Supersynthesis</CustomLink>,
        description: ', MU Gallery, Chicago, USA, 2022',
        info:''
    }, 
    {
        title: <CustomLink to="https://amaykataria.com/#/momentofenigma" italics={true} inline={true}>Moment of Enigma</CustomLink>,
        description: ', Mana Contemporary, Chicago, USA, 2020',
        info:''
    }, 
    {
        title: <CustomLink to='https://amaykataria.com/#/momentofenigma' inline={true}>Moment of Enigma</CustomLink>,
        description: ', CADAF Online, 2020',
        info: ''
    }, 
];

const curatorial = [
    {
        title: <CustomLink to="https://amaykataria.com/#/worldthatawaits" italics={true} inline={true}>World That Awaits</CustomLink>,
        description: ', MU Gallery, Chicago, USA, 2022',
        info:''
    }
];

const group = [
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/lostpassage' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', Future Fantastic Festival, Bangalore, India, 2022, ',
        info: <CustomLink  to='https://futurefantastic.in/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/lostpassage' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', Tech Art Teaser by BeFantastic, Bangalore, India, 2022, ',
        info: <CustomLink  to='https://www.picuki.com/media/2983005679710733570' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/lostpassage' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', FutuRetro, Athens Digital Arts Festival, Online, 2022, ',
        info: <CustomLink  to='https://www.adaf.gr/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/kidgames' inline={true}>{"Kid Games"}</CustomLink>,
        description: <span><span>{", Responsive Eye, with "}</span><CustomLink to='https://peterburr.org/' inline={true}>Peter Burr</CustomLink><span>{", Onyx Studios, New York, 2022, "}</span></span>,
        info: <CustomLink  to='https://happeningnext.com/event/peter-burrs-responsive-eye-eid4snvqgalws1' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://thelostpassage.art' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', Can Tech Save the World and Art Heal It?, Singapore Sustainable Gallery, Singapore, 2022, ',
        info: <CustomLink  to='https://francophonie.sg/can-tech-save-the-world-and-art-heal-it/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/momimsafe' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', Going Home, Wilsonville Arts & Culture Council, Online, 2022, ',
        info: <CustomLink  to='https://www.wilsonvillearts.org/going-home?pgid=kz3vdqln-3801ecc1-c24c-4abe-a6f3-d69fbe642a33' inline={true}>[info]</CustomLink>
    },
    {
        title:<span><CustomLink italics={true} to='https://amaykataria.com/#/Holon' inline={true}>{"Holons & Holarchy"}</CustomLink><span>{' & '}</span><CustomLink italics={true} to='https://amaykataria.com/#/momimsafe' inline={true}>{"MOMIMSAFE"}</CustomLink></span>,
        description: ', ARTExchange Exhibition, C33 Gallery, Columbia College, Chicago, USA, 2022, ',
        info: <CustomLink  to='https://www.servicestoartists.com/artexchange2022' inline={true}>[info]</CustomLink>
    },
    {
        title: <span><CustomLink italics={true} to='https://amaykataria.com/#/Janus' inline={true}>{"Janus Study"}</CustomLink><span>{' & '}</span><CustomLink italics={true} to='https://amaykataria.com/#/liarbirds' inline={true}>{"Liarbirds"}</CustomLink></span>,
        description: ', MetaMeta curated by Jiaqi Li & Nicky Ni, Online, 2022, ',
        info: <CustomLink  to='https://twitter.com/theTingDAO/status/1483962218853318656?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1483962218853318656%7Ctwgr%5E70b354b1afd4b639e7931be9881ce26c6398c190%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2FtheTingDAO2Fstatus2F1483962218853318656widget%3DTweet' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://thelostpassage.art' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', VR Climate Change Memorial, Online, 2022, ',
        info: <CustomLink  to='https://vr-climate-change-memorial.glitch.me/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://thelostpassage.art' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', In Good Company curated by S.Y. Lin, Mana Contemporary, Chicago, USA, 2021, ',
        info: <CustomLink  to='https://www.manacontemporary.com/exhibition/monira-foundation-presents-in-good-company/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://thelostpassage.art' inline={true}>{"The Lost Passage"}</CustomLink>,
        description: ', BeFantastic Showcase, Online, 2021, ',
        info: <CustomLink  to='https://befantastic.in/together/the-lost-passage/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Holon' inline={true}>{"Holons & Holarchy"}</CustomLink>,
        description: ', Reboot Me Softly, Pikel Festival, Bergen, Norway, 2021, ',
        info: <CustomLink  to='https://21.piksel.no/2021/11/18/holons-holarchy/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/janus' inline={true}>{"Janus Study"}</CustomLink>,
        description: ', Terrain Offline, Bikaner House, Delhi, India, 2021, ',
        info: <CustomLink  to='https://www.architecturaldigest.in/story/indian-art-as-nft-a-new-exhibition-brings-exciting-names-to-the-much-hyped-format/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://momimsafe.live' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', Tracked & Traced, Science Gallery Detroit, USA, 2021, ',
        info: <CustomLink  to='https://detroit.sciencegallery.com/tracked-traced' inline={true}>[info]</CustomLink>
    },  
    {
        title: <span><CustomLink italics={true} to='https://amaykataria.com/#/Timekeepers' inline={true}>{"Timekeepers"}</CustomLink></span>,
        description: ', AMAZE Berlin 10th International Games Festival, Online, 2021, ',
        info: <CustomLink  to='https://2021.award.amaze-berlin.de/games/2021/timekeepers' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span><CustomLink italics={true} to='https://liarbirds.art' inline={true}>{"Liarbirds"}</CustomLink></span>,
        description: ', CURRENTS 2021, Online, 2021, ',
        info: <CustomLink  to='https://currentsnewmedia.org/work/liarbirds/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/momimsafe' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', Monira Foundation, curated by Ysabel Pinyol, Online, 2021, ',
        info: <CustomLink  to='https://piksel.no/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/centerofvaryinggravity/' inline={true}>{"Center of (Varying) Gravity"}</CustomLink>,
        description: ', Is it a Good Time?, curated by Nicky Ni & Maryam Faridani, Mana Contemporary, Online, 2021, ',
        info: <CustomLink  to='https://www.manacontemporary.com/event/is-it-a-good-time/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/centerofvaryinggravity/' inline={true}>{"Center of (Varying) Gravity"}</CustomLink>,
        description: ', Streetlight, Roman Susan, Chicago, USA, 2021, ',
        info: <CustomLink  to='https://romansusan.org/streetlight' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/kidgames' inline={true}>{"Kid Games"}</CustomLink>,
        description: <span><span>{", Responsive Eye, with "}</span><CustomLink to='https://peterburr.org/' inline={true}>Peter Burr</CustomLink><span>{", Telematic Arts, USA, 202, "}</span></span>,
        info: <CustomLink  to='http://theshapeofempty.space/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Timekeepers' inline={true}>{"Timekeepers"}</CustomLink>,
        description: ', Burning Man: Walking Dreams, organized by BRCVr, AltspaceVR, Online, 2021, ',
        info: <CustomLink  to='https://brcvr.org/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Timekeepers' inline={true}>{"Timekeepers"}</CustomLink>,
        description: ', Burning Man: New Year Special Edition, organized by BRCVr, AltspaceVR, Online, 2021, ',
        info: <CustomLink  to='https://brcvr.org/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <span style={cvStyles.title}>{"Sincere Understandings"}</span>,
        description: ', Open House, Mana Contemporary, Chicago, USA, 2021, ',
        info: <CustomLink  to='https://www.manacontemporary.com' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://liarbirds.art' inline={true}>{"Liarbirds"}</CustomLink>,
        description: ', CADAF Digital Art Month Public Art, Miami, USA, 2020, ',
        info: <CustomLink  to='https://www.digitalartmonth.com/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/janus' inline={true}>{"Janus Study"}</CustomLink>,
        description: ', MoCA Lights Festival, Patchogue, New York, USA, 2020, ',
        info: <CustomLink  to='https://patchoguearts.org/mocalights/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://liarbirds.art' inline={true}>{"Liarbirds"}</CustomLink>,
        description: ', Hyde Park Art Center Interactive Gala, Chicago, USA, Online, 2020, ',
        info: <CustomLink  to='http://www.thevisualist.org/2020/11/hyde-park-art-center-interactive-virtual-gala/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/centerofvaryinggravity/' inline={true}>{"Center of (Varying) Gravity"}</CustomLink>,
        description: ', Generative Art Conference 2020, organized by ARGENIA Association, Rome, Italy, 2020, ',
        info: <CustomLink  to='http://generativeart.com' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://momimsafe.live' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', PIKSEL20 Festival, Cyber Salon & IRL, Bergen, Norway, 2020, ',
        info: <CustomLink  to='https://20.piksel.no/2020/11/19/momimsafe-a-spin-on-surveillance-technology-to-explore-human-empathy/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://momimsafe.live' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', <De>Confine Festival, curated by Khayal and Proiti Seal Acharya with Alliance Francaise, Online, 2020, ',
        info: <CustomLink  to='https://deconfine.org/amay-kataria/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/MomentofEnigma/' inline={true}>{"Moment of Enigma"}</CustomLink>,
        description: ', Rennaissance 20.20, curated by Eleonora Brizi, Breezy Art Gallery, Rome, Italy, 2020, ',
        info: <CustomLink  to='http://breezyartgallery.com' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Timekeepers' inline={true}>{"Timekeepers"}</CustomLink>,
        description: ', Burning Man: Metaverse, organized by BRCVr, AltspaceVR, Online, 2020, ',
        info: <CustomLink  to='https://brcvr.org/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/FigmentsofDesire' inline={true}>{"Figments of Desire"}</CustomLink>,
        description: ', ALIFE 2020, organized by Vermont Complex Systems Center, University of Vermont, Vermont, USA, 2020, ',
        info: <CustomLink  to='https://vermontcomplexsystems.org/events/ALIFE-2020/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://momimsafe.live' inline={true}>{"MOMIMSAFE"}</CustomLink>,
        description: ', Vector Festival, curated by Martin Zeilinger and Katie Micak, Toronto, Canada, 2020, ',
        info: <CustomLink  to='https://2020.vectorfestival.org/artwork/13' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Holon/' inline={true}>{"Holons & Holarchy"}</CustomLink>,
        description: ', ZEROONE, curated by Ysabel Pinyol, CADAF Online, 2020, ',
        info: <CustomLink  to='https://www.manacontemporary.com/event/selects-curated-exhibitions-at-digital-open-house/' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://covg.art' inline={true}>{"Center of (Varying) Gravity"}</CustomLink>,
        description: ', LOCUS IV, curated by Whitney LaMora, The Martin Gallery, Chicago, USA, 2020, ',
        info: <CustomLink  to='https://www.themartinchicago.com/locus-i-v' inline={true}>[info]</CustomLink>
    }, 
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble-Wall/' inline={true}>Babble</CustomLink>,
        description: ', (un)continuity, curated by Anastasia Salter and Ha’ani Hogan, CityArts Gallery, Orlando, USA, 2020, ',
        info: <CustomLink  to='https://projects.cah.ucf.edu/mediaartsexhibits/uncontinuity/Kataria/kataria.html' inline={true}>[info]</CustomLink>
    }, 
    {
        title:  <CustomLink italics={true} to='https://amaykataria.com/#/BombayBeach/' inline={true}>Silent City</CustomLink>,
        description: ', Internet Art Slot Machine, curated by Nicky Ni, The NeuLithium, 2020, ',
        info: <CustomLink  to='https://theneulithium.github.io/slotmachine/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/Babble-Wall/' inline={true}>Babble</CustomLink>,
        description: ', <i>also</i> tubes, curated by Clint Sleeper, Unrequited Leisure, Nashville, USA, 2020, ',
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
        title: <CustomLink italics={true} to='https://amaykataria.com/#/babble' inline={true}>Babble</CustomLink>,
        description: ', Learning Machines, curated by Helena Nikonole and Alexei Shulgin, Electromuseum, Moscow, Russia, 2020,  ',
        info: <CustomLink to='http://electromuseum.ru/en/event/learning-machines-obuchennye-mashiny/?fbclid=IwAR13ScXtzH0Dl2TDss6MWqvwSMx-OaoTPK--rENO8SuPNeRuA9rIJrpB3O4' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/EthereumFarm' inline={true}>Ethereum Farm</CustomLink>,
        description: <span><span>{", Re:Working Labor, Sullivan Galleries, with "}</span><CustomLink to='https://stephanierothenberg.com/' inline={true}>Stephanie Rothenberg</CustomLink><span>{"), Chicago, USA, 2019, "}</span></span>,
        info: <CustomLink to='http://sites.saic.edu/reworkinglabor/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://encryptionarchive.net' inline={true}>Encryption Archive*</CustomLink>,
        description: ', Boundless Encounters, HangZhou Triennial of Fiber Art, (new work commission for Dylan M. Fish), HangZhou, China, 2019, ',
        info: <CustomLink to='http://www.fiberarthangzhou.com/Site_En/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/ThreeEcologies' inline={true}>Three Ecologies</CustomLink>,
        description: <span><span>{", Terrain Exhibitions, Terrain Biennial, with "}</span><CustomLink to='https://jaclynjacunski.com/home.html' inline={true}>Jaclyn Jacunski</CustomLink><span>{", Chicago, USA, 2019, "}</span></span>,
        info: <CustomLink to='https://terrainexhibitions.org/chicago-il' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/EthereumFarm' inline={true}>Ethereum Farm*</CustomLink>,
        description: <span><span>{", Goodbye Cruel World, It's Over, Weltkunstzimmer, with "}</span><CustomLink to='https://stephanierothenberg.com/' inline={true}>Stephanie Rothenberg</CustomLink><span>{", Dusseldorf, Germany, 2019, "}</span></span>,
        info: <CustomLink to='https://weltkunstzimmer.de/en/details/article//ausstellung-4.html' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to='https://amaykataria.com/#/Nest' inline={true}>Nest</CustomLink>,
        description: ', CYBERIA: New Media Playground, curated by Anokhi Shah, TIFA Studios, Pune, India, 2019, ',
        info: <CustomLink to='https://cyberiafestival.com/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://www.ayeshasingh.com/works/2019/frayed-continuum-delhi' inline={true}>Frayed Continuum, Pendulum</CustomLink>,
        description: <span><span>{", It Was Never Concrete, Shrine Empire, with "}</span><CustomLink to='https://www.ayeshasingh.com/home' inline={true}>Ayesha Singh</CustomLink><span>{", New Delhi, India, 2019, "}</span></span>,
        info: <CustomLink to='https://www.mojarto.com/blogs/ayesha-singh-s-solo-show-it-was-never-concrete' inline={true}>[info]</CustomLink>
    },
    {
        title: <span><CustomLink italics={true} to='https://amaykataria.com/#/FigmentsOfAttention/' inline={true}>Figments of Attention</CustomLink><span>{' & '}</span><CustomLink italics={true} to='https://amaykataria.com/Babble' inline={true}>Babble</CustomLink></span>,
        description: ', Future is Here: Art & Technology in Millennial Age, curated by Dr. Arshiya Lokhandwala, Phoenix City Mall, Chennai, India, 2019, ',
        info: <CustomLink to='http://futureishere.in/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://holihollyday.github.io/fixityequalsdeath/art/2degree.html" inline={true}>Two Degree Window</CustomLink>,
        description: ', Fixity Equals Death, curated by Francisca Rudolph, Wrong Biennale, Chicago, USA, 2019, ',
        info: <CustomLink to='https://holihollyday.github.io/fixityequalsdeath/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/Babble" inline={true}>Babble</CustomLink>,
        description: ', NeurIPS Creativity, AI Art Online, 2019, ',
        info: <CustomLink  to='http://www.aiartonline.com/community-2019/amay-kataria/' inline={true}>[info]</CustomLink>
      },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/Nest" inline={true}>Nest</CustomLink>,
        description: ', Always Already Alien, curated by Duncan Bass, Ars Electronica, Linz, Austria, 2019, ',
        info: <CustomLink to='https://ars.electronica.art/outofthebox/en/already-alien/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://www.zivzeevcohen.com/long-memory' inline={true}>Long Memory</CustomLink>,
        description: <span><span>{", Remanence/Remnants, 062 Gallery, with "}</span><CustomLink to='https://www.zivzeevcohen.com/studio' inline={true}>Ziv Ze'ev Cohen</CustomLink><span>{", Chicago, USA, 2019, "}</span></span>,
        info: <CustomLink to='https://www.thevisualist.org/2019/07/ziv-zeev-cohen-remanence-remnants/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/FigmentsOfDesire" inline={true}>Figments of Desire</CustomLink>,
        description: ', MFA Thesis Show, curated by Rohan Ayinde Smith, Sullivan Galleries, Chicago, USA, 2019, ',
        info: <CustomLink to='https://sites.saic.edu/mfa2019/artist/amay-kataria/' inline={true} >[info]</CustomLink> 
    },
    {
        title: <CustomLink italics={true} to='https://yaazdcontractor.com/physical/rgby.html' inline={true}>RGBY</CustomLink>,
        description: <span><span>{", NYCxDesign, with "}</span><CustomLink to='https://yaazdcontractor.com/' inline={true}>Yaazd Contractor</CustomLink><span>{", New York, USA, 2019, "}</span></span>,
        info: <CustomLink to='https://www.whatnotstudio.design/' inline={true}>[info]</CustomLink>
    },
    {
        title: <span><CustomLink italics={true} to='https://amaykataria.com/#/FigmentsOfAttention/' inline={true}>Figments of Attention</CustomLink><span>{' & '}</span><CustomLink italics={true} to='https://amaykataria.com/Babble' inline={true}>Babble</CustomLink></span>,
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
    },
    {
        title: <CustomLink italics={true} to='https://www.galenodellsmedley.com/smallpop-hypothesis' inline={true}>Small-Pop Hypothesis</CustomLink>,
        description: <span><span>{", MFA Thesis Show 2018, with "}</span><CustomLink to='https://www.galenodellsmedley.com/' inline={true}>Galen Odell-Smedley</CustomLink><span>{", Chicago, USA, 2019, "}</span></span>,
        info: <CustomLink to='http://sites.saic.edu/mfa2018/artist/galen-odell-smedley/' inline={true}>[info]</CustomLink>
    },
    {
        title: <CustomLink italics={true} to="https://amaykataria.com/#/GenerativeDecay" inline={true}>Generative Decay</CustomLink>,
        description: ', Algomotion, Flex Space, School of the Art Institute of Chicago, Chicago, USA, 2018, ',
        info: <CustomLink to='https://ats.community/t/algomotion-reception-this-friday/962' inline={true} >[info]</CustomLink> 
    }
]; 

class Exhibitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let gComps = this.formatProjects(group); 
    let sComps = this.formatProjects(solo)
    let cComps = this.formatProjects(curatorial)
    return (
        <div style={cvStyles.container}>
            <div style={cvStyles.bottomSpace}>
                <div style={cvStyles.heading}>
                    SOLO
                </div>
                { sComps }
            </div>
            <div style={cvStyles.bottomSpace}>
                <div style={cvStyles.heading}>
                    CURATORIAL
                </div>
                { cComps }
            </div>
            <div style={cvStyles.heading}>
                GROUP
            </div>
            { gComps }
        </div>
    );
  }

  formatProjects(projects) {
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

export default Radium(Exhibitions);
