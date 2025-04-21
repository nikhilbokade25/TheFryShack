import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useEffect(() => {
        gsap.fromTo(
            '.about_text h1',
            { opacity: 0, x: 100 }, 
            {
                opacity: 1,
                x: 0, 
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about_container',
                    start: 'top 50%',
                    end: 'bottom 10%',
                    scrub: true,
                }
            }
        );

        gsap.fromTo(
            '.about_text p',
            { opacity: 0, x: -100 }, 
            {
                opacity: 1,
                x: 0, 
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about_container',
                    start: 'top 50%',
                    end: 'bottom 30%',
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <div className="about_container">
            <div className="about_text">
                <h1>Burgers, fries, or poutine? We craft indulgent comfort food in a relaxed, vibrant setting. From crispy bites to thick shakes, every meal is a treat you won’t forget.</h1>
                <p>Tasty comfort food and a great vibe at The Fry Shack.</p>
            </div>
        </div>
    );
}
