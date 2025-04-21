import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaBars, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { gsap } from 'gsap';

import burgerImg from "../Assets/burger.jpg";
import pizzaImg from "../Assets/pizza.jpg";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [burgerImg, pizzaImg]; // List of images

    const heroImageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        // Clear the interval when the component unmounts
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

    return (
        <div className='hero_container'>
            <header className='hero_header'>
                <div className='menu_icon'>
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

                    <h2>View Menu</h2>
                </div>
            </div>
        </div>
    );
}
