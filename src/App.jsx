import React, { useState,useEffect } from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import './style.css'


export default function App() {
    const [Arr, setArr] = useState([])
    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=de7d5e788356460f96bd8affed9df60a";
        
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setArr(json.articles)
            console.log("Manasvi",json);
            // setarr{json};
            // console.log(arr);
          } catch (error) {
            console.log("error", error);

          }
        };
    
        fetchData();
    }, []);
    
    return (
        <div>
            <Navbar title="News App" />
            <div className='boss'>
                {
                    Arr && Arr.map((e,i)=>{
                    return (
                        <>
                        {
                            e.urlToImage!=="" && <Cards key={i} title={e.title} content={e.content} img={e.urlToImage} />
                        }
                        </>
                        )
                    })
                }
            </div>
        </div>
    )
}