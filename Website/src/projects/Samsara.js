import React from "react";
import Radium from "radium";
import Header from "../components/Header.js";
// import CustomLink from '../components/CustomLink.js'
import { commonWorkStyles, padding } from "../components/CommonStyles.js";
import left from "../images/Samsara/0.jpg";
import right from "../images/Samsara/1.jpg";
import second from "../images/Samsara/2.jpg";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },

  content: {
    display: "flex",
    flexDirection: "column",
  },

  additionPadding: {
    marginTop: padding.verySmall,
  },
};

const bodyA = (
  <span>
    <span style={commonWorkStyles.italics}>Saṃsāra</span> questions our
    technological faith by revealing the algorithmic systems designed to trap us
    in endless cycles of creation and consumption. It symbolizes the digital
    temples we've built around technologies we've learned to worship but never
    to understand. <br />
    <br />
    The project is inspired by the nine genesis paintings by Michaelangelo in
    the Sistine Chapel vault. His narrative of creation, fall, and aftermath
    told through monumental architecture became an inspiration to create a new
    story: humanity's relationship with nature and technology across past,
    present, and a speculative future.
    <br />
    <br />
    Nine video panels tell a story of “separation” - a movement from the past to
    a speculative future, a disembodiment of humanity from its surroundings and
    from itself. Nine is spiritually significant across traditions — nine months
    of gestation, nine circles, nine virtues. It represents completion before
    renewal, the perfect number for cycles. The architecture housing them fuses
    server racks with Corinthian columns revealing the digital infrastructure
    behind our virtual existence.
    <br />
    <br />
    Two forms are created for this work.
    <br />
    <span style={commonWorkStyles.italics}> Video Facade</span> is A 40-foot
    wide, custom designed, site specific video piece with all nine panels in
    parallel, contained within a living architecture displayed as a large-scale
    public art project.
    <br />
    <br />
    <span style={commonWorkStyles.italics}> Video Installation</span> is nine
    sequential panels in an architectural frame, where parallel narratives
    becoming one linear journey in time.
  </span>
);

const bodyB = (
  <span>
    The Nine Panels are Emergence → Integration → Awakening → Expansion →
    Interconnection → Immersion → Reckoning → Collapse → Renewal
  </span>
);
class Samsara extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const containerStyle = [
      commonWorkStyles.vimeoContainer,
      commonWorkStyles.imgContainer,
    ];

    const squareFrameStyle = [
      commonWorkStyles.vimeoContainerThreeSquare,
      commonWorkStyles.threeImages,
    ];

    const mainVideo = (videoId, style) => {
      const videoSrc = "https://player.vimeo.com/video/" + videoId;

      return (
        <iframe
          title="Samsara"
          src={videoSrc}
          width="640"
          height="360"
          frameborder="0"
          style={style}
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowfullscreen
        ></iframe>
      );
    };

    const squareVideo = (videoID, style) => {
      const videoSrc =
        "https://player.vimeo.com/video/" + videoID + "?background=false";
      return (
        <iframe
          title="video"
          src={videoSrc}
          style={style}
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowfullscreen
        ></iframe>
      );
    };

    return (
      <div style={styles.container}>
        <Header title="Samsara" />
        <div style={styles.content}>
          <div style={commonWorkStyles.body}>{bodyA}</div>
          <div style={commonWorkStyles.imgContainer}>
            <img
              style={commonWorkStyles.oneImage}
              alt={"second"}
              src={second}
            />
          </div>
          <div style={[commonWorkStyles.imgContainer]}>
            <div style={commonWorkStyles.multiImageContainer}>
              <img style={commonWorkStyles.twoImages} alt={"Left"} src={left} />
              <img
                style={commonWorkStyles.twoImages}
                alt={"Right"}
                src={right}
              />
            </div>
          </div>
          <div style={containerStyle}>
            {mainVideo("1150568543", commonWorkStyles.vimeoFrame)}
          </div>
          <div style={[commonWorkStyles.imgContainer]}>
            <div style={commonWorkStyles.body}>{bodyB}</div>
          </div>
          <div style={[commonWorkStyles.imgContainer]}>
            <div style={commonWorkStyles.multiImageContainer}>
              <div style={squareFrameStyle}>
                {squareVideo("1150573959", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150578844", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150578873", commonWorkStyles.vimeoFrame)}
              </div>
            </div>
          </div>
          <div style={[commonWorkStyles.imgContainer]}>
            <div style={commonWorkStyles.multiImageContainer}>
              <div style={squareFrameStyle}>
                {squareVideo("1150578901", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150578929", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150578958", commonWorkStyles.vimeoFrame)}
              </div>
            </div>
          </div>
          <div style={[commonWorkStyles.imgContainer]}>
            <div style={commonWorkStyles.multiImageContainer}>
              <div style={squareFrameStyle}>
                {squareVideo("1150578985", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150579018", commonWorkStyles.vimeoFrame)}
              </div>
              <div style={squareFrameStyle}>
                {squareVideo("1150579042", commonWorkStyles.vimeoFrame)}
              </div>
            </div>
          </div>
          <div style={containerStyle}>
            {mainVideo("1150572872", commonWorkStyles.vimeoFrame)}
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Samsara);
