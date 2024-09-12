import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Headline from './components/Headline'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Certificacoes from './components/Certificacoes'
import Contatos from './components/Contatos'
import Footer from './components/Footer'
import Habilidades from './components/Habilidades'

function App() {

  return (
    <div>

      <Header />
      <Headline />
      <Sobre />
      <Habilidades />
      <Certificacoes />
      <Projetos />
      <Contatos />
      <Footer />

    </div>

  )
}

export default App
