import React from "react";
import { useNavigate } from "react-router-dom"


function Post() {

    const navigate = useNavigate();
    return (
        <>
        <h1>Posts</h1>
        <button onClick={ () => navigate("create") }> Create new Post</button>
        <button onClick={ () => navigate("/") }> Back </button>
        </>
    )
}

export default Post
