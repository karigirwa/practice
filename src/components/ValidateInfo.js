export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = 'First name is required';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Last name is required';
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = 'Email is invalid';
  }

  if (!values.gender.trim()) {
    errors.gender = 'Gender is required';
  }
  // else if (values.gender !== 'male' || values.gender !== 'female') {
  //   errors.gender = 'Gender must be male or female';
  // }

  if (!values.age.trim()) {
    errors.age = 'Age is required';
  } else if (!(values.age >= 18 && values.age <= 60)) {
    errors.age = 'Age must be between 18 years and 60 years';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (
    /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(values.phone)
  ) {
    errors.phone = 'Phone number is invalid';
  }
  if (!values.about.trim()) {
    errors.about = 'About you is required';
  }
  // if (!values.profile.trim()) {
  //   errors.profile = "profile is required";
  // }
  return errors
}
