import {
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { signAPI } from 'api/sign';
import type { SignUpParams, UserFormType } from 'typings/account';

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

    if (name === 'birthday') {
      const birthDate = convertStringToDate(value);
      const newValues = { ...values, [name]: birthDate };
      return setValues(newValues);
    }

    const newValues = { ...values, [name]: value };

    setValues(newValues);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    onValid: () => void
  ) => {
    e.preventDefault();

    // passwordCheck를 제거
    const signUpParams: SignUpParams = {
      nickname: '테스트닉네임',
      accountId: values.accountId,
      authenticationCode: '성공',
      accountPw: values.accountPw,
      phoneNumber: values.phoneNumber,
      birthday: values.birthday,
      gender: values.gender,
    };

    const response = await signAPI.signUp(signUpParams);
    onValid();
  };

  const convertStringToDate = (dateString: string) => {
    const dates = dateString
      .split('-')
      .map((dateElement) => Number(dateElement));

    const [year, month, date] = dates;
    const convertedDate = new Date(year, month - 1, date);

    return convertedDate;
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
