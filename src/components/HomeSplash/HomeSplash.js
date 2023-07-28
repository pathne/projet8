
import './HomeSplash.scss';
import homeSplashImage from '../../assets/images/home-splash.png';

export default function HomeSplash(props){
    return (
        <div className="home-splash">
            <img src={homeSplashImage} alt="splash"/>
            <div>Chez vous,<br className="break"/> partout et ailleurs</div>
        </div>
    );
}
