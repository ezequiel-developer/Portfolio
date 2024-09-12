import React from 'react'
import useGsapAnimation from '../hooks/useGsapAnimation';

const Certificacoes = () => {


    // Animação para o texto de "Certificados"
    useGsapAnimation('.certificado', {
        xFrom: 0,
        xTo: 0,
        opacityFrom: 0,
        opacityTo: 1,
        scaleFrom: 0.5,
        scaleTo: 1,
        duration: 3,
        ease: 'power3.out',
        start: 'top bottom',
        end: 'bottom top',
    });
    return (
        <section className='mx-4  min-h-full pt-20 pb-0 md:py-20 flex flex-col justify-center' id='certificacoes'>
            <h2 className='uppercase font-bold text-2xl text-center mb-8'>Formação Acadêmica</h2>

            <div className='grid grid-cols-1 space-y-4'>

                <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-8 '>
                    <div className='bg-[#151515] flex flex-1 justify-between items-center p-4 certificado  shadow-black shadow-md'>
                        <div className='w-[30%]'>
                            <img src="./logo-uniavan.jpg" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%]'>
                            <h4 className='text-sm'>Bacharelado <br className='md:hidden' /> Administração <br className='md:hidden' />UNIAVAN</h4>
                            <p className='text-[10px]'>jun. de 2019 - jun. de 2023</p>
                        </div>
                    </div>

                    <div className='bg-[#151515] flex flex-1 justify-around items-center p-4 certificado shadow-black shadow-md'>
                        <div className='w-[30%]'>
                            <img src="./logo-uniasselvi.png" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%]'>
                            <h4 className='text-sm'>Tecnólogo <br className='md:hidden'/>Sistemas Internet <br className='md:hidden' /> UNIASSELVI</h4>
                            <p className='text-[10px]'>jun. de 2019 - jun. de 2023</p>
                        </div>
                    </div>

                </div>



                <h2 className='uppercase font-bold text-2xl text-center py-4'>Cursos Complementares</h2>

                <div className='flex flex-col md:flex-row gap-2 '>
                    <div className='bg-[#151515] flex flex-1 justify-between items-center p-4  shadow-black shadow-md certificado'>
                        <div className='w-[30%]'>
                            <img src="./logo-udemy.png" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%] ml-4'>
                            <h4 className='text-sm'>Web Front-end  HTML, CSS <br /> e JS 128H</h4>
                            <p className='text-[10px]'>2024</p>
                        </div>
                    </div>

                    <div className='bg-[#151515] flex flex-1 justify-between items-center p-4  shadow-black shadow-md certificado'>
                        <div className='w-[30%]'>
                            <img src="./logo-udemy.png" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%] ml-4'>
                            <h4 className='text-sm'>JavaScript Completo 114H
                                <br /> HTML, CSS e JS 128H</h4>
                                <p className='text-[10px]'>2024</p>

                        </div>
                    </div>

                    <div className='bg-[#151515] flex flex-1 justify-between items-center p-4  shadow-black shadow-md certificado'>
                        <div className='w-[30%]'>
                            <img src="./logo-udemy.png" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%] ml-4'>
                            <h4 className='text-sm'>Bootstrap5 do básico ao avançado 16H</h4>
                            <p className='text-[10px]'>2024</p>

                        </div>
                    </div>


                    <div className='bg-[#151515] flex flex-1 justify-between items-center p-4  shadow-black shadow-md certificado'>
                        <div className='w-[30%]'>
                            <img src="./logo-udemy.png" alt="Logo UNIAVAN" className='h-18 w-16' />
                        </div>
                        <div className='w-[70%] ml-4'>
                            <h4 className='text-sm'>Git e GitHub do básico ao avançado 8H</h4>
                            <p className='text-[10px]'>2024</p>
                        </div>
                    </div>


                </div>







            </div>

        </section>
    )
}

export default Certificacoes
