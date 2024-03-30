import hammer from '../public/svg/hammer.svg'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { RefObject, useRef } from 'react'
import gsap from 'gsap'

type BuildingProps = {
    startAnimation: boolean
}

export default function Building (props: BuildingProps) {
    const progressRef = useRef<HTMLDivElement>(null);
    const buildingRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const hammerOuterRef = useRef<HTMLImageElement>(null);
    const hammerInnerRef = useRef<HTMLImageElement>(null);

    const {contextSafe} = useGSAP(() => {
        // Progress bar animation. 
        const t1 = gsap.to(progressRef.current, {startAt: {width: 0}, width: '33.33%', duration: 2});

        // // Once it completes, start the building animation.
        t1.eventCallback('onComplete', () => {
            // Hammer animation
            gsap.to([hammerOuterRef.current, hammerInnerRef.current], {rotationZ: 35, stagger: 1, ease: 'bounce.out', repeat: -1, yoyoEase: true, duration: 1.5});

            // Building animation
            const tl = gsap.timeline({yoyoEase: true, repeat: -1, delay: 0});        
            tl.repeatDelay(1.5);
            tl.fromTo(buildingRef.current, {x: 0, opacity: 1}, {x: -200, opacity: 0, duration: 3, ease: 'bounce.in'});
            tl.fromTo(nameRef.current, {opacity: 0, x: 200}, {x:0, opacity: 1, duration: 4}, "-=50%");
        });
    }, [props.startAnimation]);

    const container="flex flex-col items-center text-secondaryBright w-full -mt-2 md:mt-0"
    const commonTitleStyles = "font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
    const titleA=commonTitleStyles + " absolute flex flex-row";
    const titleB=commonTitleStyles + " absolute opacity-0";
    const subtitle="text-base lg:text-lg xl:text-xl 2xl:text-2xl";
    const hammerIcon = (styles: string, refObj: RefObject<HTMLImageElement>) => {
        return (
            <Image 
                ref={refObj}
                priority
                className={styles}
                src={hammer}
                alt={"building"}
            />
        )
    };

    return (
        <>
            <div className={container}>
                <div className="flex flex-row relative justify-center w-full mb-8">
                    <div ref={buildingRef} className={titleA}>
                        {hammerIcon("inline w-6 h-6 mt-0.5 mx-2 lg:w-10 lg:h-10 2xl:w-12 h-12 2xl:mt-2", hammerOuterRef)}
                        <div>BUILDING</div>
                    </div>
                    <div ref={nameRef} className={titleB}>Amay Kataria 3.0</div>
                </div>
                <div className='flex flex-col justify-center items-center gap-0 mt-1 md:mt-3 lg:mt-5 xl:mt-7 2xl:mt-9'>
                    <div className={subtitle}>Currently <span>{hammerIcon("inline w-4 h-4 mb-1 mx-1 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7", hammerInnerRef)}</span> the next iteration of my website.</div>
                    <div className="flex rounded-lg border border-bgSecondary bg-bgSecondaryLight items-center relative h-4 w-full xs:w-80 lg:w-88 lg:mt-2 lg:h-7 lg:rounded-xl 2xl:w-110">
                        <div ref={progressRef} className="absolute left-0.5 h-3 rounded-lg bg-primaryBright lg:h-5"/>
                    </div>
                </div>
            </div>
        </>
    )
}