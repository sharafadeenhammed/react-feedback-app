import Feedbackitem from "./feedbackitem"
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import {motion,AnimatePresence} from "framer-motion"

function Feedbacklist(){
    const{feedback}=useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>; 
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {
                feedback.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial ={{opacity:"0.4",width:"70%"}}
                        animate ={{opacity:1,width:"100%"}}
                        exit = {{opacity:0,
                        padding:0}} >
                            <Feedbackitem  key ={item.id} item= {item}/>
                    </motion.div>
                  )
                )
            }  
            </AnimatePresence>
        </div>
     

    // return (
    //     <div className="feedback-list">
    //         {
    //             feedback.map((item) => (
    //                 <Feedbackitem  key ={item.id} item= {item}/>
    //               )
    //             )
    //         }  

    //     </div>
    )
   
}

// Feedbacklist.propTypes = {
//     // feedback : PropTypes.array
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     )

    
// }



export default Feedbacklist