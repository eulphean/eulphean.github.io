import React, { useEffect, useState } from 'react';
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

    const roomContainer = "block w-full min-h-80 md:h-2/3 lg:h-4/5 xl:h-5/6"
    const room = (<SplineScene sceneType={SceneType.Room} onLoadComplete={onLoadComplete}/>);
    return (
        <div className={roomContainer}>
            { spinning ? <Loader customStyles="w-full h-full" /> : <></> }
            { props.showRoom ? room : <></> }
        </div>
    );
}

