import React, { useState, useEffect } from 'react';
import './Register.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Profile = (props) => {
  // const [person, setUsers] = useState([])

  // useEffect(() => {

  //   userPro()
  // }, []);

  // function userPro() {
  //   axios.get("http://localhost:3000/api/Alluser")
  //     .then((result) => {
  //       let user = result.data
  //       setUsers(user.data.slice(-1)[0])
  //       console.log(user.data.slice(-1)[0])
  //     }).catch(err => {
  //       console.log(err)
  //     })

  // }
  // console.log(person)
  // console.log(person[0])
  return (
    // <div>
    <Modal isOpen={props.isOpen}>
      <ModalHeader className="title"><h1>Edit Profile</h1></ModalHeader>
      <form action='/' name='myForm' method='get'>
        <div className='input'>
          <label>First Name</label>
          <input type='text' id='fname' name='firstName' />
        </div>

        <div className='input'>
          <label>Last Name</label>
          <input type='text' id='lname' name='lastName' />
        </div>

        <div className='input'>
          <label>Phone Number</label>
          <input type='text' id='phone' name='phoneNumber' />
        </div>

        <div className='input'>
          <label>Email</label>
          <input type='text' id='email' name='Email' />
        </div>

        <div className='input'>
          <label>Age</label>
          <input type='number' id='age' name='Age' />
        </div>

        <div className=''>
          <label>Gender</label>
          <input type='text' id='gender' name='Gender' />
        </div>

        {/* <div className="input">
            <label>Profile Picture</label>
            <input type="file" id="profile" name="Profile Picture" />
          </div> */}

        <div className='input'>
          <label>About me </label>
          <textarea id='subject'></textarea>
        </div>

        <button type='submit' class='register-btn'>
          Update
          <i
            className='fa fa-spinner fa-spin'
            style={{ marginLeft: '8px' }}
          ></i>
        </button>
        <input type='reset' value='Cancel' onClick={props.onClick} />
      </form>
    </Modal>
  );
};

export default Profile;
