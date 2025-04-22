import './Subscribe.css';

import subscribeImg from "../Assets/subscribeImg.jpg";

export default function Subscribe(){
    return(
        <div className="subscribe_container">
            <div className='subscribe_content'>
                <div className='subscribe_image'>
                    <img src={subscribeImg} alt='restaurant'/>
                </div>

                <div className='subscribe_description'>
                <h1>JOIN THE FRY SHACK CLUB</h1>
                <p>Receive original deals, limited offers and our latest news directly in your mailbox!</p>
                
                <input type='email' placeholder='Email' className='email_input' />
                
                <div className='terms'>
                    <input type='checkbox' id='terms' />
                    <label htmlFor='terms'>I accept the terms and conditions</label>
                </div>
                
                <button className='register_button'>Register</button>

                </div>
            </div>
        </div>
    );
}