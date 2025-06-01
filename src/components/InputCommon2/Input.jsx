import styles from './styles.module.scss';

const InputCustom = ({
  label,
  type,
  dataOptions,
  isRequired = false,
  register,
}) => {
  const { container, labelCls } = styles;
  const renderInput = () => {
    if (type === 'text') {
      return <input type='text' placeholder={label} {...register} />;
    } else {
      return (
        <select>
          <option value='' selected disabled hidden>
            {label}
          </option>
          {dataOptions.map(item => {
            return (
              <option {...register} key={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      );
    }
  };
  return (
    <div className={container}>
      <label className={labelCls}>
        {label} {isRequired && <span>*</span>}
      </label>
      {renderInput()}
    </div>
  );
};

export default InputCustom;
