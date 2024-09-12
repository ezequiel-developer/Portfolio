import React from 'react'
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contatos = () => {
    return (
        <section className='mx-4 flex justify-center pt-20' id='contatos'>


            <div className='flex flex-col space-y-4 text-xl'>

                <h2 className='text-center uppercase font-bold text-2xl'>Contatos</h2>

                <div className="flex">
                    <a href="mailto:ezequiel_avelino@hotmail.com" aria-label="Email" className="flex items-center gap-9 hover:text-[#1845CD]">
                        <FaEnvelope size={40} />
                        <span>ezequiel_avelino <br /> @hotmail.com</span>
                    </a>
                </div>

                <div className='flex'>
                    <a href="https://wa.me/47999611833" target='_blank' aria-label="WhatsApp" className="flex items-center gap-9 hover:text-[#1845CD]">
                        <FaWhatsapp size={40} />
                        <span>(47) 9 9961-1833</span>
                    </a>

                </div>

                <div className='flex'>
                    {/* GitHub */}
                    <a href="https://github.com/ezequiel-developer" target='_blank' aria-label="GitHub" className="flex items-center gap-9 hover:text-[#1845CD]">
                        <FaGithub size={40} />
                        <span>ezequiel-developer</span>
                    </a>

                </div>

                <div className='flex'>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ezequiel-avelino-developer-front-end/" target='_blank' aria-label="LinkedIn" className="flex items-center gap-9 hover:text-[#1845CD]">
                        <FaLinkedin size={40} />
                        <span>/ezequiel-avelino <br />
                            -developer-front-end</span>
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Contatos
