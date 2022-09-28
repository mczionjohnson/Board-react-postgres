// import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import {useNavigate} from "react-router-dom";


function Homepage() {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/posts")
        .then((res) => {
            console.log(res);
            setPosts(res.data);

        })
        .catch((err) => console.log(err));

    }, []); 

    return (
        <>
        <h1>Community Board</h1>

        {posts ? (
            <>
            {posts.map(post => {
                // for every post return
                // use id as unique key for the mapped objects
                return (
                    <div key={post.id}>
                    <h3>{post.event}</h3>
                    <h4>Team: {post.team}</h4>
                    <h4>Date: {(post.date).slice(0, 10)}</h4>
                    <h4>Time: {post.time}</h4>
                    <h4>Entry: {post.entry_fee}</h4>
                    

                    </div>

                )
            })}
            
            </>

        ) : ""}
        <button onClick={ () => navigate("post") }>View Latest Post</button>

        </>
    )
};

export default Homepage;