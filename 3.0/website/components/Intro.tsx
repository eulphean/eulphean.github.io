import React, { useState, Suspense } from "react"
import CustomButton from "./CustomButton";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Intro() {
    const [spinning, setSpinning] = useState(true);
    const [show, setShow] = useState(true);    

    // Callback called when 
    const onLoad = () => {
        setSpinning(false);
    }

    return(
        <div className={`${show ? "visible" : "collapse"} z-40 fixed flex justify-center left-0 right-0 top-0 bottom-0 w-screen h-screen bg-primary`}>
            {spinning ? <Loader /> :
                <CustomButton 
                    onClick={()=>setShow(!show)} 
                    title="Enter" 
                    customStyles="text-1xl fixed bottom-20" 
                />
            }

            <Suspense>
                <Spline scene="https://prod.spline.design/yGk2E1zv7eJLo0aO/scene.splinecode" onLoad={onLoad} />
            </Suspense>
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
