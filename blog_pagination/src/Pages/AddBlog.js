import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const navigate=useNavigate();

    const [data,setData]=useState({});
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit =()=>{
        console.log("data",data);
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then(res=>{
            if(!res.error){
                console.log("res",res);
                alert("Blog Added");
                navigate("/")
            }
        })
    }
    return (
        <>
            <h4>add new Blog</h4>
            <form style={{margin:"10px"}} >
                <TextField onChange={handleChange} value={data.userId}  name="userId" placeholder="userId" />
                <br/>
                <br/>
                <TextField onChange={handleChange} value={data.title} name="title" placeholder="title" />
                <br/>
                <br/>

                <TextField onChange={handleChange} value={data.body} name="body" placeholder="body" />

                <br/>
                <br/>
                <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
            </form>
        </>
    );
};

export default AddBlog;
