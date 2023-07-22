import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ReadBlog() {

    const [blog, setBlog] = useState({})
    const { blogID } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/readblog/${blogID}`)
            .then(blog => setBlog(blog.data))
            .catch(err => console.log(err))
    }, [blogID])

    return (
        <div className="read-blog-container">
            <div className="read-blog-title-description">
                <h1> <b>{blog.title}</b></h1>
                <p>{blog.blog}</p>
            </div>
            <div className="read-blogs-cover-container">
                <img src={blog.file} alt="" className="read-blogs-cover" />
            </div>
        </div>
    )

}