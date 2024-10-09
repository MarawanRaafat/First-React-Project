import React from 'react'
import './style.css'
import Loginimg from './componants/Loginimg'
import Signup from './componants/Signup'

export default function Signin() {
  return (
    <div className='contaner-of-all'>
      <Signup />
      <Loginimg />
    </div>
  )
}
