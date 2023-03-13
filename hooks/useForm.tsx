import {
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import type { UserFormType } from 'typings/account';

const useForm = (initialValues: UserFormType) => {
  const [values, setValues] = useState<UserFormType>(initialValues);
  const [errors, setErrors] = useState<UserFormType>();
  const [isSubmitable, setIsSubmitable] = useState(false);

  const checkFormFilled = useCallback(() => {
    const keys = Object.keys(values) as (keyof UserFormType)[];
    const emptyValues = keys.filter((name) => values[name] === '');
    const isFormFilled = !emptyValues.length;

    return isFormFilled;
  }, [values]);

  const checkFormValid = useCallback(() => {
    if (!errors) return false;
    const keys = Object.keys(errors) as (keyof UserFormType)[];
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
  }: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    const { name, value } = currentTarget;

    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    onValid: () => void
  ) => {
    e.preventDefault();

    onValid();
  };

  useEffect(() => {
    checkSubmitable();
  }, [values, checkSubmitable]);

  return {
    values,
    errors,
    isSubmitable,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
