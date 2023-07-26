
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <nav>
                <NavLink
                    to="/"
                    className={ ({isActive, isPending}) => {
                        if (isActive){
                            return 'link active';
                        }
                        return 'link';
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={ ({isActive, isPending}) => {
                        if (isActive){
                            return 'link active';
                        }
                        return 'link';
                    }}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
