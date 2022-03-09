import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import feedbackData from './data/FeedbackData';
import Header from './Header';


const App = () => {
const[feedback,setFeedback]=useState(feedbackData);

const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure you want to delete')){

        setFeedback(feedback.filter((item)=>item.id!==id))
    }

}
    return (
        <div>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                
            </div>
        </div>
    );
};

export default App;