import React, { useState, useEffect }  from 'react'
import './Register.css'
import axios from 'axios'


const Profile = () => {
 
  const [person, setUsers]= useState([])
  
 
  useEffect(() => {
   
    userPro()
  }, []);

 function userPro (){
  axios.get("http://localhost:3000/api/Alluser")
    .then((result) => {
      let user = result.data
      setUsers(user.data.slice(-1)[0])
      console.log(user.data.slice(-1)[0])
    }).catch(err => { 
      console.log(err)
    })
  
  }
  console.log(person)
  console.log(person[0])
    return (
      <div>
            <div className="container">
      <div className="profile_form">
        <div className="title">
          <h1>Edit profile</h1>
        </div>
        <form  action="/" name="myForm" method="get" >
          <div className="input">
            <label>First Name</label>
            <input type="text" id="fname" name="firstName" value={person.firstname} />
          </div>
            
          <div className="input">
            <label>Last Name</label>
            <input type="text" id="lname" name="lastName" value={ person.lastname} />
          </div>
          
          <div className="input">
            <label>Phone Number</label>
            <input type="text" id="phone" name="phoneNumber" value={ person.phone} />
          </div>

          <div className="input">
            <label>Email</label>
                <input type="text" id="email" name="Email" value={ person.email}/>
          </div>
          
          <div className="input">
            <label>Age</label>
            <input type="number" id="age" name="Age" value={ person.age} />
          </div>

          <div className="">
            <label>Gender</label>
            <input type="text" id="gender" name="Gender" value={ person.gender} />
          </div>

          {/* <div className="input">
            <label>Profile Picture</label>
            <input type="file" id="profile" name="Profile Picture" />
          </div> */}

          <div className="input">
            <label>About me </label>
            <textarea id="subject" id="subject" value={person.about}></textarea>
          </div>
          
          <div className="input">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Profile