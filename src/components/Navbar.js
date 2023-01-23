import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { render } from 'react-dom';


function Navbar(props) {
  const [searchStr, setSearchStr] = useState('')
  const handleSearch = (e) => {
    setSearchStr(e.target.value);
  }
  const redirectTomovies = () => {
    window.location.href = "search?name=" + searchStr;
  }

 

  return (
    <>
     <div className='container-fluid text-light' style={{ backgroundColor: "#1e272e" }}>
      <div className="container  text-light">
        <header className="p-3 mb-3 border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-start justify-content-between">
              <div className="d-flex link-light text-light">
              <Link to="popular" className="nav-link px-2 link-light" style={{fontSize:"20px"}}>
                  {' '}
                  Movie<span style={{color:"yellow"}}>Db</span>
                </Link>
             
                <Link to="popular" className="nav-link px-2 link-light">
                  {' '}
                  Popular
                </Link>
                <Link to="toprated" className="nav-link px-2 link-light">
                  Top Rated
                </Link>
                <Link to="upcoming" className="nav-link px-2 link-light">
                  Upcoming
                </Link>

                <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search.." />
                <button style={{backgroundColor:"grey", border:"none",color:"white", padding :" 8px 18px", textAlign:"center"}} onClick={() => redirectTomovies()}>Search</button>
         

              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
    </>
  );
}

export default Navbar;
