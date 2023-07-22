import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MyBlog() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/blog/")
            .then(blogs => {
                setBlogs(blogs.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="blogs-container">
            {blogs.map(blog => (
                <Link to={`/blog/${blog._id}`} className="blog-by-id" key={blog._id}>
                    <div className="my-blog">
                        <img src={blog.file} alt="" className="blogs-cover" />
                        <p className="blog-title">
                            <b>{blog.title}</b>
                        </p>
                        <div className="blog-description">
                            <p>{blog.description}</p>
                        </div>
                        <Link to={`/readblog/${blog._id}`}><button className="read-btn">Read</button></Link>
                    </div>
                </Link>
            ))}
        </div>
    )
}