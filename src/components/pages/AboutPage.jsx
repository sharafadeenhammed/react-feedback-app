import Card from "../shared/Card"
import {Link} from "react-router-dom"
import Header from "../header"


function AboutPage({children}) {
  return (
  <>
    <Header/>
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave feedback for a product or a service</p>
        <p>Version: 1.0.0</p>
        <p><Link className="active" to="/">HOME</Link></p>
      </div>
      {children}
    </Card>
  </>
  )
} 

export default AboutPage