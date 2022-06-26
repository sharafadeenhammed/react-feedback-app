import {useParams,Navigate,useNavigate,Router,Routes,Route} from "react-router-dom"

function Post() {
   let params = useParams();
   let navigate = useNavigate();
   const Click = ()=>{
       console.log("hello");
       navigate("/")
   }
   const status =  200; 
   if(status === 404) return <Navigate to="/"/>
  return (
   <>
        <div>
            {params.id && <h1>Post:{params.id}</h1>}
            
            {params.name && <h1>Name:{params.name}</h1>}

            <p><button className="active-btn" onClick={Click}>Click</button></p>
        </div>
            {/* <Routes>
            <Route path="/show" element=
                {<h1>this is the show.</h1>}/>
            </Routes>
     */}
   </>
   )
}

export default Post