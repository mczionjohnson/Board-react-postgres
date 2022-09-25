import React from "react";
import { useNavigate } from "react-router-dom"


function CreatePost() {

    const navigate = useNavigate();
    return (
        <>
        <h1>Create Post with Forms</h1>

        <button onClick={ () => navigate("/post") }> Back </button>

        </>
    )
};

export default CreatePost;