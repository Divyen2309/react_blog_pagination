import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getBlogComment } from "../Redux/BlogSlice";

const Blogcomments = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Comments = useSelector(state => state.blog.blogComments);
    console.log("Comments", Comments);
    console.log("id", id);
    useEffect(() => {
        dispatch(getBlogComment({ id }));
    }, [id])
    return (
        <>
            <br />
            <br />
            <br />
            <div>Comments</div>
            <br />
            {/* {JSON.stringify(Comments)} */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Post ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>



                <TableBody>
                    {
                        Comments && Comments.map((item, index) => (
                            <TableRow  key={index}  >
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.postId}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.body}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default Blogcomments;
