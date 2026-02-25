import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='bottom-div'>
        <i>&copy; All Rights Reserved. Nichi-in {year}</i>
    </div>
  )
}
