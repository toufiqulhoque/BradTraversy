import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
    const {feedback,isLoading}=useContext(FeedbackContext)

    if(!isLoading &&(!feedback || feedback.length===0)){
        return <p>No Feed back Yet</p>

    }
    return isLoading?<h3>Loading ...</h3>:( <div>
        <AnimatePresence>
      {   
          feedback.map((item)=>(
              <motion.div  
              key={item.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              >
              <FeedbackItem key={item.id}
               item={item}
              />
              </motion.div>
          ))
          
      }
      </AnimatePresence>
      
   </div>)
  
    // return (
    //     <div>
    //        {
    //            feedback.map((item)=>(
    //                <FeedbackItem key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}/>
                   
    //            ))
               
    //        }
           
           
    //     </div>
    // );
};

export default FeedbackList;