import React from 'react';
import './Register.css';
import validate from './ValidateInfo';
import useForm from './useForm';

const Register = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validate
  );

  return (
    <div>
      <div className='container'>
        <div className='profile_form'>
          <div className='title'>
            <h1>Create profile</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='input'>
              <label>First Name</label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p className='error'>{errors.firstname}</p>}
            </div>

            <div className='input'>
              <label>Last Name</label>
              <input
                type='text'
                id='lname'
                name='lastname'
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p className='error'>{errors.lastname}</p>}
            </div>

            <div className='input'>
              <label>Phone Number</label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className='error'>{errors.phone}</p>}
            </div>

            <div className='input'>
              <label>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>

            <div className='input'>
              <label>Age</label>
              <input
                type='number'
                id='age'
                name='age'
                value={values.age}
                onChange={handleChange}
              />
              {errors.age && <p className='error'>{errors.age}</p>}
            </div>

            <div className='input'>
              <label>Gender</label>
              <select
                id='gender'
                name='gender'
                value={values.gender}
                onChange={handleChange}
              >
                <option defaultValue='select'>select</option>
                <option value='male'>female</option>
                <option value='female'>male</option>
              </select>
              {errors.gender && <p className='error'>{errors.gender}</p>}
            </div>

            {/* <div className="input">
            <label>Profile Picture</label>
            <input type="file" id="profile" name="profile" ref={ register({required:true})} />
          </div> */}

            <div className='input'>
              <label>About me </label>
              <textarea
                id='subject'
                name='about'
                value={values.about}
                onChange={handleChange}
              ></textarea>
              {errors.about && <p className='error'>{errors.about}</p>}
            </div>

            <div className='input'>
              <button type='submit' class='register-btn'>
                Submit
                 <i className="fa fa-spinner fa-spin"style={{marginLeft:'8px'}}></i>
              </button>
              <input type='reset' value='Cancel' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
