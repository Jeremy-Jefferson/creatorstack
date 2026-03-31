import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export function FormProvider({
  children,
  onSubmit,
  initialValues = {},
  validate,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (validate) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        onSubmit?.(values);
      }
    } else {
      onSubmit?.(values);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

export function Form({
  children,
  className = '',
}) {
  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
