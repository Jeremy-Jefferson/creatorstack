import { useForm } from './Form';
import Button from './Button';

export function FormSubmit({
  children,
  className = '',
}) {
  const { handleSubmit } = useForm();

  return (
    <Button type="submit" onClick={handleSubmit} className={className}>
      {children}
    </Button>
  );
}
