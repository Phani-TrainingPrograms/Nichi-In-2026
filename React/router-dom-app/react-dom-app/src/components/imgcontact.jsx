import React from 'react'

export default function ImgContact({ image }) {//props for the image file
  const url = `/assets/images/contacts/${image}`;
  return (
    <div>
      <img src={url} alt='image' />
    </div>
  )
}
