import React, { useState } from 'react';
import SplineScene, {SceneType} from './SplineScene';

type RoomProps = {
    showRoom: boolean
}

export default function Room(props: RoomProps) {
    const [spinning, setSpinning] = useState(true);

    const onLoadComplete = () => {
        setSpinning(false);
    }

    const room = (<SplineScene sceneType={SceneType.Room} onLoadComplete={onLoadComplete}/>);
    return (
        <div className="width-screen">
            { spinning ?<Loader /> : <></> }
            {props.showRoom ? room :<></>}
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