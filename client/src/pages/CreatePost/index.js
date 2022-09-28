// import React from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap";


function CreatePost() {

    const navigate = useNavigate();
    return (
        <>
        <h1>Create Post</h1>
        

        <button onClick={ () => navigate("/post") }> Back </button>

        </>
    )
};

export default CreatePost;