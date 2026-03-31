import { useForm } from './Form';

export default function FormControlError({
  name,
  className = '',
}) {
  const { errors, touched } = useForm();

  const error = touched[name] ? errors[name] : undefined;

  if (!error) {
    return null;
  }

  return (
    <p className={`mt-1.5 text-sm text-[#EF4444] ${className}`}>
      {error}
    </p>
  );
}
