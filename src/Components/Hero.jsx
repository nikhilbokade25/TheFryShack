import './Hero.css';
import { FaBars, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className='hero_container'>
            <header className='hero_header'>
                <div className='menu_icon'>
                    <FaBars size={28}/>
                    <span>MENU</span>
                    
                </div>
                <div className='hero_logo'>
                    <h1>The Fry <br/>Shack</h1>
                </div>
                <div className='social_icons'>
                    <div className='icon_circle'>
                        <FaInstagram />
                    </div>
                    <div className='icon_circle'>
                        <FaFacebookF />
                    </div>
                </div>
            </header>
        </div>
    );
}
