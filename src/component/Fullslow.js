import React from 'react'
import Header from './Header'
import Mainvisual from './Mainvisual'
//data
import datainfo from '../data/data.json'

//data


function Fullslow() {
    return (
        <>
            <Header datasrc={datainfo.sectionhd} />
            <Mainvisual />
        </>
    )
}

export default Fullslow
