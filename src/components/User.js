import React, { useState } from 'react';
import './Register.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Profile from './Profile'

const User = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className='user'>
            <div>
                <div className='user-image'>
                    <div className='image'>
                        <img
                            src='https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                            alt='profile'
                        />
                    </div>
                </div>
                <div className='user-name'>
                    <span>Lorem Ipsum</span>
                </div>
                <div className='user-email'>
                    <span>
                        <i className='fa fa-envelope-o'></i>
                    </span>
                    <span style={{ marginLeft: '8px' }}>lorem@example.com</span>
                </div>
                <div className='user-phone'>
                    <span>
                        <i className='fa fa-phone'></i>
                    </span>
                    <span style={{ marginLeft: '8px' }}>0234786543</span>
                </div>
                <div className='user-about'>
                    <h2>About me</h2>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                        quidem obcaecati, facilis quod cum natus?
          </span>
                </div>
            </div>
            <button type='submit' onClick={toggle}>
                <span><i className="fa fa-edit"></i></span>
                <span style={{ marginLeft: '10px' }}>Edit Profile</span>
            </button>

            {/* <Modal isOpen={modal}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
                <Profile />
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> */}
            <Profile isOpen={modal} onClick={toggle} />
        </div>
    );
};

export default User;
