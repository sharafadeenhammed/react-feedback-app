import PropTypes from 'prop-types'
import {useContext} from "react"
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
    const {feedback}= useContext(FeedbackContext)
    const length = feedback.length;
    const avr = Math.round(feedback.reduce((a,item)=>a+item.rating,0)/length);
    //avr = avr.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
        <h4>____{length} Reviews</h4>
        <h4>Average Ratings: {isNaN(avr) ? 0:avr}
         ____</h4>
     </div>
  )
} 

// FeedbackStats.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             rating:PropTypes.number.isRequired
//         })
//     )
// }

export default FeedbackStats