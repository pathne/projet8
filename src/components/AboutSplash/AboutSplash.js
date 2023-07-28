
import './AboutSplash.scss';
import aboutSplashImage from '../../assets/images/about-splash.png';

export default function AboutSplash(props){
    return (
        <div className="about-splash">
            <img src={aboutSplashImage} alt="splash"/>
        </div>
    );
}
