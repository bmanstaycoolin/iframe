import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import FirstPage from "./FirstPage/FirstPage";


ReactDOM.render(<BrowserRouter> 
                    <Routes>
                        
                        <Route path="/" element={<HomePage />} />
                        <Route path="first" element={<FirstPage />} />
                    </Routes>
                </BrowserRouter>, document.getElementById('root'));