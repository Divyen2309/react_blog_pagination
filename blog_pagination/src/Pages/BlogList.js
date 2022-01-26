import { useEffect, useState } from "react";
// import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useDispatch, useSelector } from "react-redux";
import { deletePost, getBlogs } from "../Redux/BlogSlice";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const BlogList = () => {
    const BlogData = useSelector(state => state.blog.blog)
    // console.log("BlogData", BlogData);
    const routes = useParams();
    console.log("routes", routes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [rowPerPage, setRowPerPage] = useState(10);


    useEffect(() => {
        dispatch(getBlogs({ page, rowPerPage }));
        // eslint-disable-next-line
    }, [page, rowPerPage]);

    const handleClickDelete = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(deletePost({ id })).then(res => {
                if (!res.data) {
                    alert("Post Deleted")
                }
            })
        }
    }

    return (
        <>
            <div style={{ justifyContent: "space-between", display: "flex", margin: "10px" }}>
                <h2>Blog List</h2>
                <Button color="primary" variant="contained"
                    onClick={() => navigate('/blogData/new')}
                >Add New Blog</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>

                        <TableCell>ID</TableCell>
                        <TableCell>User ID</TableCell>
                        <TableCell>TITTLE</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        BlogData && BlogData.map((item, index) => (
                            <TableRow key={index}  >
                                <TableCell
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/blog/${item.id}`)}
                                >Edit</TableCell>
                                <TableCell
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleClickDelete(item.id)}
                                >Delete</TableCell>

                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.userId}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.body}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div style={{ display: "flex", margin: "20px" }}>
                <Button color="primary" variant="contained"
                    onClick={() => setPage(page - 1)}
                >-</Button>
                <span style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }} >{page}</span>
                <Button color="primary" variant="contained"
                    onClick={() => setPage(page + 1)}
                >+</Button>
            </div>
        </>
    );
};

export default BlogList;
