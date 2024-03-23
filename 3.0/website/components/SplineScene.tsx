import React, { useRef, useEffect, useState, Suspense, ComponentType } from "react"
import {Application} from '@splinetool/runtime'
const Spline = React.lazy(() => delayForDemo(import('@splinetool/react-spline')));

export enum SceneType {
    Intro = 0,
    Room = 1
}

type SplineSceneProps = {
    sceneType: SceneType,
    onLoadComplete: () => void
}

export default function SplineScene(props: SplineSceneProps) {
    const canvas = useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = useState({
        intro: false,
        room: false
    });

    const onLoadComplete = () => {
        console.log('Load complete');
        props.onLoadComplete();
    }

    console.log('SceneType: ' + props.sceneType);
    return (
        <>
            {props.sceneType === SceneType.Intro ?
                <Suspense><Spline scene="https://prod.spline.design/yGk2E1zv7eJLo0aO/scene.splinecode" onLoad={onLoadComplete} /></Suspense> :
                <Suspense><Spline scene="https://prod.spline.design/cVX19QaRpag1IL1y/scene.splinecode" onLoad={onLoadComplete} /></Suspense>
            }
        </>
    );
}

// Intro animation for the beginning.
function delayForDemo(promise: Promise<{default: ComponentType<any>}>) {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    }).then(() => promise);
}