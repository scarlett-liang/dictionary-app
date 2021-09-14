import {useState} from 'react';
import './App.css';

export default function Search(){
    const [keyword,setKeyword]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }
    function handleChange(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <div className="row g-3 text-center">
                 <input type="search" className="col-8 ms-5" placeholder="What word do u wanna look up?" autoFocus={true} onChange={handleChange}/>
                 <button type="submit" className="btn btn-primary col ms-1 me-5">Search</button>
                </div>
            </form>
        </div>
    );
}