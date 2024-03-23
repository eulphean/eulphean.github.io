import React, { useState, Suspense, ReactElement, JSXElementConstructor, ComponentType } from "react"
import CustomButton from "./CustomButton";
import SplineScene, { SceneType } from "./SplineScene";

type IntroProps = {
    onEnter: () => void
}
export default function Intro(props: IntroProps) {
    const [spinning, setSpinning] = useState(true);
    const [show, setShow] = useState(true);   
    
    const onLoadComplete = () => {
        setSpinning(false);
    }

    const onClickEnter = () => {
        props.onEnter();
        setShow(!show);
    }
    
    const intro = <SplineScene sceneType={SceneType.Intro} onLoadComplete={onLoadComplete} />;
    return(
        <div className={`${show ? "visible" : "collapse"} z-40 fixed flex justify-center left-0 right-0 top-0 bottom-0 w-screen h-screen bg-primary`}>
            {spinning ? <Loader /> :
                <CustomButton 
                    onClick={onClickEnter} 
                    title="Enter" 
                    customStyles="text-1xl fixed bottom-20" 
                />
            }            
            {intro}
        </div>
    );
}

function Loader() {
    return (
        <div className="flex justify-center items-center text-green text-lg absolute w-full top-0 left-0 bottom-0 right-0">
            Loading...
        </div>
    )
}