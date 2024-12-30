import React, { useState, useRef } from "react"
import CustomButton from "./CustomButton";
import SplineScene, { SceneType } from "./SplineScene";
import Loader from './Loader'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

type IntroProps = {
    onEnter: () => void
}
export default function Intro(props: IntroProps) {
    const [spinning, setSpinning] = useState(true);
    const [show, setShow] = useState(true);   
    const buttonRef = useRef<HTMLButtonElement>(null);
    let t = useRef<GSAPTween>();

    // Store the animation in a context.
    const { contextSafe } = useGSAP(() => {
        t.current = gsap.to(buttonRef.current, {rotationZ: -5, scale: 1.25, duration: 0.5}).pause();
        gsap.fromTo(buttonRef.current, {opacity: 0}, {opacity: 1, duration: 0.5, delay:4});
    }, []);
    
    const onLoadComplete = () => {
        setSpinning(false);
    }

    const onClickEnter = () => {
        props.onEnter();
        setShow(!show);
        contextSafe(() => t.current?.reverse())
    }
    
    const intro = <SplineScene sceneType={SceneType.Intro} onLoadComplete={onLoadComplete} />;
    return(
        <div className={`${show ? "visible" : "collapse"} z-40 fixed flex justify-center left-0 right-0 top-0 bottom-0 w-screen h-[100dvh] bg-primary`}>
            {spinning ? <Loader customStyles="absolute w-full top-0 left-0 bottom-0 right-0"/> : <></> }
            <CustomButton 
                ref={buttonRef}
                onMouseEnter={contextSafe(() => t.current?.play())}
                onMouseLeave={contextSafe(() => t.current?.reverse())}
                onClick={onClickEnter} 
                title="Enter" 
                customStyles={`${(spinning || !show) ? "invisible" :  "visible"} fixed bottom-20 font-bold text-base p-1 w-24 xs:p-2 xs:mt-3 lg:text-lg lg:mt-4 lg:w-32"`}
            />
            {intro}
        </div>
    );
}

