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

    // Refs (Titles)
    const name = useRef<HTMLAnchorElement>(null);
    const industry= useRef<HTMLDivElement>(null);
    const media = useRef<HTMLDivElement>(null);
    const t1 = useRef<GSAPTween[]>([]);

    // Refs (Icons)
    const lin = useRef<HTMLImageElement>(null);
    const insta = useRef<HTMLImageElement>(null);
    const git = useRef<HTMLImageElement>(null);
    const t2 = useRef<GSAPTween[]>([]);

    // Store the animation in a context.
    const { contextSafe } = useGSAP(() => {
        [name.current, industry.current, media.current].forEach(c => {
            let t = gsap.to(c, {color: "red", rotationZ: -5, scale: 1.25, duration: 0.5}).pause();
            t1.current.push(t);            
        });

        [lin.current, git.current, insta.current].forEach(c => {
            let t = gsap.to(c, {rotationZ: -5, scale: 1.24, duration: 0.5}).pause();
            t2.current.push(t);
        });
    }, []);

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
            className={`${open ? "collapse sm:hidden" : "visible sm:hidden"}`}
            src={hamburger}
            alt={"Open Menu"}
            onClick={() => setOpen(!open)}
        />
    );

    const navbarContainer = "flex items-center w-full text-secondaryBright text-base p-4 lg:text-lg xl:p-8 xl:text-xl 2xl:p-12 2xl:text-2xl";
    
    // Titles
    const titleContainerOpen = "flex absolute rounded-lg justify-between p-1.5 w-56  border-2 top-0 left-0 z-20 flex-row bg-primary border-secondary"
    const titleContainer = `${open ? `${titleContainerOpen}` : "hidden"} sm:block sm:bg-transparent`;
    const titles = 'grid-cols-1 sm:grid sm:grid-cols-3 items-center';
    
    // Icons
    const iconsContainer = "flex flex-row w-32 justify-between lg:w-40";
    const icon = "w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11";
    return (
        <>
            <div className={navbarContainer}>
                <div className='flex relative w-full justify-between items-center'>
                    {hamburgerIcon}
                    <div className={titleContainer}>
                        {open ? closeIcon : <></>}
                        <div className={titles}>
                            <a 
                                ref={name} 
                                href="https://amaykataria.com"
                                target="_blank"
                                rel="noreferer"
                                onMouseEnter={contextSafe(() => t1.current[0]?.play())}
                                onMouseLeave={contextSafe(() => t1.current[0]?.reverse())}
                                className='mr-4'
                            >
                            Amay Kataria 3.0</a>
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
                            ref={lin}
                            priority
                            className={icon}
                            onMouseEnter={contextSafe(() => t2.current[0]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[0]?.reverse())}
                            src={linkedin}
                            alt="Check out my LinkedIn profile"
                        />
                        <Image
                            ref={git}
                            priority
                            className={icon}
                            onMouseEnter={contextSafe(() => t2.current[1]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[1]?.reverse())}
                            src={github}
                            alt="Check out my Github profile"
                        />
                        <Image
                            ref={insta}
                            priority
                            className={icon}
                            onMouseEnter={contextSafe(() => t2.current[2]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[2]?.reverse())}
                            src={ig}
                            alt="Check out my Instagram profile"
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

