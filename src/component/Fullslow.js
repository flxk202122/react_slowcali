import React from 'react'
import Header from './Header'
//data
import datainfo from '../data/data.json'

//data


function Fullslow() {
    return (
        <>
            <Header datasrc={datainfo.sectionhd} />
        </>
    )
}

export default Fullslow
