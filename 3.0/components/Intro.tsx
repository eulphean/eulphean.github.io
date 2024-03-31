import React, { useState, useRef } from "react"
import CustomButton from "./CustomButton";
import SplineScene, { SceneType } from "./SplineScene";
import Loader from './Loader'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

// gsap.registerPlugin(useGSAP);

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
    }, []);
    
    const onLoadComplete = () => {
        setSpinning(false);
    }

    const onClickEnter = () => {
        props.onEnter();
        setShow(!show);
    }
    
    const intro = <SplineScene sceneType={SceneType.Intro} onLoadComplete={onLoadComplete} />;
    return(
        <div className={`${show ? "visible" : "hidden"} z-40 fixed flex justify-center left-0 right-0 top-0 bottom-0 w-screen h-screen bg-primary`}>
            {spinning ? <Loader customStyles="absolute w-full top-0 left-0 bottom-0 right-0"/> : <></> }
            <CustomButton 
                ref={buttonRef}
                onMouseEnter={contextSafe(() => t.current?.play())}
                onMouseLeave={contextSafe(() => t.current?.reverse())}
                onClick={onClickEnter} 
                title="Enter" 
                customStyles={`${spinning ? "hidden" :  "visible"} text-xl p-2 font-bold fixed bottom-20 xs:p-2 lg:text-lg lg:mt-4 lg:w-32 xl:text-xl"`}
            />
            {intro}
        </div>
    );
}