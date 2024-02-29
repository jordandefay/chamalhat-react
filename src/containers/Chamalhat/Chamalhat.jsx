import React from 'react'
import './chamalhat.css';
import { Feature } from '../../components';
const Chamalhat = () => {
  return (
    <div className='chamalhat__whatchamalhat section__margin' id='whatchamalhat'>
      <div className='chamalhat__whatchamalhat-feature'>
        <Feature title="Qu'est-ce que ChamalHat" text="La solution innovante : ChamalHat" />
      </div>
      <div className='chamalhat__whatchamalhat-header'>
        <h1 className='gradient-text'>Une infinité de possibilité, à vous de choisir l'une d'elle</h1>
        <p>Explore the library</p>
      </div>
      <div className='chamalhat__whatchamalhat-container'>
        <Feature title="ESN" text="Lorem ipsum dolor simet amet lorem ipsu dolot simet amet" />
        <Feature title="Développeur" text="Lorem ipsum dolor simet amet lorem ipsu dolot simet amet"/>
        <Feature title="Qualité" text="Profitez de tarif réduit tout en conservant la qualité" />
      </div>
    </div>
  )
}

export default Chamalhat