import { useForm } from './Form';
import Button from './Button';

export function FormReset({
  children,
  className = '',
}) {
  const { resetForm } = useForm();

  return (
    <Button type="button" onClick={resetForm} variant="secondary" className={className}>
      {children}
    </Button>
  );
}
