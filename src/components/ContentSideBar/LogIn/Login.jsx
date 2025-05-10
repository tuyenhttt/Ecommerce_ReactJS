import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';

function Login() {
  const { container, title, boxRememberMe, lostPassword, buttonWrapper } =
    styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label='Email' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />
      <div className={boxRememberMe}>
        <input type='checkbox' />
        <span>Remember me</span>
      </div>

      <div className={buttonWrapper}>
        <MyButton content={'LOGIN '} />
      </div>
      <div className={lostPassword}>Lost your password</div>
    </div>
  );
}

export default Login;
