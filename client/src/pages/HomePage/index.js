import React from "react";
import {useNavigate} from "react-router-dom";


function HomePage() {

    const navigate = useNavigate();

    return (
        <>
        <h1>Community Board</h1>
        
        <button onClick={ () => navigate("post") }>View Latest Post</button>

        </>
    )
};

export default HomePage;