import { useState, useCallback } from 'react';

export function useForm(initialValues = {}, validateFn = null) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur if validateFn is provided
    if (validateFn) {
      const validationErrors = validateFn(values);
      if (validationErrors[name]) {
        setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
      }
    }
  }, [values, validateFn]);

  const setValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const setError = useCallback((name, error) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const reset = useCallback((newValues = initialValues) => {
    setValues(newValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const validate = useCallback(() => {
    if (!validateFn) return true;

    const validationErrors = validateFn(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values, validateFn]);

  const handleSubmit = useCallback(async (onSubmit) => {
    return async (e) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);

      // Validate
      if (!validate()) {
        return;
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validate]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    setValue,
    setError,
    reset,
    validate,
    handleSubmit,
    setValues,
    setErrors,
  };
}
