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
// import unnamed from '../tiles/unnamed.jpg'
import bendtherules from '../tiles/bendtherules.jpg'
import momimsafe from '../tiles/momimsafe.jpg'
import janus from '../tiles/janus.jpg'
import gravity from '../tiles/gravity.jpg'
import momentofenigma from '../tiles/momentofenigma.jpg'
import timekeepers from '../tiles/timekeepers.jpg'
import liarbirds from '../tiles/liarbirds.jpg'

const styles = {
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
}; 

class Grid extends React.Component {
    constructor(props) {
        super(props);
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
            tiles: this.createTiles(this.allProjects)
        }
    }

    render() {
        return (
            <div style={styles.gridContainer}>
                <GridFilterer onKeywordSelected={this.onKeywordSelected.bind(this)} />
                {this.state.tiles}
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
        this.allProjects = [
            {
                'img': momentofenigma,
                'title': 'Moment of Enigma',
                'keywords': ['2020', 'Holon', 'Interactive', 'Exhibitions', 'Net Art', 'Silkcube'],
                'link': 'momentofenigma'
            },
            {
                'img': liarbirds,
                'title': 'Liarbirds',
                'keywords': ['2020', 'Interactive', 'Extended Reality', 'Net Art', 'Silkcube', 'Sound', 'Artificial Life', 'Commissions', 'Ecology'],
                'url': 'https://liarbirds.art'
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
                'url': 'https://amaykataria.com/Babble-Wall/'
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
                'img': breathfoliage,
                'link': 'BreathFoliage',
                'title': 'Breath Foliage',
                'keywords': ['2018', 'Ecology', 'Interactive']
            },
            {
                'img': generativedecay,
                'link': 'GenerativeDecay',
                'title': 'Generative Decay',
                'keywords': ['2018', 'Ecology']
            },
            {
                'img': twodegreeproject,
                'link': 'TwoDegreeProject',
                'title': 'Two Degree Project',
                'keywords': ['2020', 'Ecology', 'Interactive', 'Net Art'],
                'url': 'https://amaykataria.com/twodegreewindow/'
            }, 
            {
                'img': bombaybeach,
                'link': 'BombayBeach',
                'title': 'Silent City',
                'keywords': ['2020', 'Ecology', 'Extended Reality']
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
            // {
            //     'img': unnamed,
            //     'link': 'Unnamed',
            //     'keywords': ['2017', 'Archive', 'Interactive']
            // },
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
            // {
            //     'img': virtues,
            //     'link': 'Virtues',
            //     'title': 'Virtues',
            //     'keywords': ['2017', 'Archive', 'Interactive', 'Sound']
            // },
            // {
            //     'img': skype,
            //     'link': 'Skype',
            //     'title': 'Skype',
            //     'keywords': ['2017', 'Archive', 'Interactive']
            // },
            // {
            //     'img': magicmic,
            //     'link': 'MagicMic',
            //     'title': 'Magic Mic',
            //     'keywords': ['2017', 'Archive', 'Interactive']
            // },
            // {
            //     'img': earthlens,
            //     'link': 'EarthLens',
            //     'title': 'Earth Lens',
            //     'keywords': ['2017', 'Archive', 'Interactive']
            // }
        ];
    }
}

export default Radium(Grid);