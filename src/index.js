import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import Header from "./Header";
import Footer from "./Footer";


ReactDOM.render(<BrowserRouter> 
                    <div>
                        <Header />    
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="first" element={<FirstPage />} />
                            <Route path="second" element={<SecondPage />} />
                            <Route path="third" element={<ThirdPage />} />
                        </Routes>
                        <Footer />
                    </div>
                </BrowserRouter>, document.getElementById('root'));