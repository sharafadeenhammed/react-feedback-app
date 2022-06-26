import {createContext,useState} from "react";
import FeedbackData from "../../data/Feedbackdata";


const FeedbackContext = createContext();



export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState
    (FeedbackData);
    const [editItem,setEdititem]= useState(
        {
            item:"",
            edit:false
        }
    )
    const [select,setSelect]= useState(1);

    const handleSelect = (value)=>{
        setSelect(value)
    }


    const handleEdit = (item)=>{
        setEdititem({
            item,
            edit:true
        })
    }
    const resetEdititem = ()=>{
        setEdititem({
            item:"",
            edit:false
        })
    }



    const handleDelete = (id)=>{
        if(window.confirm("are you sure you want to delete")){
        setFeedback((feedback)=>{
            return feedback.filter((data)=> data.id !== id);
        })
    }
    }

    const addFeedback= (newFeedback)=>{
        let ids = feedback.map(a=>a.id).sort((a,b)=>b-a);
        let id = ids[0]+1;
        newFeedback.id = id;
        setFeedback([newFeedback,...feedback]);
    }
    const updateFeedback= (id,upItem)=>{
        setFeedback(feedback.map((item)=>
            item.id === id? {...item,...upItem}:item
        ))
    }

    return(
        <FeedbackContext.Provider value={{
            editItem,
            feedback,
            select,
            handleDelete,
            addFeedback,
            handleEdit,
            updateFeedback,
            resetEdititem,
            handleSelect
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext 