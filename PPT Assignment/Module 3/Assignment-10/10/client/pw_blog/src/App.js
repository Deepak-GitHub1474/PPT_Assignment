import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from "react"
import React from 'react';
import axios from "axios"
import Navbar from './MyComponent/Navbar';
import Register from './MyComponent/Register';
import Login from './MyComponent/Login';
import Home from './MyComponent/Home';
import AddBlog from './MyComponent/AddBlog';
import MyBlog from './MyComponent/MyBlog';
import BlogByID from './MyComponent/BlogByID';
import UpdateBlog from './MyComponent/UpdateBlog';

export const userContext = createContext()

function App() {

  const [user, setUser] = useState({
    username: null,
    email: null
  })

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(user => {
        setUser(user.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/blog/add" element={<AddBlog />} />
            <Route path="/myblog" element={<MyBlog />} />
            <Route path="/blog/:blogID" element={<BlogByID />} />
            <Route path="/updateblog/:id" element={<UpdateBlog />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
