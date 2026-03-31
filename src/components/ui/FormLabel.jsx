import { useForm } from './Form';

export function FormLabel({
  name,
  children,
  className = '',
}) {
  const { errors, touched } = useForm();

  const error = touched[name] ? errors[name] : undefined;

  return (
    <label
      className={`block text-sm font-medium mb-1.5 ${
        error ? 'text-[#EF4444]' : 'text-[#A8B0C2]'
      } ${className}`}
    >
      {children}
    </label>
  );
}
