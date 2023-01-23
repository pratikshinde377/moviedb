import React, { useEffect,useState } from 'react';
import {API_KEY, BASE_API,img_url} from "../api";
import Card from './Card';
import {Link} from "react-router-dom";
import { Grid } from '@mui/material';
import styled from 'styled-components';

function Upcoming(props) {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);

    const fetchLoadMore = async (page) => await BASE_API.get(`/movie/upcoming?api_key=${API_KEY}&page=${page}&language=en-US`).then((response) => {
        const movies = response.data.results;
        setData(movies); 
      });
    
      useEffect(() => {
        fetchLoadMore(page);
      }, [page]);

      const next=()=>{
        let newPage = page+1;
        setPage(newPage);
      }
      const previous=()=>{
        let newPage =  page>1 ? page-1 : 1;
        setPage(newPage);
      }

      return (<>
        <h1 className='offset-1'>Upcoming Movies</h1>
        <div className="container-fluid row ">
          <div className='col-sm-12'>  
            <div className="container d-flex flex-wrap allign-item-space-between">
            {
              
              data?.map((item,index)=>(
                
                <Grid style={{justifyContent:"space-around", padding:"5px"}} key={index} >
                  <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}>
                    <Card img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id} style={{width:"13rem",marginRight:"2%"}}/>
                  </Link>
                </Grid>
               
              ))
            }
            </div>
           </div>
           <div className="d-flex justify-content-between">
    <button type="button" onClick={previous}  className="btn btn-dark"> &larr;Previous</button>
    <button type="button" onClick={next}   className="btn btn-dark">Next&rarr;</button>
    </div>
          </div>
            
        </>);
      }
      
      export default Upcoming;

      const LoadButton = styled.button`
      display: block;
      width: 100%;
      padding: 12px 0;
      margin-left:
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: #ff5e57;
      border: 0;
      border-radius: 35px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    
      &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
      }
    `;
