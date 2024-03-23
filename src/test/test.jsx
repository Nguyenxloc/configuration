import React from "react";
import { useEffect, useState } from "react";

export default function test(){
    const [data, setData]  = useState([]);
    const url =  "";
    async function getData(){
        const res =  await fetch(url);
        const data =  await res.json();
        setData(data);
        console.log("do fetch: "); 
    }
    useEffect(()=> {
    });
    return(
        <div>
            <video width="320" height="240" autoPlay>
            <source src="video/banner.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}