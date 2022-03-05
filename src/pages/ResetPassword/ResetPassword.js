import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Back,
  Text,
} from './ResetPassword.styles';

const schema = yup.object().shape({
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
function ResetPassword() {
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
    console.log(data);
    reset();
  };
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate('/');
  };
  const handlerBack = () => {
    navigate('/login', );
  };
  return (
    <Wrapper>
      <Content>
        <Image onClick={handlerHome}>
          <img src={logo} alt='logo' />
        </Image>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <button type='submit' value='submit'>
              confirm password
            </button>
          </form>
        </FormWrapper>
        <Back onClick={handlerBack}>Back to login</Back>
      </Content>
    </Wrapper>
  );
}

export default ResetPassword;
