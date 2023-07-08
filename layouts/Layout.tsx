import { AppProvider } from '../contexts/AppContext';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <div className="bg-[url('/img/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')] bg-[length:1920px] ">
                <div
                    className='min-w-[360px] max-w-[414px] m-auto shadow-md bg-[#173f31] border border-[#cccccc]'
                    style={{ height: '100vh' }}>
                    {children}
                </div>
            </div>
        </AppProvider>
    );
}
