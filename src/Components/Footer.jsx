import './Footer.css';

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_wrapper">
                <hr className="footer_hr" />

                <div className="footer_content">
                    <div className="footer_section">
                        <h2 className="footer_title title_name">The Fry Shack</h2>
                        
                            <p className='footer_menu_item'>Our Story</p>
                            <hr />
                            <p className='footer_menu_item'>News & Events</p>
                            <hr />
                            <p className='footer_menu_item'>Menu</p>
                            <hr />
                            <p className='footer_menu_item'>Order Online</p>
                            <hr />
                            <p className='footer_menu_item'>Careers</p>
                            <hr />
                            <p className='footer_menu_item'>FAQs</p>
                    </div>

                    <div className="footer_divider" />

                    <div className="footer_section">
                        <h2 className="footer_title">Opening Hours</h2>
                        <p>Monday<span>13:00 - 22:00</span></p>
                        <p>Tuesday<span>13:00 - 22:00</span></p>
                        <p>Wednesday<span>13:00 - 22:00</span></p>
                        <p>Thursday<span>CLOSED</span></p>
                        <p>Friday<span>13:00 - 22:00</span></p>
                        <p>Saturday<span>12:00 - 23:00</span></p>
                        <p>Sunday<span>13:00 - 22:00</span></p>
                    </div>

                    <div className="footer_divider" />

                    <div className="footer_section">
                        <h2 className="footer_title">Stay In Touch</h2>
                        <p>123 Fry Lane, Flavor Town</p>
                        <hr/>
                        <p className='footer_menu_item'>Privacy</p>
                        <p className='footer_menu_item'>Contact Us</p>
                    </div>
                </div>

                <hr className="footer_hr" />
            </div>
        </div>
    );
}
