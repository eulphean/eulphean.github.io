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
    const industry= useRef<HTMLAnchorElement>(null);
    const media = useRef<HTMLAnchorElement>(null);
    const t1 = useRef<GSAPTween[]>([]);

    // Refs (Icons)
    const lin = useRef<HTMLAnchorElement>(null);
    const insta = useRef<HTMLAnchorElement>(null);
    const git = useRef<HTMLAnchorElement>(null);
    const t2 = useRef<GSAPTween[]>([]);

    // Store the animation in a context.
    const { contextSafe } = useGSAP(() => {
        [name.current, industry.current, media.current].forEach(c => {
            let t = gsap.to(c, {color: "red", rotationZ: -5, scale: 1.25, duration: 0.5}).pause();
            t1.current.push(t);            
        });

        [lin.current, git.current, insta.current].forEach(c => {
            let t = gsap.to(c, {rotationZ: -5, scale: 1.5, duration: 0.5}).pause();
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

    const navbarContainer = "flex items-center w-full text-secondaryBright text-base p-4 lg:text-lg xl:p-8 xl:text-xl 2xl:p-12";
    
    // Titles
    const titleContainerOpen = "flex absolute rounded-lg justify-between p-1.5 w-56  border-2 top-0 left-0 z-20 flex-row bg-primary border-secondary"
    const titleContainer = `${open ? `${titleContainerOpen}` : "hidden"} sm:block sm:bg-transparent`;
    const titles = 'flex w-full flex-col sm:flex-row';
    
    // Icons
    const iconsContainer = "flex flex-row w-32 justify-between lg:w-40";
    const icon = "w-8 h-8 md:w-9 md:h-9";
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
                                href="https://works.amaykataria.com"
                                target="_blank"
                                rel="noreferer"
                                onMouseEnter={contextSafe(() => t1.current[0]?.play())}
                                onMouseLeave={contextSafe(() => t1.current[0]?.reverse())}
                                onClick={contextSafe(() => t1.current[0]?.reverse())}
                                className='mr-4'
                            >
                            Projects</a>
                            {/* <a 
                                ref={industry} 
                                href="https://heyzine.com/flip-book/fa5164ac35.html"
                                target="_blank"
                                rel="noreferer"
                                onMouseEnter={contextSafe(() => t1.current[1]?.play())}
                                onMouseLeave={contextSafe(() => t1.current[1]?.reverse())}
                                onClick={contextSafe(() => t1.current[1]?.reverse())}
                                className='mr-4'
                            >Industry Portfolio</a>                         */}
                            <a 
                                ref={media} 
                                href="https://heyzine.com/flip-book/cdcf1de56c.html"
                                target="_blank"
                                rel="noreferer"
                                onMouseEnter={contextSafe(() => t1.current[2]?.play())}
                                onMouseLeave={contextSafe(() => t1.current[2]?.reverse())}
                                onClick={contextSafe(() => t1.current[2]?.reverse())}
                                className='mr-4'
                            >Media Arts Portfolio</a>
                        </div>
                    </div>
                    <div className={iconsContainer}>
                        <a
                            ref={lin}
                            href="https://linkedin.com/in/amaykataria"
                            target="_blank"
                            rel="noreferer"
                            onMouseEnter={contextSafe(() => t2.current[0]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[0]?.reverse())}
                            onClick={contextSafe(() => t2.current[0]?.reverse())}
                        >
                            <Image
                                priority
                                className={icon}
                                src={linkedin}
                                alt="Check out my LinkedIn profile"
                            />
                        </a>
                        <a
                            ref={git}
                            href="https://github.com/eulphean"
                            target="_blank"
                            rel="noreferer"
                            onMouseEnter={contextSafe(() => t2.current[1]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[1]?.reverse())}
                            onClick={contextSafe(() => t2.current[1]?.reverse())}
                        >
                            <Image
                                priority
                                className={icon}
                                src={github}
                                alt="Check out my Github profile"
                            />
                        </a>
                        <a
                            ref={insta}
                            href="https://instagram.com/amay.kataria"
                            target="_blank"
                            rel="noreferer"
                            onMouseEnter={contextSafe(() => t2.current[2]?.play())}
                            onMouseLeave={contextSafe(() => t2.current[2]?.reverse())}
                            onClick={contextSafe(() => t2.current[2]?.reverse())}
                        >
                            <Image
                                priority
                                className={icon}
                                src={ig}
                                alt="Check out my Instagram profile"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
        
    )
}

