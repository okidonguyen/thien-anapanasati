import CountdownTimer from '../components/CountdownTimer';
import StickyNav from '../components/StickyNav';
import TopNav from '../components/TopNav';

export default function Settings() {
    return (
        <>
            <TopNav active={'settings'} />
            <div className='ok-content'>
                
            </div>
            <StickyNav active={'settings'} zen={false} />
        </>
    );
}
