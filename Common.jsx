import React from 'react';
import {NavLink} from 'react-router-dom'
const img1="https://th.bing.com/th/id/R.fdd753b788699c52a6eb11121c287a6f?rik=a4haD%2fdfY8H7sw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_549558.png&ehk=d%2f2v2OCqENtVJnCgr5Mqhh4GAbSmb%2f943mhBY%2fqH1Dc%3d&risl=&pid=ImgRaw&r=0"

;
const Common = (props) => {
    return (
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                            
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>{props.name} <strong className='brand_name'>Garima Nagarwal</strong></h1>
                                <h2 className='my-2'>We Are Team Of Talented Developers of Websites</h2>
                                <div className="mt-3">  </div>
                                <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>

                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                <img src={props.imgsrc} className='img-fluid animated' alt='home img'/>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default Common;