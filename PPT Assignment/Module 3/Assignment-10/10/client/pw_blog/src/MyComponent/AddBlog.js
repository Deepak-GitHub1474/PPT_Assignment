import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from '../App'

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [story, setStory] = useState("");

    const user = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = {
            title: title,
            file: file,
            description: description,
            email: user.email
        };

        axios.post("http://localhost:5000/blog/add", blogData)
            .then(res => {
                if (res.data === "Success") {
                    window.location.href = "/myblog";
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form className="blog-container" onSubmit={handleSubmit}>
                <h1>Write Your Blog</h1>
                <input
                    type="text"
                    name="blog-title"
                    placeholder="Enter Title of Your Story"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="url"
                    name="file"
                    placeholder="Enter URL of Blog Image"
                    value={file}
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
                    name="story"
                    className="story"
                    rows="40"
                    placeholder="Type Your Blog"
                    value={story}
                    onChange={e => setStory(e.target.value)}
                >
                </textarea>
                <button className="publish-blog-btn">Publish Blog</button>
            </form>
        </div>
    );
}
