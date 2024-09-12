import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Headline = () => {

    
    const headlineRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (headlineRef.current) {
            gsap.fromTo(
                headlineRef.current,
                { opacity: 0, y: -50, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headlineRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        toggleActions: 'play none none reverse',
                        once: true
                    },
                }
            );
        }
    }, []);

    return (
        <section className=' flex flex-col md:flex-row justify-center md:gap-20 gap-2 items-center h-screen ' ref={headlineRef} id='home'>
<div className="">
  <img
    src="./logo-codigo-.png"
    alt="Foto de Ezequiel Avelino"
    className="h-[300px]  brilho-mover"
  />
</div>



            <div className="flex flex-col items-center">
                <div className='h-[140px] md:h-auto'>
                    <h2 className='text-white text-2xl uppercase font-bold text-center'>Olá, meu nome é Ezequiel</h2>
                    <h1 className='text-[#1845CD] uppercase text-4xl font-bold text-center whitespace-pre-line'>
                        <h1>Desenvolvedor <br /> Front-End </h1>
                    </h1>
                </div>

                <div className='flex gap-6 mt-4'>
                    <a
                        href="https://github.com/ezequiel-developer"
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="Github"
                        className='text-white hover:text-[#1845CD] transition-transform transform hover:scale-125'
                    >
                        <FaGithub size={40} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ezequiel-avelino-developer-front-end/"
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className='text-white hover:text-[#1845CD] transition-transform transform hover:scale-125'
                    >
                        <FaLinkedin size={40} />
                    </a>

                    <a
                        href="https://wa.me/47999611833"
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className='text-white hover:text-[#1845CD] transition-transform transform hover:scale-125'
                    >
                        <FaWhatsapp size={40} />
                    </a>
                </div>

            </div>

        </section>
    );
};

export default Headline;
