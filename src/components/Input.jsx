import React,{useState}from "react";

export default function Input(){

    const [word,setword]=useState("");
    const track=(e)=>{
        const letter=e.target.value;
        setword(letter);
    }

    return(
        <div className="input">
            <input type="text" onChange={track} word={word} placeholder="What to do"/>
        </div>
    );
} 