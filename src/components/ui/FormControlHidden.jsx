import { forwardRef } from 'react';
import { useForm } from './Form';

const FormControlHidden = forwardRef(({
  name,
  ...props
}, ref) => {
  const { values, handleChange } = useForm();

  const value = values[name] || '';

  return (
    <input
      ref={ref}
      type="hidden"
      name={name}
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
      {...props}
    />
  );
});

FormControlHidden.displayName = 'FormControlHidden';

export default FormControlHidden;
