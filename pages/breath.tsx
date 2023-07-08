import CountdownTimer from '../components/CountdownTimer';
import StickyNav from '../components/StickyNav';
import TopNav from '../components/TopNav';
import { useRef, useContext, useEffect } from 'react';
import { AppContext, AppContextStateT } from '../contexts/AppContext';

export default function Countdown() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { appState, updateState } = useContext(
        AppContext
    ) as AppContextStateT;

    useEffect(() => {
        // check time
        console.log(appState.timer);

        // check status stop (0) -> start (1)
        if (appState.status == 0) {
            updateState({ ...appState, status: 1, now: Date.now() });
            audioRef.current?.play();
        }

        // check status stop (0) -> start (1)
        if (appState.status == 1) {
            updateState({ ...appState, status: 1, now: Date.now() });
        }
        // check status pause (2) -> d
    }, []);

    useEffect(() => {
        // check time
        console.log(appState);
        
    }, [appState]);

    return (
        <>
            <TopNav active={'meditation'} />
            <div className='ok-content flex justify-center items-center '>
                <div className="animate-[pulse_10s_ease-in-out_infinite] flex justify-center items-center rounded-full bg-[url('/img/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')] bg-[length:450px] bg-center w-72 h-72 shadow-md">
                    <CountdownTimer duration={appState.timer} />
                </div>
            </div>
            <audio ref={audioRef} src='/bell/3tiengchuongchanhniemlon.mp3' />
            <StickyNav active={'meditation'} zen={true} />
        </>
    );
}
