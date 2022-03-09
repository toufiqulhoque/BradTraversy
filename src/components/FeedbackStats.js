import React from 'react';

const FeedbackStats = ({feedback}) => {
    const average=feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/feedback.length
    
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h2>Average Rating:{isNaN(average)?0:average}</h2>
        </div>
    );
};

export default FeedbackStats;