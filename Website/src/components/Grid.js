import React from 'react'
import Radium from 'radium'
import difference from 'lodash/difference'

// Components
import Tile from './Tile.js'
import GridFilterer from './GridFilterer.js'

// Grid Tiles
import nest from '../tiles/nest.jpg'
import groove from '../tiles/groove.jpg'
import figmentsofdesire from '../tiles/figmentsofdesire.jpg'
import babble from '../tiles/babble.jpg'
import figmentsofattention from '../tiles/figmentsofattention.jpg'
import speculativebitcoinwallet from '../tiles/speculativebitcoinwallet.jpg'
import twodegreeproject from '../tiles/twodegree.jpg'
import cryptokitty from '../tiles/cryptokitty.jpg'
import breathfoliage from '../tiles/breathfoliage.jpg'
import holon from '../tiles/holon.jpg'
import bombaybeach from '../tiles/bombaybeach.jpg'
import encryptionarchive from '../tiles/encryptionarchive.jpg'
import ethereumfarm from '../tiles/ethereumfarm.jpg'
import threeecologies from '../tiles/threeecologies.jpg'
import generativedecay from '../tiles/generativedecay.jpg'
import parabolicsound from '../tiles/parabolicsound.jpg'
import treeoflife from '../tiles/treeoflife.jpg'
import magicmic from '../tiles/magicmic.jpg'
import virtues from '../tiles/virtues.jpg'
import earthlens from '../tiles/earthlens.jpg'
import skype from '../tiles/skype.jpg'
import sonicnegotiation from '../tiles/sonicnegotiation.jpg'
import bendtherules from '../tiles/bendtherules.jpg'
import momimsafe from '../tiles/momimsafe.jpg'
import janus from '../tiles/janus.jpeg'
import gravity from '../tiles/gravity.jpg'
import momentofenigma from '../tiles/momentofenigma.jpg'
import timekeepers from '../tiles/timekeepers.jpg'
import liarbirds from '../tiles/liarbirds.jpg'
import clouds from '../tiles/clouds.jpg'
import kids from '../tiles/kids.jpg'
import fourth from '../tiles/fourth.jpg'
import comatose from '../tiles/comatose.jpg'
import passage from '../tiles/passage.jpg'
import touch from '../tiles/touch.jpg'
import supersynthesis from '../tiles/supersynthesis.jpg'
import worldthatawaits from '../tiles/worldthatawaits.jpg'
import andthehungrywerefed from '../tiles/andthehungrywerefed.jpg'
import { padding } from './CommonStyles.js'

export const Grid_Type = {
    WORKS: 0,
    COMMISSIONS: 1, 
    ARCHIVE: 2
}; 

const styles = {
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    tileContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: '-' + padding.tinySmall
        // backgroundColor: 'black'
    }
}; 

class Grid extends React.Component {
    constructor(props) {
        super(props);

        // Prepare these projects.
        this.workProjects = ''; 
        this.commissionProjects = '';
        this.archiveProjects = '';
        this.newProjects = '';
        this.allocateProjects(); 

        // Filter projects that are not archived. 
        // this.filteredProjects = this.allProjects.filter(p => {
        //     var pKeywords = p['keywords'];
        //     var i = pKeywords.findIndex(k => {
        //         return k === 'Archive'; 
        //     }); 
        //     return i === -1; 
        // }); 

        this.state = {
            tiles: ''
        }
    }

    componentDidMount() {
        this.updateTiles();
    }

    componentDidUpdate(prevProps) {
        // Grid Type has changed - prepare new tiles.
        if (this.props.gridType !== prevProps.gridType) {
            this.updateTiles();
        }
    }

    updateTiles() {
        // Check what props did we get?
        switch(this.props.gridType) {
            case Grid_Type.WORKS: {
                this.allProjects = this.workProjects
                break;
            }

            case Grid_Type.COMMISSIONS: {
                this.allProjects = this.commissionProjects;
                break;
            }

            case Grid_Type.ARCHIVE: {
                this.allProjects = this.archiveProjects;
                break;
            }

            default: {
                this.allProjects = this.workProjects;
                break;
            }
        }

        const newTiles = this.createTiles(this.allProjects); 
        // Update state with new tiles.
        this.setState({
            tiles: newTiles
        });
    }

    render() {
        return (
            <div style={styles.gridContainer}>
                <GridFilterer onKeywordSelected={this.onKeywordSelected.bind(this)} />
                <div style={styles.tileContainer}>
                    {this.state.tiles}
                </div>
            </div>
        );
    }

    onKeywordSelected(years, categories) {
        this.filterGrid(years, categories); 
    }

    filterGrid(years, categories) {
        var curProjects = []; 
        if (years.length > 0) {
            // Filter all projects by year. 
            this.allProjects.forEach(p => {
                var pKeywords = p['keywords']; 
                years.forEach(y => {
                    var i = pKeywords.findIndex(k => {
                        return k===y; 
                    });
    
                    if (i >=0) {
                        curProjects.push(p); 
                    }
                });
            }); 
        } else {
            curProjects = this.allProjects; 
        }

        var catProjects = []; 
        if (categories.length > 0) {
            // Filter curProjects by categories
            curProjects.forEach(p => {
                var pKeywords = p['keywords']; 
                var d = difference(categories, pKeywords); 
                // Some categories were found. 
                if (d.length !== categories.length) {
                    catProjects.push(p); 
                }
            });
        } else {
            catProjects = curProjects; 
        }

        this.setState({
            tiles: this.createTiles(catProjects)
        });
    }

    createTiles(projects) {
        var tiles = []; 
        // Create all the tiles here. 
        for (var i = 0; i < projects.length; i++) {
            var el = <Tile project={projects[i]} key={i} />;
            tiles.push(el); 
        }
        return tiles; 
    }

    allocateProjects() {
        // Push every imported image into this array. 
        this.workProjects = [
            {
                'img': andthehungrywerefed,
                'title': 'And The Hungry Were Fed',
                'keywords': ['2022', 'Interactive', 'Net Art', 'Sound', 'Exhibitions'],
                'link': 'andthehungrywerefed'
            },
            {
                'img': worldthatawaits,
                'title': 'World That Awaits',
                'keywords': ['2022', 'Interactive', 'Net Art', 'Sound', 'Exhibitions'],
                'link': 'worldthatawaits'
            },
            {
                'img': supersynthesis,
                'title': 'Supersynthesis',
                'keywords': ['2022', 'Interactive', 'Net Art', 'Sound', 'Exhibitions'],
                'link': 'supersynthesis'
            },
            {
                'img': momentofenigma,
                'title': 'Moment of Enigma',
                'keywords': ['2020', 'Holon', 'Interactive', 'Exhibitions', 'Net Art'],
                'link': 'momentofenigma'
            },
            {
                'img': passage,
                'title': 'The Lost Passage',
                'keywords': ['2021', 'Interactive', 'Net Art', 'Sound', 'Extended Reality', 'Artificial Life'],
                'link': 'lostpassage'
            },
            {
                'img': kids,
                'title': 'Kid Games',
                'keywords': ['2021', 'Interactive', 'Extended Reality'],
                'link': 'kidgames'
            },
            {
                'img': timekeepers,
                'title': 'Timekeepers',
                'keywords': ['2020', 'Interactive', 'Holon', 'Extended Reality', 'Silkcube'],
                'link': 'timekeepers'
            },
            {
                'img': gravity,
                'title': 'Center of (Varying) Gravity',
                'keywords': ['2020', 'Net Art'],
                'link': 'centerofvaryinggravity'
            },
            {
                'img': janus,
                'title': 'Janus Study',
                'keywords': ['2020', 'Holon', 'Silkcube', 'Extended Reality'],
                'link': 'Janus'
            },
            {
                'img': momimsafe,
                'title': 'MOMIMSAFE',
                'keywords': ['2020', 'Interactive', 'Net Art'],
                'link': 'momimsafe'
            },
            {
                'img': holon,
                'link': 'Holon',
                'title': 'Holons & Holarchy', 
                'keywords': ['2020', 'Holon']
            },
            {
                'img': nest,
                'link': 'Nest',
                'title': 'Nest',
                'keywords': ['2019', 'Interactive', 'Artificial Life', 'Sound']
            },
            {
                'img': figmentsofdesire,
                'link': 'FigmentsOfDesire',
                'title': 'Figments of Desire',
                'keywords': ['2019', 'Artificial Life', 'Sound']
            }, 
            {
                'img': babble,
                'link': 'Babble',
                'title': 'Babble',
                'keywords': ['2019', 'Artificial Life', 'Interactive', 'Sound', 'Net Art'],
            }, 
            {
                'img': figmentsofattention,
                'title': 'Figments of Attention',
                'link': 'FigmentsOfAttention',
                'keywords': ['2019', 'Artificial Life', 'Sound']
            }, 
            {
                'img': groove,
                'link': 'GrooveBody',
                'title': 'Groove Body',
                'keywords': ['2018', 'Blockchain']
            }, 
            {
                'img': cryptokitty,
                'title': 'Post-Crptocollectible',
                'link': 'PostCryptocollectible',
                'keywords': ['2018', 'Blockchain']
            }, 
            {
                'img': generativedecay,
                'link': 'GenerativeDecay',
                'title': 'Generative Decay',
                'keywords': ['2018', 'Ecology']
            }
        ];

        this.commissionProjects = [
            {
                'img': touch,
                'title': 'Embroidered Touch',
                'keywords': ['2021', 'Interactive', 'Net Art', 'Sound', 'Commissions'],
                'link': 'touch'
            },
            {
                'img': liarbirds,
                'title': 'Liarbirds',
                'keywords': ['2020', 'Interactive', 'Extended Reality', 'Net Art', 'Silkcube', 'Sound', 'Artificial Life', 'Commissions', 'Ecology'],
                'link': 'liarbirds'
            },
            {
                'img': clouds,
                'title': 'Biography of a Portrait',
                'keywords': ['2020', 'Interactive', 'Net Art', 'Sound', 'Commissions'],
                'link': 'biography'
            },
            {
                'img': fourth,
                'title': 'Fourth Dimension',
                'keywords': ['2020', 'Interactive', 'Extended Reality'],
                'link': 'fourthdimension'
            },
            {
                'img': encryptionarchive,
                'link': 'EncryptionArchive',
                'title': 'Encryption Archive',
                'keywords': ['2019', 'Interactive', 'Commissions', 'Net Art'],
                'url': 'https://encryptionarchive.net'
            },
            {
                'img': ethereumfarm,
                'title': 'Ethereum Farm',
                'link': 'EthereumFarm',
                'keywords': ['2019', 'Blockchain', 'Commissions', 'Net Art']
            },
            {
                'img': threeecologies,
                'link': 'ThreeEcologies',
                'title': 'Three Ecologies',
                'keywords': ['2019', 'Ecology', 'Commissions']
            }
        ];

        this.archiveProjects = [
            {
                'img': comatose,
                'title': 'Project Comatose',
                'keywords': ['2021', 'Interactive', 'Extended Reality', 'Artificial Life'],
                'url': 'http://amay.openforum.so'
            },
            {
                'img': twodegreeproject,
                'link': 'TwoDegreeProject',
                'title': 'Two Degree Project',
                'keywords': ['2020', 'Ecology', 'Interactive', 'Net Art'],
                'url': 'https://amaykataria.com/Two-Degree-Window-Online/'
            }, 
            {
                'img': bombaybeach,
                'link': 'BombayBeach',
                'title': 'Silent City',
                'keywords': ['2020', 'Ecology', 'Extended Reality']
            },
            {
                'img': bendtherules,
                'title': 'Bend the Rules',
                'link': 'BendTheRules',
                'keywords': ['2019', 'Interactive', 'Net Art']
            },
            {
                'img': speculativebitcoinwallet,
                'link': 'SpeculativeBitcoinWallet',
                'title': 'Speculative Bitcoin Wallet',
                'keywords': ['2018', 'Blockchain', 'Interactive', 'Net Art'],
                'url': 'https://www.speculativebitcoinwallet.com/'
            }, 

            {
                'img': breathfoliage,
                'link': 'BreathFoliage',
                'title': 'Breath Foliage',
                'keywords': ['2018', 'Ecology', 'Interactive']
            },
            {
                'img': parabolicsound,
                'link': 'ParabolicSound',
                'title': 'Parabolic Sound',
                'keywords': ['2017', 'Archive', 'Interactive', 'Sound']
            },
            {
                'img': treeoflife,
                'link': 'TreeOfLife',
                'title': 'Tree of Life',
                'keywords': ['2017', 'Archive', 'Interactive', 'Sound']
            },
            {
                'img': sonicnegotiation,
                'link': 'SonicNegotiations',
                'title': 'Sonic Negotiations',
                'keywords': ['2017', 'Archive', 'Interactive', 'Sound']
            },
            {
                'img': skype,
                'link': 'Skype',
                'title': 'Skype',
                'keywords': ['2017', 'Archive', 'Interactive']
            },
            {
                'img': virtues,
                'link': 'Virtues',
                'title': 'Virtues',
                'keywords': ['2017', 'Archive', 'Interactive', 'Sound']
            },
            {
                'img': magicmic,
                'link': 'MagicMic',
                'title': 'Magic Mic',
                'keywords': ['2017', 'Archive', 'Interactive']
            },
            {
                'img': earthlens,
                'link': 'EarthLens',
                'title': 'Earth Lens',
                'keywords': ['2017', 'Archive', 'Interactive']
            }
        ];
    }
}

export default Radium(Grid);