import Image from 'next/image'
import React, { useRef, useState } from 'react'
import linkedin from '../public/svg/in.svg'
import github from '../public/svg/github.svg'
import ig from '../public/svg/ig.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type MenuProps = {
    onAboutClick: () => void;
    onStatementClick: () => void;
}

export default function Menu(props: MenuProps) {
    // Refs (Titles)
    const bio = useRef<HTMLDivElement>(null);
    const statement= useRef<HTMLDivElement>(null);
    const works = useRef<HTMLAnchorElement>(null);
    const cv = useRef<HTMLAnchorElement>(null);
    const t1 = useRef<GSAPTween[]>([]);

    // Refs (Icons)
    const lin = useRef<HTMLAnchorElement>(null);
    const insta = useRef<HTMLAnchorElement>(null);
    const git = useRef<HTMLAnchorElement>(null);
    const t2 = useRef<GSAPTween[]>([]);

    // Store the animation in a context.
    const { contextSafe } = useGSAP(() => {
        [bio.current, statement.current, works.current, cv.current].forEach(c => {
            let t = gsap.to(c, {color: "red", rotationZ: -5, scale: 1.25, duration: 0.5}).pause();
            t1.current.push(t);            
        });

        [lin.current, git.current, insta.current].forEach(c => {
            let t = gsap.to(c, {backgroundColor: "red", rotationZ: -5, scale: 1.5, duration: 0.5}).pause();
            t2.current.push(t);
        });
    }, []);


    const navbarContainer = "overflow-hidden flex flex-col items-center justify-between h-60 w-full";
    const navbarText = "text-secondaryBright text-xl xl:text-2xl font-semibold cursor-pointer"
    const navbarStyles = navbarContainer + navbarText
    
    // Titles
    const titles = 'flex w-full flex-col sm:flex-row';
    
    // Icons
    const iconsContainer = "flex flex-row w-32 justify-between lg:w-40";
    const icon = "w-8 h-8 md:w-9 md:h-9";
    
    return (
        <div className={navbarStyles}>
            <div
                ref={bio}                
                onMouseEnter={contextSafe(() => t1.current[0]?.play())}
                onMouseLeave={contextSafe(() => t1.current[0]?.reverse())}
                onClick={() => {
                        contextSafe(() => t1.current[0]?.reverse())
                        props.onAboutClick()
                    }
                }
            >
                BIO
            </div>
            <div
                ref={statement}
                onMouseEnter={contextSafe(() => t1.current[1]?.play())}
                onMouseLeave={contextSafe(() => t1.current[1]?.reverse())}
                onClick={() => {
                        contextSafe(() => t1.current[1]?.reverse())
                        props.onStatementClick()
                    }
                }
            >
                STATEMENT
            </div>
            <a 
                ref={works} 
                href="https://works.amaykataria.com"
                target="_blank"
                rel="noreferer"
                onMouseEnter={contextSafe(() => t1.current[2]?.play())}
                onMouseLeave={contextSafe(() => t1.current[2]?.reverse())}
                onClick={contextSafe(() => t1.current[2]?.reverse())}
            >
                WORKS
            </a>
            <a 
                ref={cv} 
                href="Amay_Kataria_CV_December_2024.pdf"
                target="_blank"
                rel="noreferer"
                onMouseEnter={contextSafe(() => t1.current[3]?.play())}
                onMouseLeave={contextSafe(() => t1.current[3]?.reverse())}
                onClick={contextSafe(() => t1.current[3]?.reverse())}
            >
                CV
            </a>
            {/* <div
                ref={cv}
                onMouseEnter={contextSafe(() => t1.current[3]?.play())}
                onMouseLeave={contextSafe(() => t1.current[3]?.reverse())}
                onClick={() => {
                        contextSafe(() => t1.current[3]?.reverse())
                        fileDownload();
                    }
                }
            >
                CV
            </div> */}
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
    )
}

