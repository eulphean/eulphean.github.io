import Headshot from './Headshot'

const bodyA = <span>Amay Kataria (b. 1990) is a Chicago-based new media artist who uses video, sculpture, installation, and custom software to explore the tension between human existence and our fast-paced digital world. His work examines aspects of contemporary life—isolation versus connection, the impact of digital tools on human relationships, and a search for the present moment in an accelerating culture. Through his practice, he invites audiences to slow down and reflect on their own experiences of time, memory, and social bonds.</span>
const bodyB = <span>Kataria recently participated in "What is Seen and Unseen" (2024) at the South Asia Institute in Chicago, curated by Shelly Bahl. His works have been widely exhibited across the world, including the Vector Festival, Toronto; Ars Electronica, Linz; Piksel Festival, Bergen; Electromuseum, Moscow; Stasjon K, Sandnes; Art Center Nabi, Seoul; and Marina Barage, Singapore. </span>
const bodyC = <span>He participated in the 20th Bridge Program (2023) at Hyde Park Art Center in Chicago, and has completed residencies with institutions like Art Center Nabi, AIR Sandnes, and Mana Contemporary. Kataria received his Master of Fine Arts from the School of the Art Institute of Chicago and also has a bachelors in Computer Engineering from Virginia Tech. </span>

export default function About () {
    return (
        <Headshot 
            src="/headshot.jpg"
            style="float-none block mx-auto mb-4 md:mr-4 md:mb-0 md:float-left"
            width={300}
            height={300}
        >
            {bodyA}<br /><br />
            {bodyB}<br /><br />
            {bodyC}
        </Headshot>
      )
}