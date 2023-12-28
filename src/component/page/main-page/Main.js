import React from 'react'
import "./style.css"
import AddNews from './AddNews';
import ListNews from './ListNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../top-menu/Menu';
import Footer from '../footer/Footer';
function Main() {

    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>

                    <Route path='/' element={<ListNews />} />
                    <Route path='/add-news' element={<AddNews />} />
                    <Route path='/list-news' element={<ListNews />} />
                    <Route path='*' element={"Page not found"} />
                </Routes>

                <Footer />
            </BrowserRouter>


        </>

    )
}

export default Main