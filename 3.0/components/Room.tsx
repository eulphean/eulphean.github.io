import React, { useState } from 'react';
import SplineScene, {SceneType} from './SplineScene';
import Loader from './Loader';

type RoomProps = {
    showRoom: boolean
}

export default function Room(props: RoomProps) {
    const [spinning, setSpinning] = useState(true);

    const onLoadComplete = () => {
        setSpinning(false);
    }

    const roomContainer = "block w-full min-h-80 lg:h-3/6 2xl:h-4/5"
    const room = (<SplineScene sceneType={SceneType.Room} onLoadComplete={onLoadComplete}/>);
    return (
        <div className={roomContainer}>
            { spinning ? <Loader customStyles="w-full h-full" /> : <></> }
            { props.showRoom ? room : <></> }
        </div>
    );
}

