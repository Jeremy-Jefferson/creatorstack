import { forwardRef } from 'react';
import { useForm } from './Form';
import Button from './Button';

const FormControlSubmit = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  const { handleSubmit } = useForm();

  return (
    <Button
      ref={ref}
      type="submit"
      onClick={handleSubmit}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
});

FormControlSubmit.displayName = 'FormControlSubmit';

export default FormControlSubmit;
