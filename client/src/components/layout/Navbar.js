import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';
const Navbar = ({title, icon}) => {
    return (
<div className="navbar bg-primary">
    <h1> <i className={icon}>{title}</i> </h1>
    <ul>
    <li>
        <Link to ="/register">Register </Link>
    </li>
    <li>
        <Link to ="/login">Login </Link>
    </li>
    </ul>
</div>
    )
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon:PropTypes.string
}
Navbar.defaultProps={
    title:"Contact Keeper",
    icon: 'fas da-id-card-alt'
}
    


export default Navbar;
