import React, { Suspense, ComponentType } from "react"
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
    const onLoadComplete = () => {
        console.log('Load complete');
        props.onLoadComplete();
    }

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