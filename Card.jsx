import React from 'react';
import { NavLink } from 'react-router-dom';

const img2 = "https://media.istockphoto.com/id/1267473515/photo/young-girl-woman-in-a-yellow-shirt-works-on-a-laptop-with-a-mug-of-coffee-at-home-in-the.jpg?s=2048x2048&w=is&k=20&c=kEcWQnXHht1clegvoLQ7gGtXQwAnrLMG9JwpEW8VHDw="

    ; const Card = (props) => {
        return (
            <>


                <div className='col-md-4 col-10 mx-auto'>
                    <div class="card" >
                        <img src={props.imgsrc} class="card-img-top" alt="blank" />
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>

                </div>
          
                     </>
        );
    };


export default Card;