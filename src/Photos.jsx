import React, { useEffect, useState } from 'react';
import './App.css';
// import myImage from './assets/funny.jpg';
export default function Photos() {
          const [photos, setPhotos] = useState([]);
            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/photos')
                    .then(res => res.json())
                    .then(data => setPhotos(data))
            }
            , []);
            return (
                <>
                    <h1 className="heading-total">Total Photos: {photos.length}</h1>
                    <div className="photos-card-container">
                        {
                          
                            photos.map(photo => (
                              
                              <div className="photo-card" key={photo.id}>
                                        <figure>
                                        {/* <img className='myImage' src={myImage} alt="" /> */}
                                        </figure>
                                        <div className="">
                                            <h2 className="card-title">Card Title: {photo.title}</h2>
                                            
                                        
                                            <button className="btn btn-primary">Buy Now</button>
                                        
                                        </div>
                                        </div>

                            ))
                            
                        }
                    </div>
                </>
            )
            
}
// {photo.url}