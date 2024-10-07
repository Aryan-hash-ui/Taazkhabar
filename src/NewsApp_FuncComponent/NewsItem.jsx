import React  from 'react'

export default function NewsItem(props){
  function getDate(date) {
    return new Date(date).toLocaleDateString()
  }
 
    return (
     <>
     <div className='col-lg-3 my-2 col-md-4 col-sm-6 col-12'>
      <div className="card">
  <img src={props.pic?props.pic:"/noimage.png"} className="card-img-top" height="150px" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">{props.title && props.title.slice(0,340)} </h5>
  <div className='d-flex justify-content-between'>
  <p>{props.source.name}</p>

  <p>{getDate(props.date)}</p>

  </div>
   
    <p className="card-text">{props.description && props.description.slice(0,150).concat("...")}</p>
    <a href={props.url} className="btn btn-light bg-primary backcolor text-light w-100" target="_new"  rel="noreferrer" >Read More...</a>
  </div>
</div>
</div>  


       
       
     </>

    )
  }

