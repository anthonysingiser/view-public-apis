import React from "react";
import { useState, useEffect } from "react";
import TreeView from "./TreeView";
import {MutatingDots} from 'react-loader-spinner'

const FetchApp = (props) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
     
    useEffect(() =>{
        const uri = props.address   
        async function fetchData () {
            setLoading(true)
            try{
                const res = await fetch(uri)
                const json = await res.json()
                setData(json)
                } catch(error){
                    console.log(error)
                }
            setLoading(false)
            }
            fetchData()
        },[props.address])
    return (
    <div>    
        <center>
            {loading ? <MutatingDots/> : <TreeView data={data}/>}
        </center>
    </div>
    )
}

export default FetchApp;