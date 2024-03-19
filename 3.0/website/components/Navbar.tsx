import linkedin from '../public/svg/in.svg'
import github from '../public/svg/github.svg'
import ig from '../public/svg/in.svg'

import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="flex justify-between font-bold text-lg">
            <div className="flex flex-row items-center font-istok">
                <div className='mr-4'>Amay Kataria 3.0</div>
                <div className='mr-4'>Industry Portfolio</div>
                <div className='mr-4'>Media Arts Portfolio</div>
            </div>
            <div className="flex">
                <Image
                    priority
                    src={linkedin}
                    alt="Check out my LinkedIn profile"
                />
                <Image
                    priority
                    src={github}
                    alt="Check out my Github profile"
                />
                <Image
                    priority
                    src={ig}
                    alt="Check out my Instagram profile"
                />
            </div>
        </div>
    )
}