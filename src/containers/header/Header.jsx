import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="chamalhat__header section__padding" id="home">
    <div className='chamalhat__header-content'>
      <h1 className='gradient__text'>
        Let's build something amazing with ChamalHat
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Nibh nisl condimentum id venenatis a condimentum vitae sapien. 
       Vel pharetra vel turpis nunc eget lorem dolor sed viverra.</p>
      <div className='chamalhat__header-content__input'>
        <input type="email" placeholder='Your e-mail adress' />
        <button type="button">Get Started</button>
      </div>
      <div className='chamalhat__header-content__people'>
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className='chamalhat__header-image'>
      <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header