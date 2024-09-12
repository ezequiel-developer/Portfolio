import React, { useState } from 'react';
import useGsapAnimation from '../hooks/useGsapAnimation';

const Sobre = () => {

    useGsapAnimation('.sobre-txt', {
        xFrom: '-100vw',
        xTo: '0',
        opacityFrom: 0,
        opacityTo: 1,
        scaleFrom: 0.5,
        scaleTo: 1,
        duration: 1,
        ease: 'power2.out',
        start: 'top 92%',
        end: 'top 25%',
    });

    useGsapAnimation('.sobre-img', {
        xFrom: '100vw',
        xTo: '0',
        opacityFrom: 0,
        opacityTo: 1,
        scaleFrom: 0.5,
        scaleTo: 1,
        duration: 1,
        ease: 'power2.out',
        start: 'top 75%',
        end: 'top 25%',
    });

    return (

        <section id='sobre' className="h-full pt-20 flex justify-center items-center">
            <div className='mx-4 flex flex-col overflow-hidden'>
                <h2 className='text-white uppercase font-bold text-2xl pb-8 md:mb-0 text-center md:text-left md:ml-[60px]'>Sobre mim</h2>
                <div className='flex flex-col justify-around items-center md:flex-row-reverse'>
                    <div className='md:w-[30%] mb-14 md:mb-0'>
                        <img src="./Ezequiel Avelino.jpg" alt="" className='rounded-full h-[300px] w-[300px] border-8 border-[#1845CD] sobre-img' />
                    </div>
                    <div className='border-[#1845CD] border-4 text-md  text-justify p-4 bg-[#151515] md:w-[50%] sobre-txt'>
                        <p>Sou um jovem com 24 anos, graduado em <strong>Administração</strong>. Atualmente estou cursando <strong>Sistemas para Internet</strong>, tenho dedicado meu tempo e energia ao estudo, com um foco especial na área de <strong>Tecnologia da Informação</strong>.</p>
                        <br />
                        <p>Estou aprofundando meu conhecimento em <strong>frameworks</strong> e <strong>bibliotecas</strong>, para desenvolvimento de interfaces de usuário, de forma <strong>ágil</strong> e <strong>responsiva</strong>.</p>
                        <br />
                        <p>Estou ansioso para aplicar esse conhecimento em <strong>oportunidades</strong> de <strong>estágio</strong> ou <strong>trabalho</strong>, onde pretendo aprender e contribuir com a empresa.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Sobre;
