import React from 'react'

const NewsAndAdvicesCards = ({id, img, details}) => {
  return (
    <div key={id}>
      <div>
        {img}
      </div>
      <caption>
        {details}
      </caption>
    </div>
  )
}

export default NewsAndAdvicesCards
