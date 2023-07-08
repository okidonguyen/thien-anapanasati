import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Define the shape of your global state
export interface AppState {
    timer: number;
    now: number;
    status: number;
}
export interface AppContextState {
    appState: AppState;
    updateState: (value: AppState) => void;
}

export type AppContextStateT = {
    appState: AppState;
    updateState: (value: AppState) => void;
};

// Create the context
export const AppContext = createContext<AppContextState | null>(null);

// Create the provider component
export const AppProvider: React.FC = ({ children }) => {
    const router = useRouter();

    const [appState, setAppState] = useState({
        timer: 900,
        now: 0,
        status: 0, // 0 - stop | 1 - start | 2 - pause
    });

    const updateState = (state: AppState) => {
        setAppState(state);
    };

    const contextValue: AppContextState = {
        appState,
        updateState,
    };

    const pushRunning = (to: string) => {
        if (appState.status != 0) {
            console.log('push');
            router.push(to);
        }
    };

    // Local Storage: setting & getting data
    useEffect(() => {
        const appStateData = localStorage.getItem('appState');
        if (appStateData != null) {
            setAppState(JSON.parse(appStateData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('appState', JSON.stringify(appState));
        console.log(appState);
        pushRunning('/breath');
    }, [appState]);

    useEffect(() => {
        pushRunning('/breath');
    }, [router.asPath]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
