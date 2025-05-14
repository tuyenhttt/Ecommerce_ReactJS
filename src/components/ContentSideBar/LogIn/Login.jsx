import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';

function Login() {
  const { container, title, boxRememberMe, lostPassword, buttonWrapper } =
    styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cfmpassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      cfmpassword: isRegister
        ? Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords not match')
            .required('Confirm password is required')
        : Yup.string().notRequired(),
    }),
    onSubmit: async values => {
      if (isLoading) return;

      const { email: username, password } = values;
      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then(res => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch(err => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        await signIn({ username, password })
          .then(res => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;

            Cookies.set('token', token);
            Cookies.set('refreshToken', refreshToken);
          })
          .catch(err => {
            setIsLoading(false);
          });
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  useEffect(() => {});

  return (
    <div className={container}>
      <div className={title}>
        {isLoading ? 'LOADING...' : isRegister ? 'SIGN UP' : 'SIGN IN'}
      </div>

      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id='email'
          label='Email'
          type='text'
          isRequired
          formik={formik}
        />
        <InputCommon
          id='password'
          label='Password'
          type='password'
          isRequired
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id='cfmpassword'
            label='Confirm Password'
            type='password'
            isRequired
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}

        <div className={buttonWrapper}>
          <MyButton
            content={
              isLoading ? 'LOADING...' : isRegister ? 'SIGN UP' : 'LOGIN'
            }
            type='submit'
          />
        </div>
      </form>
      <div className={buttonWrapper}>
        <MyButton
          content={
            isRegister ? 'Already have an account?' : 'Dont have an account'
          }
          type='submit'
          isPrimary={false}
          style={{
            marginTop: '20px',
          }}
          onClick={handleToggle}
        />
      </div>
      {!isRegister && <div className={lostPassword}>Lost your password</div>}

      {/* Toast container */}
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  );
}

export default Login;
