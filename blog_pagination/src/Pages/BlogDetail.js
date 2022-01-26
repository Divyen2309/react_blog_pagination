import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getBlogByID, updateBlog } from "../Redux/BlogSlice";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const BlogData = useSelector(state => state.blog.blogByID);
    const [data, setData] = useState(BlogData);

    console.log("BlogData by id", BlogData);
    console.log("id", id);
    // const [isComments,setComments]=useState(false);
    useEffect(() => {
        dispatch(getBlogByID({ id }));
    }, [id]);
    // useEffect(() => {
    //     // dispatch(getBlogByID({ id }));
    //     setData(BlogData)
    // }, [BlogData]);

    const handleSubmit = () => {
        // setComments(!isComments);
        console.log("BlogData", BlogData);
        dispatch(updateBlog(BlogData)).then(res => {
            if (!res.error) {
                alert("Blog Updated");
                navigate('/');
            }
        })
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {
                BlogData && (
                    <>
                        <h4>Blog Details</h4>

                        <form style={{ margin: "10px" }} >
                            {id !== "new" && (
                                <>
                                    <TextField disabled value={BlogData.id}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        name="ID" label="ID" />
                                    <br />
                                    <br />
                                </>
                            )}
                            <TextField onChange={handleChange} value={BlogData.userId}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="userId" label="userId" />
                            <br />
                            <br />
                            <TextField onChange={handleChange} value={BlogData.title}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="title" label="title" />
                            <br />
                            <br />

                            <TextField onChange={handleChange} value={BlogData.body}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="body" label="body" />

                            <br />
                            <br />
                            <Button onClick={handleSubmit} color="primary" variant="contained">Update</Button>
                            {/*  */}
                        </form>
                        <Button color="primary" variant="contained"
                            // onClick={handleClickComments}
                            onClick={() => navigate(`comments/${id}`)}
                        >Comments</Button>
                        <Outlet />
                    </>
                )
            }

        </>
    );
};

export default BlogDetail;
