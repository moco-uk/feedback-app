import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length === 0 ) {
        return <p>No Feedback yet!</p>

    }


  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem  
        key={item.id} 
        item={item} 
        handleDelete={handleDelete} 
        />
      ))}
    </div>
  )
}

FeedbackList.PropTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList

