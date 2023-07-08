import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext, AppContextStateT } from '../contexts/AppContext';

interface TimerProps {
    duration: number;
}

const CountdownTimer = ({ duration }: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);
    const { appState, updateState } = useContext(
        AppContext
    ) as AppContextStateT;

    useEffect(() => {
        timer.current = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(timer.current as NodeJS.Timeout);
        };
    }, []);

    useEffect(() => {
        console.log(timeLeft);
        // check status 1: update
        // if (appState.status == 1) {
        //     updateState({ ...appState, timer: timeLeft, now: Date.now() });
        // }

        if (timeLeft === 0) {
            console.log('Countdown finished!');
            clearInterval(timer.current as NodeJS.Timeout);
        }
    }, [timeLeft]);

    // Format the time remaining as desired (e.g., minutes and seconds)
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            <h1 className='text-center font-mono text-3xl'>
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </h1>
        </div>
    );
};

export default CountdownTimer;
