import Headshot from "./Headshot"

const bodyA = <span>My creative practice investigates the widening chasm between technological acceleration and human evolution. While technology progresses exponentially, our biological and psychological evolution maintains its natural pace. Doesn’t this misalignment manifest in our lives through digital fatigue, social alienation, and cognitive overload? Perhaps, these new advancements have put an unprecedented pressure on humanity to adapt at an unnatural speed, while forcing an evolution that stands in stark contrast to the gradual process Darwin observed in his studies. Therefore, through my art practice, I’m exploring alternative paths that critique this divide, which is gradually corroding our human condition.</span>
const bodyB = <span>As a new-media artist working with industrial tools like 3D printing, computer graphics, and software engineering, I don't seek to moralize technology. Instead, I want to repurpose these digital mediums into encounters for human connection and self-discovery. My creative interventions attempt to create contemplative spaces where audiences can step back from the deluge, reconnect with their essential humanity, and discover meaningful connections with others. Within these works, participants may glimpse deeper truths about themselves and their place in our rapidly evolving world.</span>

export default function Statement (props: AboutProps) {
    return (
        <div className="flex flex-col flex-start">
            <div>
                {bodyA}<br /><br />
                {bodyB}
            </div>
            <div className="flex flex-row flex-start mt-4 items-center">
                <Headshot 
                    src="/moonshot.png"
                    style=""
                    width={150}
                    height={150}
                />
                <div className="flex flex-col ml-4 italic">
                    <div>Amay Kataria</div>
                    <div>December, 2024</div>
                </div>
            </div>
        </div>

      )
}