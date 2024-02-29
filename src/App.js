/***************************************************************/
/***************************************************************/
/**************** Retrouvez-nous sur GitHub : ******************/
/************ https://github.com/ABDOULIBRAMESSAIB *************/
/************ https://github.com/jordandefay *******************/
/***************************************************************/
/***************************************************************/


import React from 'react';
import { Footer, Blog, Possibility, Features, Chamalhat, Header } from './containers'; 
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css'; 

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Chamalhat />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App