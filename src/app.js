import Header from "./components/header";

import FeedbackStats from "./components/FeedbackStats";

import Feedbacklist from "./components/Feedbacklist";

import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./components/pages/AboutPage";

import {BrowserRouter as Router, Route,Routes,NavLink} from "react-router-dom";

import LinkIcon from "./components/shared/LinkIcon";

import {FeedbackProvider} from "./components/context/FeedbackContext";


import Card from "./components/shared/Card";

import Post from "./components/pages/Post";


function App(){

    return( 
        <FeedbackProvider>
        <Router>
            <Routes>
                <Route exact path="/" element={<>
                    <Header/>
                    < FeedbackForm />
                    <FeedbackStats/>
                    <div className="container">
                        < Feedbacklist/>
                    </div>
                    <LinkIcon/>
                </>} /> 
            </Routes>

            <Routes>      
                <Route exact path="/about" element={<AboutPage/>} />
            </Routes>

            <Routes>
                <Route path="/post/:id/:name" element={<Post/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/post/:id" element={<Post/>}/>

            </Routes>
        <Card>
            <NavLink activeClassName = "active-btn" to="/">HOME</NavLink>
            <NavLink activeClassName = " active-btn" to="/about">ABOUT</NavLink>
        </Card> 
            
        </Router>
    </FeedbackProvider>
        

 
    )
} 


export default App
