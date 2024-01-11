import React from 'react'
import Header from './Header'
import Mainvisual from './Mainvisual'
import Brandstory from './Brandstory'
import Brandbrand from './Brandbrand'
import Menu from './Menu'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom';

//data
import datainfo from '../data/data.json'



function Fullslow() {
    return (
        <>
            <Header datasrc={datainfo.sectionhd} />

            <Routes>
                <Route path='/' element={<Mainvisual />} />
                <Route path="/Brandstory" element={
                    <>
                        <Brandstory datasrc={datainfo.sectionbrand} />
                        <Brandbrand datasrc={datainfo.sectionstory} />
                    </>} />
                <Route path='/Menu' element={<Menu datasrc={datainfo.sectionmenu} />} />
            </Routes>

            <Footer datasrc={datainfo.sectionft} />
        </>
    )
}

export default Fullslow
