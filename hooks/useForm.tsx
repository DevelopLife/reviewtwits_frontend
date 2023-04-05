import {
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

export interface ErrorType {
  [errorName: string]: string;
}

const useForm = <T extends object>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ErrorType>();
  const [isSubmitable, setIsSubmitable] = useState(false);

  const setValue = useCallback(
    (name: string, value: any) =>
      setValues((prev) => ({ ...prev, [name]: value })),
    []
  );

  const checkFormFilled = useCallback(() => {
    const keys = Object.keys(values) as (keyof T)[];
    const emptyValues = keys.filter((name) => {
      const value = values[name];

      switch (typeof value) {
        case 'object':
          return !(values[name] as File[]).length;
        case 'string':
          return value === '';
        case 'number':
          return !value;
        default:
          return !value;
      }
    });
    const isFormFilled = !emptyValues.length;

    return isFormFilled;
  }, [values]);

  const checkFormValid = useCallback(() => {
    if (!errors) return false;
    const keys = Object.keys(errors) as (keyof ErrorType)[];
    const invalidValues = keys.filter((name) => errors[name] !== '');
    const isFormValid = !invalidValues.length;

    return isFormValid;
  }, [errors]);

  const checkSubmitable = useCallback(() => {
    const isFormFilled = checkFormFilled();
    const isFormValid = checkFormValid();

    setIsSubmitable(isFormFilled && isFormValid);
  }, [checkFormFilled, checkFormValid]);

  const handleChange = ({
    currentTarget,
  }:
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | MouseEvent<HTMLButtonElement>) => {
    const { name, value } = currentTarget;

    setValue(name, value);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    onValid: () => void
  ) => {
    e.preventDefault();

    onValid();
  };

  const initializeForm = useCallback((initialValues: T) => {
    setValues(initialValues);
  }, []);

  useEffect(() => {
    checkSubmitable();
  }, [values, checkSubmitable]);

  return {
    values,
    errors,
    isSubmitable,
    initializeForm,
    setValue,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
