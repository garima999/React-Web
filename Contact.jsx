import React, { useState } from 'react';
const Contact = () => {
    const[data,setdata]=useState({

        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const inputevent=(event)=>{
       const{name,value}=event.target;
       setdata((preval)=>{ 
        return{
            ...preval,
            [name]:value,
        }
       })
    }
    const formsubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname} + ${data.phone} + ${data.email} + ${data.msj}`)
       
       
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>
                    contact us
                </h1>

            </div>
            <div className="container contact_div">
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputevent} placeholder="Mobile no." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msj} onChange={inputevent}rows="3"></textarea>
                            </div>
                            <div class="col-12">
    <button class="btn btn-outline-warning" type="submit">Submit form</button>
  </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;