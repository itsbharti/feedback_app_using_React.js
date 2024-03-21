import {useState} from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm() {
    const[inputText, setInputText] = useState('')
    const [rating, setRating] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleInputTextChange = (e) => {
        if(inputText === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (inputText !== '' && inputText.trim().length <=10) {
            setBtnDisabled(true)
            setMessage('your review is too short')
        }else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setInputText(e.target.value)
    }
  return (
    <Card>
        <form action=''>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input
                    onChange={handleInputTextChange}
                    type='text'
                    placeholder='write a review'
                    value={inputText}
                />
                {/* <button type='submit'>send</button> */}
                <Button type='submit' isDisabled={btnDisabled}>
                    send
                </Button>
            </div>
            {message && <p>{message}</p>}
        </form>
    </Card>
  )
}

export default FeedbackForm