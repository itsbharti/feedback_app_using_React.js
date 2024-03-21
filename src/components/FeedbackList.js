import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList( {feedbacks , handleDelete} ) {

    if(!feedbacks || feedbacks.length === 0) return <p>No feedbacks, sorry</p>
  return (
    <div>
      {feedbacks.map( (feedback) => (
        <FeedbackItem 
          feedback={feedback}
          key={feedback.id}
          handleDelete={() => handleDelete(feedback.id)}
         />
      ))}
    </div>
  )
}

export default FeedbackList