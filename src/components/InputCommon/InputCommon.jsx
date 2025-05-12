import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

function InputCommon({
  label,
  type,
  isRequired = false,
  formik,
  id,
  ...props
}) {
  const { labelInput, boxInput, container, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const isShowTextPassword = isPassword && showPassword ? 'text' : type;

  const error = formik.errors[id];
  const touched = formik.touched[id];
  const submitCount = formik.submitCount;

  useEffect(() => {
    if (submitCount > 0 && error) {
      toast.error(error, { toastId: id }); // tránh lặp lại toast
    }
  }, [submitCount, error, id]);

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          id={id}
          name={id}
          type={isShowTextPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
          {...props}
        />
        {isPassword && (
          <div
            className={boxIcon}
            onClick={setShowPassword.bind(null, !showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
