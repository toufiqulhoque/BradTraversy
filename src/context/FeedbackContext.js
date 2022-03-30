import { createContext, useEffect, useState } from "react";


const FeedbackContext =createContext()
export const FeedbackProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true)
    const [feedback,setFeedback]=useState([])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    useEffect(()=>{
fetchFeedback()
    },[])

    //Fetch feedback
    const fetchFeedback=async()=>{
        const response=await fetch(`/feedback?_sort=id&_order=desc`)
        const data =await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
//Delete Feedback
    const deleteFeedback=async(id)=>{
        if(window.confirm('Are you sure you want to delete')){

            await fetch(`/feedback/${id}`,{method:'DELETE'})
    
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
   
    }
    //update feedback item
    const updateFeedback=async(id,updItem)=>{
        const response=await fetch(`/feedback/${id}`,{
            method :'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(updItem),

        })
        const data=await response.json()
        setFeedback(feedback.map((item)=>item.id===id?{...item,...data}:item))
    }
    // Add Feedback
    const addFeedback=async(newFeedback)=>{
        const response = await fetch('/feedback',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
       const data= await response.json()
        setFeedback([data,...feedback]);
    }
    // Set item to update
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext