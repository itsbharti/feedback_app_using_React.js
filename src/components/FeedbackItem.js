import Card from './shared/Card'

import {FaTimes, FaEdit} from 'react-icons/fa'
function FeedbackItem({feedback, handleDelete}) {
    return (
        <Card>
            <div className='num-disply '>{feedback.rating}</div>
            <div className='text-disply'>{feedback.text}</div>
            <button onClick={handleDelete} className='close'>
                <FaTimes className='purple' color='red' />
            </button>
        </Card>
    )
}

export default FeedbackItem