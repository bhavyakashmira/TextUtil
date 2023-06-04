import React from 'react'
import {Link} from 'react-router-dom';

const mystyle={
    backgroundColor:'beige'
}

export default function welcome() {
  return (
    <div className="welcome-page" style={ mystyle} >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4">Welcome to Text Manipulator</h1>
          <p className="lead">
            <strong>Start manipulating your text with ease!</strong>
           <ul>
            <li>
                use this for lower to upper text
            </li>
            <li>
                use this for upper to lower text
            </li>
            <li>
                use this to count your words 
            </li>
            <li>
                use this to copy your text
             </li>
             </ul>
          </p>
          <Link
            to="/"
            className="btn btn-danger btn-lg"
            role="button"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
