import { FormControl, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

import './login.component.css';

import {CSSTransition } from 'react-transition-group';

type TLoginFields = {
    email: string,
    password: string
};

type TLoginComponentProps = {
    readonly onSubmit: (loginValues: TLoginFields) => void;
};

export const LoginComponent = (props: TLoginComponentProps) => {

    const [inProp, setInProp] = useState(false);

    const validationScheme = yup.object({
        email: yup
            .string()
            .email('Enter a valid email address')
            .required('The email address is required'),
        password: yup
            .string()
            .min(8, 'Password should have at least a length of 8')
            .required('The password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationScheme,
        onSubmit: (values: TLoginFields) => {
            props.onSubmit(values);
        }
    });

    return (
    //     <div>
    //     <CSSTransition in={inProp} timeout={200} classNames="my-node">
    //     <FormControl>
    //         <form onSubmit={formik.handleSubmit}>
    //             <TextField
    //                 fullWidth 
    //                 margin='normal'
    //                 id="email"
    //                 name="email"
    //                 label="Email"
    //                 value={formik.values.email}
    //                 onChange={formik.handleChange}
    //                 error={formik.touched.email && Boolean(formik.errors.email)}
    //                 helperText={formik.touched.email && formik.errors.email} />
    //             <TextField 
    //                 fullWidth
    //                 margin='normal'
    //                 id="password"
    //                 name="password"
    //                 label="Password"
    //                 type="password"
    //                 value={formik.values.password}
    //                 onChange={formik.handleChange}
    //                 error={formik.touched.password && Boolean(formik.errors.password)}
    //                 helperText={formik.touched.password && formik.errors.password} />
                
    //             <Button color="primary" variant="contained" fullWidth type="submit">
    //                 Submit
    //             </Button>
    //         </form>
    //     </FormControl>
    //     </CSSTransition>
    //     <button type="button" onClick={() => setInProp(true)}>
    //     Click to Enter
    //   </button>
    //     </div>
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
    )
}