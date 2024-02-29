import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving',
    text: 'From they fine john he gives ffsjdfkjsdkf lkfsljfsdkjf kjfsk'
  },
  {
    title: 'Improving',
    text: 'From they fine john he gives ffsjdfkjsdkf lkfsljfsdkjf kjfsk'
  },
  {
    title: 'Improving',
    text: 'From they fine john he gives ffsjdfkjsdkf lkfsljfsdkjf kjfsk'
  },
  {
    title: 'Improving',
    text: 'From they fine john he gives ffsjdfkjsdkf lkfsljfsdkjf kjfsk'
  },

]
const Features = () => {
  return (
    <div className="chamalhat__features section__padding" id="features">
      <div className="chamalhat__features-heading">
        <h1 className='chamalhat__features-heading'>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>
        <p>Demandez un accés anticipé !</p>
      </div>
      <div className="chamalhat__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features