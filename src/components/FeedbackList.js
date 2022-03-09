import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback,handleDelete}) => {
    if(!feedback || feedback.length===0){
        return <p>No Feed back Yet</p>

    }
    return (
        <div>
           {
               feedback.map((item)=>(
                   <FeedbackItem key={item.id}
                    item={item}
                    handleDelete={handleDelete}/>
                   
               ))
               
           }
           
           
        </div>
    );
};

export default FeedbackList;