import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState('');

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const verificarSecaoAtual = () => {
        const secoes = ['home', 'sobre', 'certificacoes', 'projetos', 'contatos'];
        let secaoAtual = '';
        secoes.forEach((idSecao) => {
            const elemento = document.getElementById(idSecao);
            if (elemento) {
                const posicao = elemento.getBoundingClientRect();
                if (posicao.top <= window.innerHeight / 2 && posicao.bottom >= window.innerHeight / 2) {
                    secaoAtual = idSecao;
                }
            }
        });
        setSecaoAtiva(secaoAtual);
    };

    useEffect(() => {
        window.addEventListener('scroll', verificarSecaoAtual);
        verificarSecaoAtual(); // Verifica a seção atual ao carregar

        return () => {
            window.removeEventListener('scroll', verificarSecaoAtual);
        };
    }, []);

    return (
        <header className='bg-[#0F0F0F] fixed w-screen text-white py-4 flex justify-between md:justify-around px-6 items-center h-[70px] z-50 shadow-black shadow-sm'>
            <div>
                <p className='uppercase font-bold text-sm'>
                    &lt; Ezequiel <br /> Avelino / &gt;
                </p>
            </div>

            <button
                className={`md:hidden flex items-center z-50 transition-transform duration-300 ${menuAberto ? 'rotate-90' : ''}`}
                onClick={alternarMenu}
            >
                {menuAberto ? (
                    <XMarkIcon className='w-8 h-8' />
                ) : (
                    <Bars3Icon className='w-8 h-8' />
                )}
            </button>

            {/* Menu para dispositivos móveis */}
            <nav
                className={`md:hidden absolute top-0 right-0 w-[60%] h-screen bg-[#171717] text-white transform transition-transform duration-300 ease-in-out ${menuAberto ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <ul className='flex flex-col gap-4 mt-14 text-center'>
                    <li className={`text-2xl py-4 ${secaoAtiva === 'home' ? 'bg-[#1845CD]' : 'hover:bg-[#1845CD]'}`}>
                        <a href="#home" onClick={() => setMenuAberto(false)}>Home</a>
                    </li>
                    <li className={`text-2xl py-4 ${secaoAtiva === 'sobre' ? 'bg-[#1845CD]' : 'hover:bg-[#1845CD]'}`}>
                        <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>
                    </li>
                    <li className={`text-2xl py-4 ${secaoAtiva === 'certificacoes' ? 'bg-[#1845CD]' : 'hover:bg-[#1845CD]'}`}>
                        <a href="#certificacoes" onClick={() => setMenuAberto(false)}>Certificações</a>
                    </li>
                    <li className={`text-2xl py-4 ${secaoAtiva === 'projetos' ? 'bg-[#1845CD]' : 'hover:bg-[#1845CD]'}`}>
                        <a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a>
                    </li>
                    <li className={`text-2xl py-4 ${secaoAtiva === 'contatos' ? 'bg-[#1845CD]' : 'hover:bg-[#1845CD]'}`}>
                        <a href="#contatos" onClick={() => setMenuAberto(false)}>Contatos</a>
                    </li>
                </ul>
            </nav>

            {/* Menu para dispositivos maiores */}
            <nav className='hidden md:flex'>
                <ul className='flex gap-4'>
                    <li>
                        <a
                            href="#home"
                            className={`hover:text-[#1845CD] ${secaoAtiva === 'home' ? 'text-[#1845CD]' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sobre"
                            className={`hover:text-[#1845CD] ${secaoAtiva === 'sobre' ? 'text-[#1845CD]' : ''}`}
                        >
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a
                            href="#certificacoes"
                            className={`hover:text-[#1845CD] ${secaoAtiva === 'certificacoes' ? 'text-[#1845CD]' : ''}`}
                        >
                            Certificações
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projetos"
                            className={`hover:text-[#1845CD] ${secaoAtiva === 'projetos' ? 'text-[#1845CD]' : ''}`}
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contatos"
                            className={`hover:text-[#1845CD] ${secaoAtiva === 'contatos' ? 'text-[#1845CD]' : ''}`}
                        >
                            Contatos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
