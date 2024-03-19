import { useState } from "react"

export default function Intro() {
    const [show, setShow] = useState(true);
    return(
        <div className={`${show ? "visible" : "collapse"} z-40 fixed flex justify-center left-0 right-0 top-0 bottom-0 w-screen h-screen bg-slate-200`}>
            <button onClick={() => setShow(!show)} className="text-2xl fixed bottom-20">Enter</button>
        </div>
    );
}