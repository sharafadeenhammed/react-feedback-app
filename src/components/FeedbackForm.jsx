import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import {useState,useContext,useEffect} from "react"
import FeedbackContext from "./context/FeedbackContext";


let myText ;
function FeedbackForm() {
    const[text,setText] = useState("");
    const[message,setMessage] = useState("");
    const[rating,setRating] = useState(1);
    const[btnState,setBtnstate] = useState(true);
    const {addFeedback,updateFeedback,editItem,resetEdititem,handleSelect} = useContext(FeedbackContext);
    useEffect(()=>{
        if(editItem.edit === true){
            setText(editItem.item.text);
            setBtnstate(false);
            setRating(editItem.item.rating);
        }
    },[editItem])
    
    const handleTextChange = (e)=>{
        // let curText = myText.trim();
        myText = e.target.value;
        if(myText === ""){
            setBtnstate(true);
            setMessage(null); 
        }
        else if(myText !== "" && text.trim().length<10){
            setMessage("Text must be at least ten characters");
            setBtnstate(true);
        }else{
            setBtnstate(false);
            setMessage(null); 
        }
        setText(e.currentTarget.value);       
    }

    const handleRating = (rating)=>{
       setRating(rating);

    }


   const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.length >=10){
            const newFeedback = {
                text,
                rating  
            }
            setText('');
            setBtnstate(true);
            setRating(0)
            handleSelect(1);

            if(editItem.edit){
                updateFeedback(editItem.item.id,newFeedback);
                resetEdititem();
            }
            else{
                addFeedback(newFeedback);
            }
        }
    }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect rating={rating} handleRating={handleRating}/>
           
            <div className="input-group">
                <input onChange= {handleTextChange}
                type="text"
                value={text}
                placeholder="write a review" />
                <Button
                    type="submit"
                    isDisabled={btnState}>
                        Send
                </Button>
            </div>
        </form>
        {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm
