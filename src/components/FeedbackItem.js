import { useContext } from "react";
import { FaEdit } from 'react-icons/fa';
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

const FeedbackItem = ({item}) => {
 const {deleteFeedback,editFeedback} =useContext(FeedbackContext)
  
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className="close">
               x
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
            <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            
        </Card>
    );
};

export default FeedbackItem;