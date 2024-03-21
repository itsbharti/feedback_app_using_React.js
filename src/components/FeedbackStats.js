import React from 'react'

function FeedbackStats({feedback}) {
    let average =
        feedback.reduce((acc, cur) => {
            return acc + cur.rating
        }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4><i>{feedback.length} reviews</i></h4>
        <h4><i>average rating: {isNaN(average) ? 0 : average}</i></h4>
    </div>
  )
}

export default FeedbackStats