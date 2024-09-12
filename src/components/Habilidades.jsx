import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss } from 'react-icons/si';

const Habilidades = () => {
    const textos = {
        textoHtml: 'Comecei minha jornada no desenvolvimento web com HTML, aprendendo a criar a estrutura básica das páginas. Estudei a importância da semântica ao usar tags específicas, o que me permitiu melhorar a organização, acessibilidade e SEO do código.',
        textoCss: 'Após dominar HTML, comecei a explorar CSS para estilizar e aprimorar o design das minhas páginas. Aprendi a aplicar estilos básicos, como cores, fontes e layouts. Estudei técnicas de layout, como Flexbox e Grid, para criar designs responsivos e atraentes, elevando a experiência do usuário.',
        textoJs: 'Depois de me familiarizar com HTML e CSS, comecei a explorar JavaScript para adicionar interatividade às minhas páginas. Aprendi a manipular o DOM, criar eventos e implementar lógica de programação. Estudei como usar funções, loops e condicionais para criar experiências dinâmicas e responsivas, como validação de formulários e animações.',
        textoBootstrap: 'Depois de adquirir experiência com HTML e CSS, comecei a usar Bootstrap para acelerar o desenvolvimento de interfaces. Aprendi a utilizar seus componentes e classes pré-estilizadas para criar layouts responsivos e atraentes de forma rápida e eficiente, melhorando a consistência e a aparência das minhas páginas.',
        textoTailwindCSS: 'Depois de estudar CSS e Bootstrap, descobri o Tailwind CSS, que oferece uma abordagem mais flexível e personalizada para estilizar páginas. Com Tailwind, utilizei classes utilitárias para construir designs responsivos e altamente customizáveis, permitindo um controle mais granular sobre o estilo e a estrutura dos meus projetos, e mantendo o código mais limpo e modular.',
        textoReact: 'Com uma base sólida em JavaScript, comecei a usar React para criar interfaces dinâmicas. Aprendi a desenvolver componentes reutilizáveis e gerenciar o estado da aplicação, o que melhorou a eficiência e a escalabilidade do meu código.',
        textoGithub: 'Para gerenciar e versionar meu código, comecei a usar o GitHub. Aprendi a criar repositórios, fazer commits e trabalhar com branches para organizar o desenvolvimento de projetos. A utilização do GitHub facilitou o controle das alterações no código, além de proporcionar um histórico claro e acessível das modificações.'
    }

    const [texto, setTexto] = useState(textos.textoHtml);
    const [ativo, setAtivo] = useState('textoHtml'); // Mantém o estado do ícone ativo

    const handleMouseEnter = (key) => {
        setTexto(textos[key]);
        setAtivo(key); // Define o ícone ativo
    }

    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-around items-center mt-8 md:mt-0 md:h-[300px]'>
            <div className='flex flex-col items-center'>
                <div className="grid grid-cols-4 gap-6">
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoHtml' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoHtml')}
                    >
                        <FaHtml5 color='#E34F26' className='text-[50px] md:text-[80px]' />
                    </div>
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoCss' ? 'md:md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoCss')}
                    >
                        <FaCss3Alt color='#1572B6' className='text-[50px] md:text-[80px]' />
                    </div>
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoJs' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoJs')}
                    >
                        <FaJsSquare color='#F7DF1E' className='text-[50px] md:text-[80px]' />
                    </div>
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoBootstrap' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoBootstrap')}
                    >
                        <SiBootstrap color='#7952B3' className='text-[50px] md:text-[80px]' />
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-6 gap-6">
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoTailwindCSS' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoTailwindCSS')}
                    >
                        <SiTailwindcss color='#06B6D4' className='text-[50px] md:text-[80px]' />
                    </div>
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoReact' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoReact')}
                    >
                        <FaReact color='#61DAFB' className='text-[50px] md:text-[80px]' />
                    </div>
                    <div
                        className={`flex justify-center cursor-pointer transform transition-transform duration-300 ${ativo === 'textoGithub' ? 'md:scale-125' : ''}`}
                        onMouseEnter={() => handleMouseEnter('textoGithub')}
                    >
                        <FaGithub color='#fff' className='text-[50px] md:text-[80px]' />
                    </div>
                </div>
            </div>


            <div className='hidden md:w-[40%] md:flex justify-center items-center'>
                <div className={`text-white text-md transform transition-transform duration-300`}>
                    <p dangerouslySetInnerHTML={{ __html: texto }} />
                </div>
            </div>


        </div>
    )
}

export default Habilidades;
