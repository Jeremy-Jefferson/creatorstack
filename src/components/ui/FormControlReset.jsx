import { forwardRef } from 'react';
import { useForm } from './Form';
import Button from './Button';

const FormControlReset = forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  const { resetForm } = useForm();

  return (
    <Button
      ref={ref}
      type="button"
      onClick={resetForm}
      variant="secondary"
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
});

FormControlReset.displayName = 'FormControlReset';

export default FormControlReset;
