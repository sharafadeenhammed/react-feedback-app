import {Link} from "react-router-dom"
import {FaQuestion} from "react-icons/fa"


function LinkIcon() {
  return (
        <div className="about-link" >
            <Link to={{
                pathname:"/about",
                search:"sort=name",
                hash:"hello"
            }}>
                <FaQuestion size={30} />
                
            </Link>
        </div>
    ) 
}

export default LinkIcon