import './Events.css';
import { useNavigate } from 'react-router-dom';

import pizzaMakingImg from "../Assets/pizzaMaking.jpg";

export default function Events() {

    const navigate = useNavigate();
    return (
        <div className="event_container">
            <div className="event_content">
                <div className='event_menu'>
                    <h2 className="menu_heading">The Menu</h2>
                    <hr className='first_hr'/>
                    <div className="menu_item" data-item="pizza" onClick={() => navigate('/menu')}>
                        PIZZA
                        <span className="item_tagline" data-tagline="Delicious cheesy goodness">  / Delicious cheesy goodness</span>
                        
                    </div>
                    <hr/>
                    <div className="menu_item" data-item="nachos" onClick={() => navigate('/menu')}>
                        NACHOS
                        <span className="item_tagline" data-tagline="Crunchy and loaded">  / Crunchy and loaded</span>
                        
                    </div>
                    <hr/>
                    <div className="menu_item" data-item="burger" onClick={() => navigate('/menu')}>
                        BURGER
                        <span className="item_tagline" data-tagline="Juicy and satisfying"> / Juicy and satisfying</span>
                        
                    </div>
                    <hr/>
                    <div className='menu_item' data-item="fries" onClick={() => navigate('/menu')}>
                        FRIES
                        <span className="item_tagline" data-tagline="Crispy and salty"> / Crispy and salty</span>
                        
                    </div>
                    <hr/>
                    <div className='menu_item' data-item="poutine" onClick={() => navigate('/menu')}>
                        POUTINE
                        <span className="item_tagline" data-tagline="Cheesy, gravy goodness"> / Cheesy, gravy goodness</span>
                        
                    </div>
                    <hr/>
                    <div className='menu_item' data-item="milkshakes" onClick={() => navigate('/menu')}>
                        MILKSHAKES
                        <span className="item_tagline" data-tagline="Sweet and creamy treat"> / Sweet and creamy treat</span>
                        
                    </div>
                    <hr/>
                </div>

                <div className='event_details'>
                    <h2>EVENTS</h2>
                    <div className='event_info'>
                        <div className='event_image'>
                            <img src={pizzaMakingImg} alt='pizza making'/>
                        </div>

                        <div className='event_description'>
                            <h1>Learn Pizza Making ?</h1>
                            <p>Join our fun and interactive pizza-making session where you'll master the art of crafting the perfect slice.</p>
                            <button className='info_button'>More Information</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}