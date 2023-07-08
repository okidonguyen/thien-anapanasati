'use client';

import { useEffect, useState } from 'react';

export default function Slideshow() {
    const texts = [
        'Text 1',
        'Text 2',
        'Text 3',
        // Add more texts here
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Auto advance the slideshow every 3 seconds
        const interval = setInterval(() => {
            console.log(currentIndex);

            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {texts.map((text, index) => (
                <div
                    key={index}
                    className={`slide ${
                        index === currentIndex ? 'active' : ''
                    }`}>
                    {text}
                </div>
            ))}
        </>
    );
}
