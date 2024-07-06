import React from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";

export default function Register() {

    function submitForm (values){
        console.log(values);
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let validationSchema = yup.object({
        name : yup
                .string()
                .required('Please Enter a username'),
        email : yup
                .string()
                .required('Please Enter your Email'),
        phone : yup
                .string()
                .required('Please Enter your password')
                .matches(phoneRegExp , 'Phone number is not valid'),
        password : yup
                .string()
                .required('Please Enter your password')
                .matches(
                    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
        rePassword : yup
                .string()
                .required('Please Enter your rePassword')
                .oneOf([yup.ref("password") , ''] , "Passwords must match"),
    })

    let Formik = useFormik({
        initialValues : {
            name : '', 
            email : '' ,
            phone : '' , 
            password : '' , 
            rePassword : ''
        },
        validationSchema : validationSchema,
        onSubmit : submitForm
    })

    return <>
        <div className="w-50 mx-auto my-4">
            <form action="" onSubmit={Formik.handleSubmit}>
                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="name">Name</label>
                <input 
                    className='form-control'
                    type="text"
                    name='name'
                    value={Formik.values.name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />   
                {Formik.errors.name && Formik.touched.name ? <div class="alert alert-danger mt-2 py-1"> {Formik.errors.name} </div> : ''}
                
                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="email">Email</label>
                <input 
                    className='form-control'
                    type="email"
                    name='email'
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email ? <div class="alert alert-danger mt-2 py-1"> {Formik.errors.email} </div> : ''}

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="phone">phone</label>
                <input 
                    className='form-control'
                    type="tel"
                    name='phone'
                    value={Formik.values.phone}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.phone && Formik.touched.phone ? <div class="alert alert-danger mt-2 py-1"> {Formik.errors.phone} </div> : ''}

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="password">password</label>
                <input 
                    className='form-control'
                    type="password"
                    name='password'
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.password && Formik.touched.password ? <div class="alert alert-danger mt-2 py-1"> {Formik.errors.password} </div> : ''}

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="rePassword">Re-Password</label>
                <input 
                    className='form-control'
                    type="password"
                    name='rePassword'
                    value={Formik.values.rePassword}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.rePassword && Formik.touched.rePassword ? <div class="alert alert-danger mt-2 py-1"> {Formik.errors.rePassword} </div> : ''}

                <button  className='btn bg-main text-white mt-3' type='submit'>Register</button>
            </form>
        </div>
    </>
}