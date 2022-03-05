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
  Text
} from './Forgot.styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});
function Forgot() {
  const [showMsg, setShowMsg] = useState(false);
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
    setShowMsg(!showMsg);
    reset();
  };
  const navigate = useNavigate();
  const handlerHome = () => {
    navigate('/', );
  };
  const handlerBack = () => {
    navigate('/login', );
  };
  return (
    <Wrapper>
      <Content className={showMsg ? `message`: ''}>
        <Image onClick={handlerHome}>
          <img src={logo} alt='logo' />
        </Image>
        <FormWrapper>
          {showMsg ? (
            <Text>
              One more step to getting back into your account! Please go to your
              email asssociated with your account and click the reset password
              link.
            </Text>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-item'>
                <label>Email</label>
                <input
                  {...register('email')}
                  placeholder='Enter your email address'
                />
                {errors.email?.message && (
                  <Error>{errors.email?.message}</Error>
                )}
              </div>
              <button type='submit' value='submit'>
                reset password
              </button>
            </form>
          )}
        </FormWrapper>
        <Back onClick={handlerBack}>Back to login</Back>
      </Content>
    </Wrapper>
  );
}

export default Forgot;
