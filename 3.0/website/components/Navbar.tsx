import Image from 'next/image'
import React, { useRef, useState } from 'react'
import linkedin from '../public/svg/in.svg'
import github from '../public/svg/github.svg'
import ig from '../public/svg/ig.svg'
import hamburger from '../public/svg/hamburger.svg'
import close from '../public/svg/close.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const name = useRef<HTMLDivElement>(null);
    const industry= useRef<HTMLDivElement>(null);
    const media = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const t1 = useRef<GSAPTween[]>([]);

    // Store the animation.
    const { contextSafe } = useGSAP(() => {
        [name.current, industry.current, media.current].forEach(c => {
            let t = gsap.to(c, {color: "red", rotationZ: -5, duration: 0.5}).pause();
            t1.current.push(t);            
        });
    }, {scope: container});

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

    const navbarContainer = "flex w-full absolute font-istok justify-between font-normal text-secondaryBright text-base md:text-xl";
    
    // Titles
    const titleContainerOpen = "flex rounded-lg justify-between p-1.5 w-56 absolute border-2 top-0 left-0 z-20 flex-row bg-primary border-secondary"
    const titleContainer = `${open ? `${titleContainerOpen}` : "hidden"} sm:block sm:bg-transparent`;
    const titles = 'grid-cols-1 sm:grid sm:grid-cols-3 ';
    
    // Icones
    const iconsContainer = "flex justify-between absolute right-0 -top-0.5 lg:w-32";
    return (
        <>
            <div ref={container} className={navbarContainer}>
                {!open ? hamburgerIcon : <></>}
                <div className={titleContainer}>
                    {open ? closeIcon : <></>}
                    <div className={titles}>
                        <div 
                            ref={name} 
                            onMouseEnter={contextSafe(() => t1.current[0]?.play())}
                            onMouseLeave={contextSafe(() => t1.current[0]?.reverse())}
                            className='mr-4'
                        >
                        Amay Kataria 3.0</div>
                        <div 
                            ref={industry} 
                            className='mr-4'
                            onMouseEnter={contextSafe(() => t1.current[1]?.play())}
                            onMouseLeave={contextSafe(() => t1.current[1]?.reverse())}
                        >
                            Industry Portfolio
                        </div>
                        <div ref={media} 
                            onMouseEnter={contextSafe(() => t1.current[2]?.play())}
                            onMouseLeave={contextSafe(() => t1.current[2]?.reverse())}
                            className='mr-4'>Media Arts Portfolio</div>
                    </div>
                </div>
                <div className={iconsContainer}>
                    <Image
                        priority
                        className="w-8 h-8 md:w-9 md:h-9"
                        src={linkedin}
                        alt="Check out my LinkedIn profile"
                    />
                    <Image
                        priority
                        className='w-8 h-8 md:w-9 md:h-9'
                        src={github}
                        alt="Check out my Github profile"
                    />
                    <Image
                        priority
                        className='w-8 h-8 md:w-9 md:h-9'
                        src={ig}
                        alt="Check out my Instagram profile"
                    />
                </div>
            </div>
        </>
        
    )
}

