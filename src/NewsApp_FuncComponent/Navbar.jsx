import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let [search,setSearch]= useState("")
function getData(e)
  {
    setSearch(e.target.value)
  }

function postData(e)
{
  e.preventDefault()
props.changeSearch(search)

}
    return (
      <>
<nav className="navbar navbar-expand-lg bg-primary backcolor sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fw-semibold" to="/">TaazaKhabar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light fw-semibold" aria-current="page" to="/all" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }} >All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/science" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/medical" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Medical</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/technology" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/music" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Music</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/sports" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-semibold" to="/crime" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Crime</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bollywood" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Bollywood </Link></li>
            <li><Link className="dropdown-item" to="/hollywood" onClick={()=>{
            props.changeSearch("") 
            setSearch("")
          }}>Hollywood</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/jokes" >Jokes</Link></li>
          </ul>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-semibold" href="#"  rel="noreferrer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>props.changeLanguage('hi')}>Hindi</button></li>
            <li><button className="dropdown-item"  onClick={()=>props.changeLanguage('en')}>English</button></li>
           
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>postData(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" value={search}   name='search' onChange={(e)=>getData(e)} aria-label="Search"/>
        <button className="btn backcolor text-light btn-outline-light" type="submit" >Search</button>

      </form>
    </div>
  </div>
</nav>


      </>
    )
  }

