import React from 'react'
import {Link} from 'react-router-dom'
import s from '../styles/LandingPage.module.css'

export default function LandingPage() {
  return (

    <div >

      <header className={s.aboutUs}>
      <div className={s.title}>
        <h1 > Bienvenido a Wonderland</h1>
     </div>
        <Link to={'/AboutMe'}>
        <button className={s.aboutMe}>Sobre Mi</button>
        </Link>
        

      </header>


    
      

       <div className={s.buttonBox}>
        <Link to='/home'>
                <button className='button'>Vayamos a conocer!</button>
            </Link>
      </div>
      
            
    
    </div>
    
   
  )
}
