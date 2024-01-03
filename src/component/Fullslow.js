import React from 'react'
import Header from './Header'
import Mainvisual from './Mainvisual'
import Brandstory from './Brandstory'

import { Route, Routes } from 'react-router-dom';

//data
import datainfo from '../data/data.json'



function Fullslow() {
    return (
        <>
            <Header datasrc={datainfo.sectionhd} />

            <Routes>
                <Route path='/' element={<Mainvisual />} datasrc={datainfo.sectionbrandstory} />
                <Route path="/Brandstory" element={<Brandstory />} />
            </Routes>
        </>
    )
}

export default Fullslow
