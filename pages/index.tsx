import StickyNav from '../components/StickyNav';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Intro() {
    
    const router = useRouter();

    useEffect(() => {
        // Auto advance the slideshow every 3 seconds
        const interval = setInterval(() => {
            router.push("/meditation")
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <h1 className=' absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-green-500  text-center'>
                ANAPANASATI <br />
                MEDITATION
                <br />
                <br />
            </h1>
            <div className='ok-content flex justify-center items-center'>
                <div className="duration-75 rounded-full bg-[url('/img/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')] bg-[length:450px] bg-center w-72 h-72 shadow-md">
           
                </div>
            </div>
            <StickyNav active={'Intro'} zen={false} />
        </>
    );
}
