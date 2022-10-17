import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import '../index.css'
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/10/09/1600x900/India-South-Africa-Cricket-1_1665303901481_1665303901481_1665303923876_1665303923876.jpg" :imageUrl} className="card-img-top" alt="..." />  
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}  

export default NewsItem;
