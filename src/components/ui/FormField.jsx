import { useForm } from './Form';

export function FormField({
  name,
  label,
  children,
  className = '',
}) {
  const { values, errors, touched, handleChange, handleBlur } = useForm();

  const value = values[name];
  const error = touched[name] ? errors[name] : undefined;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
          {label}
        </label>
      )}
      {children({
        name,
        value,
        error,
        onChange: (e) => handleChange(name, e.target.value),
        onBlur: () => handleBlur(name),
      })}
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
}
