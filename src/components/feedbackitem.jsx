import {FaTimes,FaEdit} from "react-icons/fa"

import Card from "./shared/Card"

import PropTypes from 'prop-types'

import {useContext} from "react"

import FeedbackContext from "./context/FeedbackContext"

function Feedbackitem({item}) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("this is an example of a feedback item");

  const{handleDelete,handleEdit} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">
        {item.rating} 
      </div>

      <button onClick={()=> handleDelete(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button onClick={()=>{handleEdit(item)}} className="edit" >
          <FaEdit color="purple"/>
      </button>

      <div className="text-display">
        {item.text}
      </div>
    </Card>

  )

}

 
  Feedbackitem.propTypes = {
    item : PropTypes.object.isRequired
  }
    

  export default Feedbackitem
