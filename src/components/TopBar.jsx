import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topBar d-flex justify-content-between align-items-center border-bottom border-3 shadow'>
        <h1 className="navbar-brand fs-2 cinzel-decorative m-0" href="#">NatureNest Realty</h1>
        <Link to='/' className="btn btn-primary">Go To Web Site</Link>
    </div>
  )
}

export default TopBar