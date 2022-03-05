import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// Img
import logo from '../../assets/img/logo.png';
// Style
import {
  Wrapper,
  Image,
  Content,
  FormWrapper,
  Error,
  InputBox,
  Back,
  // Complete,
} from './Signup.styles';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .max(40)
    .min(3, 'First Name must be at least 3 characters')
    .required('Required First Name'),
  lastName: yup
    .string()
    .max(40)
    .min(3, 'Last Name must be at least 3 characters')
    .required('Required Last Name'),
  username: yup
    .string()
    .max(40)
    .min(3, 'User Name must be at least 3 characters')
    .required('Required User Name'),
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  password: yup
    .string()
    .required('No password provided.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:'
    ),
  confirmPwd: yup
    .string()
    .required('Password is mendatory')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

function Signup() {
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [completeMsg, setCompleteMsg] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    // onSubmit
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    // setCompleteMsg('Your email address or password is not correct');
    console.log(data);
    
    reset()

  };
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate('/',);
  };
  const handlerBack = () => {
    navigate(-1);
  };
  
  return (
    <Wrapper>
      <Content>
        <Image onClick={handlerHome}>
          <img src={logo} alt='logo' />
        </Image>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputBox>
              <div className='input-item'>
                <label>First Name</label>
                <input
                  type='text'
                  {...register('firstName')}
                  placeholder='First Name'
                />
              </div>
              <div className='input-item'>
                <label>Last Name</label>
                <input
                  type='text'
                  {...register('lastName')}
                  placeholder='Last Name'
                />
              </div>
            </InputBox>
            {errors.firstName?.message && (
                <Error>{errors.firstName?.message}</Error>
              )}
              
              {errors.lastName?.message && (
                <Error>{errors.lastName?.message}</Error>
            )}
         
            <div className='input-item'>
              <label>Email</label>
              <input
                {...register('email')}
                placeholder='Enter your email address'
              />
              {errors.email?.message && <Error>{errors.email?.message}</Error>}
            </div>
            <div className='input-item'>
              <label>Choose Username</label>
              <input
                name='username'
                type='text'
                {...register('username')}
                placeholder='Username'
              />
              {errors.username?.message && <Error>{errors.username?.message}</Error>}
            </div>
            <div className='input-item'>
              <label>Password</label>
              <input
           
                type='password'
                {...register('password')}
                placeholder='Enter your password'
              />
              {errors.password?.message && (
                <Error>{errors.password?.message}</Error>
              )}
            </div>
            <div className='input-item'>
              <label>Re enter Password</label>
              <input
                
                type='password'
                {...register('confirmPwd')}
                placeholder='Enter your password'
              />
              {errors.confirmPwd?.message && (
                <Error>{errors.confirmPwd?.message}</Error>
              )}
            </div>
            {/* {errorMsg && <Error>{errorMsg}</Error>} */}

            <button type='submit' value='submit'>
              signup
            </button>
          </form>
          <Back type='button' onClick={handlerBack}>Go Back</Back>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
}

export default Signup;
