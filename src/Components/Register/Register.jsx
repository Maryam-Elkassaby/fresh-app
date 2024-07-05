import React from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';

export default function Register() {

    function submitForm (values){
        // console.log('hello in form');
        console.log(values);
    }
    let Formik = useFormik({

        initialValues : {
            name : '', 
            email : '' ,
            phone : '' , 
            password : '' , 
            rePassword : ''
        },
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

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="email">Email</label>
                <input 
                    className='form-control'
                    type="email"
                    name='email'
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    />

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="phone">phone</label>
                <input 
                    className='form-control'
                    type="tel"
                    name='phone'
                    value={Formik.values.phone}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    />

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="password">password</label>
                <input 
                    className='form-control'
                    type="password"
                    name='password'
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    />

                <label className='form-label text-main fw-bold d-block text-start mt-4' htmlFor="rePassword">Re-Password</label>
                <input 
                    className='form-control'
                    type="password"
                    name='rePassword'
                    value={Formik.values.rePassword}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    />
                
                <button className='btn bg-main text-white mt-3' type='submit'>Register</button>
            </form>
        </div>
    </>
}