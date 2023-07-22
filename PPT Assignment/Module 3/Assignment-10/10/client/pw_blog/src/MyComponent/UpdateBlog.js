import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function UpdateBlog() {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [blog, setBlog] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:5000/blog/${id}`, { title, file, description, blog })
            .then(res => {
                if (res.data === "Success") {
                    navigate("/blog")
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/blog/${id}`)
            .then(result => {
                setTitle(result.data.title)
                setFile(result.data.file)
                setDescription(result.data.description)
                setBlog(result.data.blog)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <div className="update-blog-container">
                <div className="blogs-container">
                    <div className="my-blog">
                        <img src={file} alt="" className="blogs-cover" />
                        <p className="blog-title">
                            <b>{title}</b>
                        </p>
                        <div className="blog-description">
                            <p>{description}</p>
                        </div>
                        <Link to={`/readblog/${id}`}><button className="read-btn">Read</button></Link>
                    </div>
                </div>
                <div>
                    <form className="update-form-container" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={title}
                            name="blog-title"
                            placeholder="Enter Title of Your Story"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input
                            type="url"
                            value={file}
                            name="link"
                            placeholder="Enter Url of Blog Image"
                            onChange={e => setFile(e.target.value)}
                        />
                        <input
                            type="text"
                            name="blog-description"
                            placeholder="Type Short Description for Your Blog"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <textarea
                            name="blog"
                            className="blog"
                            placeholder="Type Your Blog"
                            value={blog}
                            onChange={e => setBlog(e.target.value)}
                        ></textarea>

                        <button className="update-blog-btn">Update</button>
                        <button className="close-blog-btn">Close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
