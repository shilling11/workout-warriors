import React from 'react'
import './BlogsPage.css'
import '../App.css'
import Navbar from './Navbar'
import { ArticlesData } from './ArticlesData'
import { Link } from 'react-router-dom'

function BlogsPage() {
  return (
    <>
    <Navbar/>
    <h2 className="blogs-name">BLOGS</h2>
    <div className="blogs-container">
        {ArticlesData.map((blog, index) => {
            return (
                <Link to={blog.url} className="blog-container" key={index} style={{textDecoration:'none'}}>
                    <img src={blog.image} alt="" className="blog-image" />
                    <p className="blog-title">{blog.title}</p>
                </Link>
            )
        }, [])}
    </div>
    </>
  )
}

export default BlogsPage