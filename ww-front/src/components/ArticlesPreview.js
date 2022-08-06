import React from 'react';
import '../App.css';
import { ArticlesData } from './ArticlesData';
import './ArticlesPreview.css';
import {Link} from 'react-router-dom';

function ArticlesPreview() {
  return (
    <div className="articles-container">
        <h2 className="articles-words">
            READ THE LATEST ARTICLES
        </h2>
        <div className="articles-images">
        <div className="large-container">
            <Link to='/blogs'>
                <img src={ArticlesData[0].image} alt="" className="large" />
            </Link>
            <p className="large-text">{ArticlesData[0].title}</p>
        </div>
        <div className="small-container">
            <div className="img-1">
            <Link to='/blogs'>
            <img src={ArticlesData[1].image} alt="" className="small" />
            </Link>
            <p className="small-text1">{ArticlesData[1].title}</p>
            </div>

            <div className="img-2">
                <Link to='/blogs'>
            <img src={ArticlesData[2].image} alt="" className="small" />
            </Link>
            <p className="small-text2">{ArticlesData[2].title}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ArticlesPreview