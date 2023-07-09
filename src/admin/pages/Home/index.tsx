import React from 'react'
import { Sidebar } from "../../components/Sidebar";
import { Main } from "../../components/Main";
import { Navbar } from "../../components/Navbar";
import "./style.css"
export const Home=()=>{
    return(
        <div className='container'>
            <Navbar/>
            <Sidebar/>
            <Main/>
        </div>

    );

}