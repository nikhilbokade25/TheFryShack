import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaBars, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import burgerImg from "../Assets/burger.jpg";
import pizzaImg from "../Assets/pizza.jpg";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control dialog visibility
    const images = [burgerImg, pizzaImg];
    const heroImageRef = useRef(null);
    const navigate = useNavigate();
    const dialogRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        gsap.fromTo(
            heroImageRef.current,
            { height: 0 },
            {
                height: '100%',
                delay: 1,
                duration: 1.2,
                ease: 'power2.out'
            }
        );

        gsap.fromTo(
            '.hero_description p',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 0.5,
                ease: 'power2.out'
            }
        );

        gsap.fromTo(
            '.hero_description h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'bounce.out',
                stagger: 1,
            }
        );

        gsap.fromTo(
            '.hero_description h2',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 1,
                ease: 'power2.out'
            }
        );

    }, []);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            // Animation for opening the dialog
            gsap.fromTo(
                dialogRef.current,
                { opacity: 0, y: -50 }, // Start from above the screen
                {
                    opacity: 1,
                    y: 0, // Slide down to its original position
                    duration: 0.3,
                    ease: 'power2.out',
                }
            );
        } else {
            // Animation for closing the dialog
            gsap.to(
                dialogRef.current,
                {
                    opacity: 0,
                    y: -50, // Slide back up
                    duration: 0.2,
                    ease: 'power2.in',
                    onComplete: () => setIsMenuOpen(false),
                }
            );
        }
    };
       

    return (
        <div className='hero_container'>
            <header className='hero_header'>
                <div className='menu_icon' onClick={toggleMenu}> {/* Added onClick */}
                    <FaBars size={28} />
                    <span>MENU</span>
                </div>
                <div className='hero_logo'>
                    <h1>The Fry <br />Shack</h1>
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

            <div className='hero_content'>
                <div className='hero_image' ref={heroImageRef}>
                    <img src={images[currentImage]} alt="Slideshow" className="slideshow_image" />
                </div>

                <div className='hero_description'>
                    <h1>Burgers, Fries & All Things Nice</h1>
                    <p>
                        Crispy fries, juicy burgers, and bold flavors make The Fry Shack your spot for comfort food done right. From loaded poutines to thick milkshakes, every bite brings indulgent satisfaction. Drop in for bites, chill vibes, and flavors that always hit just right.
                    </p>

                    <h2 onClick={() => navigate('/menu')}>View Menu</h2>
                </div>
            </div>

            {/* Dialog Box */}
            {isMenuOpen && (
                <div className="menu_dialog" ref={dialogRef}>
                    <div className="dialog_content">
                        <button onClick={toggleMenu} className="close_button">
                            Close
                        </button>
                        <h2>Menu</h2>
                        <ul>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Pizza</a></li>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Burger</a></li>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Nachos</a></li>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Fries</a></li>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Poutine</a></li>
                            <li><a href="/menu" onClick={() => { setIsMenuOpen(false); navigate('/menu'); }}>Milkshakes</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
