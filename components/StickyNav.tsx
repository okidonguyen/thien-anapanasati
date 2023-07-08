import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AppContext, AppContextStateT } from '../contexts/AppContext';

interface ButtonProps {
    active: string;
    zen: boolean;
}

export default function StickyNav({ active, zen }: ButtonProps) {
    const router = useRouter();
    const { appState, updateState } = useContext(
        AppContext
    ) as AppContextStateT;

    const handleStop = () => {
        console.log('stop');

        updateState({ ...appState, timer: 900, now: 0, status: 0 });
        router.push('/meditation');
    };

    const handlePause = () => {
        console.log('pause');

        updateState({ ...appState, timer: appState.timer, now: 0, status: 2 });
        //router.reload();
    };

    return (
        <div className='footer min-w-[360px] max-w-[414px] w-full absolute bottom-0 p-3 border-t border-[#cccccc]'>
            <div className=" bg-[url('/img/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')] bg-[length:414px] rounded-3xl shadow-md">
                <div className='flex justify-evenly h-14 flex-wrap content-center'>
                    {!zen ? (
                        <>
                            {/* <Link href={'/thamkhao'}>
                                <div
                                    className={`ok-button ${
                                        active == 'thamkhao' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                                        />
                                    </svg>
                                </div>
                            </Link> */}
                            <Link href={'/quotes'}>
                                <div
                                    className={`ok-button ${
                                        active == 'quotes' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
                                        />
                                    </svg>
                                </div>
                            </Link>
                            <Link href={'/meditation'}>
                                <div
                                    className={`ok-button ${
                                        active == 'meditation'
                                            ? 'ok-active'
                                            : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                                        />
                                    </svg>
                                </div>
                            </Link>
                            {/* <Link href={'/nhatky'}>
                                <div
                                    className={`ok-button ${
                                        active == 'nhatky' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                                        />
                                    </svg>
                                </div>
                            </Link> */}
                            <Link href={'/settings'}>
                                <div
                                    className={`ok-button ${
                                        active == 'settings' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </>
                    ) : (
                        <>
                            <button onClick={handlePause}>
                                <div
                                    className={`ok-button ${
                                        active == 'play' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                </div>
                            </button>
                            <Link href={'/play'}>
                                <div
                                    className={`ok-button ${
                                        active == 'play' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
                                        />
                                    </svg>
                                </div>
                            </Link>
                            <button onClick={handleStop}>
                                <div
                                    className={`ok-button ${
                                        active == 'stop' ? 'ok-active' : ''
                                    }`}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z'
                                        />
                                    </svg>
                                </div>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
