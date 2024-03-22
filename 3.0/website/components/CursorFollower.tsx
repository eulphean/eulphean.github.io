import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap'

export default function CursorFollower() {
    const cursor = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        let xTo = gsap.quickTo(cursor.current, "x", {duration: 0.6, ease: "power3"});
        let yTo = gsap.quickTo(cursor.current, "y", {duration: 0.6, ease: "power3"});

        window.addEventListener("mousemove", e=>{
            xTo(e.clientX);
            yTo(e.clientY);
        })
    }, {scope: cursor});

    return(
        <div ref={cursor} className="z-50 w-10 h-10 fixed -top-5 -left-5 bg-primaryBright" />
    )
}