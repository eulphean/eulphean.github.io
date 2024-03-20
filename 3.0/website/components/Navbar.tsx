import Image from 'next/image'
import { useState } from 'react'
import linkedin from '../public/svg/in.svg'
import github from '../public/svg/github.svg'
import ig from '../public/svg/ig.svg'
import hamburger from '../public/svg/hamburger.svg'
import close from '../public/svg/close.svg'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeIcon = (
        <Image 
            priority
            className="w-5 h-5 order-last sm:hidden"
            src={close}
            alt={"Open Menu"}
            onClick={() => setOpen(!open)}
        />
    ); 

    const hamburgerIcon = (
        <Image 
            priority
            className='block sm:hidden'
            src={hamburger}
            alt={"Open Menu"}
            onClick={() => setOpen(!open)}
        />
    );

    return (
        <>
            <div className="flex w-full absolute font-istok justify-between font-normal text-lg">
                {!open ? hamburgerIcon : <></>}
                <div className={`${open ? "flex justify-between p-1.5 w-56 absolute border-2 top-0 left-0 z-20 flex-row bg-primary border-secondary" : "hidden"} sm:block sm:bg-transparent`}>
                    {open ? closeIcon : <></>}
                    <div className="grid-cols-1 sm:grid sm:grid-cols-3">
                        <div className='mr-4'>Amay Kataria 3.0</div>
                        <div className='mr-4'>Industry Portfolio</div>
                        <div className='mr-4'>Media Arts Portfolio</div>
                    </div>
                </div>
                <div className="flex absolute right-0 -top-0.5">
                    <Image
                        priority
                        className="w-8 h-8"
                        src={linkedin}
                        alt="Check out my LinkedIn profile"
                    />
                    <Image
                        priority
                        className='w-8 h-8'
                        src={github}
                        alt="Check out my Github profile"
                    />
                    <Image
                        priority
                        className='w-8 h-8'
                        src={ig}
                        alt="Check out my Instagram profile"
                    />
                </div>
            </div>
        </>
        
    )
}

