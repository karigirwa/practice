import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const useForm = (validate) => {
    const history = useHistory();
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        about: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setSubmitted(true)

        if (Object.keys(validate(values)).length === 0) {
            console.log('Val:', values);
            history.push('./users/1')
            axios
                .post('http://localhost:3000/api/register', values)
                .then((res) => {
                    console.log('sub1:', submitted)
                    console.log(res);
                    if (res.data) {
                        setSubmitted(false)
                        let id = res.data.user.id
                        
                        history.push({
                            pathname: `/users/${id}`,
                            state: {
                                response: res.data.message,
                            },
                        });
                    }

                })
                .catch((err) => {
                    if (err.response) {
                        setSubmitted(false)
                        console.log(err.response);
                        console.log('sub:', submitted)
                        // history.push({
                        //     pathname: '/',
                        //     state: {
                        //         response: err.response.data.message,
                        //     },
                        // });
                        alert(err.response.data.message);
                    } else if (err.request) {
                        console.log(err.request);
                    } else {
                        console.log('unknown issue');
                    }
                });
        } else {
            console.log(submitted)
            console.log('Error:', validate(values));
        }
    };

    return { handleChange, values, handleSubmit, errors, submitted };
};

export default useForm;
