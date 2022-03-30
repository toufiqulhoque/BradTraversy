import React from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import About from './components/About/About';
import AboutIcon from './components/AboutIcon';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from './Header';


const App = () => {


    return (
        <FeedbackProvider>
        <div>
           <Router>
           <Header />
            

            <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm ></FeedbackForm>
                <FeedbackStats />
                <FeedbackList />
                </>
            }>
            
            </Route>
            <Route path='/about' element={<About/>}/>
            </Routes>
                </div>
                <AboutIcon/>
           </Router>
                
        
        </div>
        </FeedbackProvider>
    );
};

export default App;