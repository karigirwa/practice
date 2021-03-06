export default function validateInfo(data) {
    let error = {}

    if (!data.firstname.trim()) {
        errors.firstname = "firstname is required"
    }

     if (!data.lastname.trim()) {
       errors.lastname = "lastname is required";
    }
     if (!data.email.trim()) {
       errors.email = "email required";
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
         error.email = "Email adress is invalid"
      }
    
      if (!data.gender.trim()) {
          error.gender = "gender required";
      } else if (gender !== male || gender !== female) {
          error.gender = "Gender must be male or female"
    }

    if (!data.age.trim()) {
      errors.age = "age required";
    } else if (age >= 18 && age <= 60 ) {
      error.age = "ange must be between 18years and 60 years";
    }
    if (!data.phone.trim()) {
      errors.phone = "phone number is required";
    } else if (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/(data.phone)) {
      error.phone = "Phone unumber is invalid";
    }
     if (!data.about.trim()) {
     errors.about = "About you is required";
    } 
    // if (!values.profile.trim()) {
    //   errors.profile = "profile is required";
    // } 
    
}

          
