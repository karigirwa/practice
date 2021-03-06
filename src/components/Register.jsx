import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router"
import axios from 'axios'
// import Validate from './ValidateInfo'

const Register = () => {
  const history = useHistory();

  const { register, handleSubmit, error } = useForm();

  const onSubmit = async (data) => {
    
    const { firstname, lastname, email, age, phone, gender, about } = data;
    const personInfo = { firstname, lastname, email, age, phone, gender, about }


    axios.post("http://localhost:3000/api/register", personInfo)
      .then(res => {
        console.log(res)
        history.push({
          pathname: "/profile",
          state: {
            response: res.data.message
          }
        })
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response)
          history.push({
            pathname: "/",
            state: {
              response: err.response.data.message
            }
          })
          alert(err.response.data.message)
        } else if (err.request) {
          console.log(err.request)
        } else {
          console.log("unknown issue")
        }
      })



  };


    return (
        <div>
           <div className="container">
      <div className="profile_form">
        <div className="title">
          <h1>Create profile</h1>
        </div>
        <form action="/"  onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="input">
            <label>First Name</label>
                <input type="text" id="fname" name="firstname" ref={ register({required:true})}/>
          </div>
            
          <div className="input">
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" ref={ register({required:true})}/>
          </div>
          
          <div className="input">
            <label>Phone Number</label>
            <input type="text" id="phone" name="phone" ref={ register({required:true})}/>
          </div>

          <div className="input">
            <label>Email</label>
            <input type="text" id="email" name="email" ref={ register({required:true})} />
          </div>
          
          <div className="input">
            <label>Age</label>
            <input type="number" id="age" name="age" ref={ register({required:true})} />
          </div>

          <div className="">
            <label>Gender</label>
            <input type="text" id="gender" name="gender" ref={ register({required:true})} />
          </div>

          {/* <div className="input">
            <label>Profile Picture</label>
            <input type="file" id="profile" name="profile" ref={ register({required:true})} />
          </div> */}

          <div className="input">
            <label>About me </label>
            <textarea id="subject" name="about" ref={ register({required:true})}></textarea>
          </div>
          
          <div className="input">
            <button>Submit</button> 
            <input type="reset" value="Cancel" />
           
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Register;