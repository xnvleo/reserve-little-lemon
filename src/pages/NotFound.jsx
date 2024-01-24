import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container notfound'>
        <h2>Sorry, the page you are looking for is not found.</h2>
        <Link to="/" className='btn-link'>return to home</Link>
    </div>
  )
}

export default NotFound