import './App.css';
import {useState} from 'react'

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((f) => f.id !== id))
  }

  return (
    <>
    <Header />
    <div className='container'>
      <FeedbackForm />
      <FeedbackStats feedback={feedbacks} />
      <h1>feedback app</h1>
      <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
