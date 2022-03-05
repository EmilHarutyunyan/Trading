import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  ForgotPass,
  SignUpItem,
  Error,
} from './Login.styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  password: yup
    .string()
    .required('No password provided.')
    // .min(8, 'Password is too short - should be 8 chars minimum.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

function Login() {
  const [errorMsg, setErrorMsg] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    // onSubmit
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    setErrorMsg('Your email address or password is not correct')
    console.log(data);
  };
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate('/', );
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
              <label>Email</label>
              <input
                {...register('email')}
                placeholder='Enter your email address'
              />
              {errors.email?.message && <Error>{errors.email?.message}</Error>}
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
            {errorMsg && (
                <Error>{errorMsg}</Error>
              )}
            <ForgotPass>
              <Link to='/forgot'>Forgot your password?</Link>
            </ForgotPass>

            <button type='submit' value='submit'>
              log in
            </button>
            <SignUpItem>
              <p>Haven't got an account?</p>
              <Link to='/signup'>signup</Link>
            </SignUpItem>
          </form>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
}

export default Login;
