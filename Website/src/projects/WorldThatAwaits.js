import React from 'react';
import Radium from 'radium'
import Header from '../components/Header.js'
// import CustomLink from '../components/CustomLink.js'
import {commonWorkStyles, padding} from '../components/CommonStyles.js'
import brochureA from '../images/WorldThatAwaits/1.jpg'
import brochureB from '../images/WorldThatAwaits/2.jpg'
import posterA from '../images/WorldThatAwaits/3.jpg'
import posterB from '../images/WorldThatAwaits/gif.gif'
import posterC from '../images/WorldThatAwaits/4.jpg'
import center from '../images/WorldThatAwaits/5.jpg'
import imageA from '../images/WorldThatAwaits/14.jpg'
import imageB from '../images/WorldThatAwaits/7.jpg'
import imageC from '../images/WorldThatAwaits/8.jpg'
import imageD from '../images/WorldThatAwaits/9.jpg'
import imageE from '../images/WorldThatAwaits/10.jpg'
import imageF from '../images/WorldThatAwaits/11.jpg'
import lastLeft from '../images/WorldThatAwaits/12.jpg'
import lastRight from '../images/WorldThatAwaits/13.jpg'

const styles={
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    },

    content: {
      display: 'flex',
      flexDirection: 'column'
    },

    additionPadding: {
        marginTop: padding.verySmall
    },
};


const bodyA=<span><span style={commonWorkStyles.italics}>World that Awaits</span> is a curatorial project developed by Amay Kataria, which includes work by Chicago-based artists Kayla Anderson, Scott Kemp, Sofia Diaz Fernandez, Cody Norman, Jungwoo Lee, and FÁTIMA.<span style={commonWorkStyles.italics}>World that Awaits</span> brings a compelling collection of new and existing objects that invite visitors to reflect upon a world that deviates from its assigned categories, a world that spills beyond meanings and attributes, a world that rejects trajectories ... a world that simply awaits. With a range of multimedia works rooted in contemporary and traditional practices, the exhibition glimpses upon the horizon of the unknown that unifies our existence with this world.</span>
class WorldThatAwaits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div style={styles.container}>
            <Header title="World That Awaits" />
            <div style={styles.content}>
                <div style={commonWorkStyles.body}>
                    {bodyA}
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.twoImages} alt={'Brochure A'} src={brochureA}/>
                        <img style={commonWorkStyles.twoImages} alt={'Brochure B'} src={brochureB}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.threeImages} alt={'Poster A'} src={posterA}/>
                        <img style={commonWorkStyles.threeImages} alt={'Poster B'} src={posterB}/>
                        <img style={commonWorkStyles.threeImages} alt={'Poster C'} src={posterC}/>
                    </div>
                </div>
                <div style={commonWorkStyles.imgContainer}>
                    <img style={commonWorkStyles.oneImage} alt={'center'} src={center}/>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.threeImages} alt={'A'} src={imageA}/>
                        <img style={commonWorkStyles.threeImages} alt={'B'} src={imageB}/>
                        <img style={commonWorkStyles.threeImages} alt={'C'} src={imageC}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                        <img style={commonWorkStyles.threeImages} alt={'D'} src={imageD}/>
                        <img style={commonWorkStyles.threeImages} alt={'E'} src={imageE}/>
                        <img style={commonWorkStyles.threeImages} alt={'F'} src={imageF}/>
                    </div>
                </div>
                <div style={[commonWorkStyles.imgContainer]}>
                    <div style={commonWorkStyles.multiImageContainer}>
                         <img style={commonWorkStyles.twoImages} alt={'Last left'} src={lastLeft}/>
                         <img style={commonWorkStyles.twoImages} alt={'Last right'} src={lastRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Radium(WorldThatAwaits);