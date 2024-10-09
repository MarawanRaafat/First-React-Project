import React from 'react'
import './style.css'
import Loginform from './componants/Loginform'
import Loginimg from './componants/Loginimg'


export default function Login() {
  return (
    <>
      <div className='contaner-of-all'>
        <Loginform />
        <Loginimg />
      </div>
    </>
  )
}

