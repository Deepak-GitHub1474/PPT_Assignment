import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { userContext } from "../App"

export default function BlogByID() {

    const [blog, setBlog] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)
    const { blogID } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/blog/${blogID}`)
            .then(blog => setBlog(blog.data))
            .catch(err => console.log(err))
    }, [blogID])

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/blog/${blogID}`)
            .then(blog => {
                navigate("/myblog");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="blogs-by-id">
            <img src={blog.file} alt="" className="blogs-cover" />
            <p className="blog-title"> <b>{blog.title}</b> </p>
            <div className="blog-description">
                <p>{blog.description}</p>
            </div>

            <div className="btn-container">
                {user.email === blog.email ?
                    <>
                        <Link to={`/readblog/${blog._id}`} className="link-btn">
                            <button className="blog-read-btn">Read</button>
                        </Link>
                        <Link to={`/updateblog/${blog._id}`} className="link-btn">
                            <button className="blog-edit-btn">Edit</button>
                        </Link>
                        <button className="blog-delete-btn" onClick={e => handleDelete(blog._id)}>Delete</button>
                    </> : <></>
                }
            </div>
        </div>
    )

}